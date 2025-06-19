export default {
  async fetch(req) {
    // подменяем хост на туннель
    const url = new URL(req.url);
    url.hostname = "c3278637-e408-413a-8ae6-13215785c513.cfargotunnel.com";
    url.protocol = "https:";          // на всякий случай

    // создаём новый Request, копируя оригинальный
    const proxyReq = new Request(url, req);

    // !!! Не пытайтесь менять заголовок Host —
    // Cloudflare сам проставит его из url.hostname
    // Если Traefik/FastAPI нужен исходный домен, используйте
    // X-Forwarded-Host: req.headers.get("Host") внутри приложения.

    // главное — resolveOverride
    return fetch(proxyReq, {
      cf: { resolveOverride: "origin.cloudflare.com" }
    });
  }
}
