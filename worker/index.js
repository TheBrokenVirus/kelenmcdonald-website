const MAX_LEN = { name: 200, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function validate(body) {
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const company = String(body.company || "").trim(); // honeypot

  if (company) return { error: "Rejected." }; // silently trip bots
  if (!name || name.length > MAX_LEN.name) return { error: "Enter your name." };
  if (!EMAIL_RE.test(email) || email.length > MAX_LEN.email) return { error: "Enter a valid email." };
  if (!message || message.length > MAX_LEN.message) return { error: "Enter a message." };

  return { value: { name, email, message } };
}

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = "-1 hour";

async function isRateLimited(env, ip) {
  if (!ip) return false;

  const row = await env.DB.prepare(
    `SELECT COUNT(*) AS count FROM submissions WHERE ip = ?1 AND created_at > datetime('now', '${RATE_LIMIT_WINDOW}')`
  )
    .bind(ip)
    .first();

  return (row?.count || 0) >= RATE_LIMIT_MAX;
}

async function notify(env, submission) {
  if (!env.EMAIL || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) return;

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO_EMAIL,
      from: { email: env.CONTACT_FROM_EMAIL, name: "Kelen McDonald Website" },
      replyTo: submission.email,
      subject: `New project inquiry from ${submission.name}`,
      text: `${submission.message}\n\n—\n${submission.name} <${submission.email}>`,
      html: `<p>${submission.message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")}</p><p>—<br>${submission.name} &lt;${submission.email}&gt;</p>`,
    });
  } catch (err) {
    console.error("email notify failed:", err.code || "", err.message || err);
  }
}

async function handleContact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Malformed request." }, 400);
  }

  const { value, error } = validate(body);
  if (error) return json({ error }, 400);

  const ip = request.headers.get("cf-connecting-ip") || "";
  if (await isRateLimited(env, ip)) {
    return json({ error: "Too many requests. Please try again later." }, 429);
  }

  await env.DB.prepare(
    "INSERT INTO submissions (name, email, message, user_agent, ip) VALUES (?1, ?2, ?3, ?4, ?5)"
  )
    .bind(value.name, value.email, value.message, request.headers.get("user-agent") || "", ip)
    .run();

  await notify(env, value);

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
