import { default as handler } from '../dist/server/server.js';

export default async function (req, res) {
  // TanStack Start/Nitro server handler usually expects a Request object for .fetch()
  // Since this is a Vercel Node function, we need to bridge req/res to Request/Response
  // However, Nitro's Node preset usually handles this.
  // Given we are manually bridging:
  
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);
  
  const request = new Request(url.href, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    // Note: passing req directly as body works in some environments or might need a stream
  });

  const response = await handler.fetch(request);
  
  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
