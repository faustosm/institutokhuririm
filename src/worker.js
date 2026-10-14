// Roda antes dos arquivos estáticos: força HTTPS e o domínio sem "www",
// para o Google ver um único endereço e ninguém navegar sem cadeado.
const DOMINIO = 'institutokhuririm.com.br';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:' || url.hostname === 'www.' + DOMINIO) {
      url.protocol = 'https:';
      url.hostname = DOMINIO;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
