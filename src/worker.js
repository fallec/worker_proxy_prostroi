export default {
  async fetch(req) {
    const url = new URL(req.url);
    url.hostname = "c3278637-e408-413a-8ae6-13215785c513.cfargotunnel.com";

    const newReq = new Request(url, req);
    newReq.headers.set("Host", "anorsi.msk.ru");

    return fetch(newReq, {
      cf: { resolveOverride: "origin.cloudflare.com" } // <- обход 1102
    });
  }
}
