export default {
  async fetch(req) {
    const url = new URL(req.url);
    url.protocol = "https:";
    url.hostname = "c3278637-e408-413a-8ae6-13215785c513.cfargotunnel.com";

    const proxyReq = new Request(url, req);
    proxyReq.headers.set("Host", "anorsi.msk.ru");

    // обходит возможный 1102
    return fetch(proxyReq, {
      cf: { resolveOverride: "origin.cloudflare.com" }
    });
  }
}
