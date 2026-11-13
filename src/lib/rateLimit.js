// Simple in-memory sliding-window limiter, keyed by anything (IP + route).
// NOTE: on serverless hosts (Vercel) memory is per instance, so this is a speed bump, not a wall.
// Turnstile (see turnstile.js) is the strong protection. For hard limits use Upstash Redis.
const buckets = new Map();

export function rateLimit(key, limit, windowMs, now = Date.now()) {
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return { ok: false, retryAfter: Math.max(1, Math.ceil((windowMs - (now - hits[0])) / 1000)) };
  }
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (now - v[v.length - 1] > 3600_000) buckets.delete(k);
  }
  return { ok: true, retryAfter: 0 };
}
