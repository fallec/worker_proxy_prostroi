export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    // подменяем origin на ваш Tunnel
    url.hostname = "c3278637-e408-413a-8ae6-13215785c513.cfargotunnel.com";

    const newReq = new Request(url.toString(), req);
    newReq.headers.set("Host", "anorsi.msk.ru");   // нужен Traefik'у
    return fetch(newReq);
  }
}
