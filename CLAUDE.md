# Instituto Khuririm — site institucional

Para aplicar qualquer pedido do cliente, use a skill `atualizar-site-khuririm`.
Pedidos, status e pendências ficam em `SOLICITACOES-CLIENTE.md`.

## Onde está cada coisa

- **Site:** https://institutokhuririm.com.br (e `www.`). One-page estático: HTML, CSS e JS puro, sem build.
- **Código publicado:** só a pasta `instituto-khuririm-site/` (definida em `wrangler.jsonc`). Arquivos na raiz do repositório, como este, não vão ao ar.
- **Hospedagem:** Cloudflare Workers com assets estáticos. Worker `institutokhuririm`, conta `e9dec97370b71cab6410d54362b5b7bd`. Domínios ligados por `custom_domain` no `wrangler.jsonc`.
- **Redirecionamentos:** `src/worker.js` roda antes dos arquivos (`run_worker_first`) e manda `http://` e `www.` para `https://institutokhuririm.com.br` (301). Endereço inexistente mostra `404.html` (`not_found_handling: "404-page"`).
- **Deploy:** `npx --yes wrangler@4 deploy` na raiz do repositório. Não há deploy automático por push.
- **DNS:** domínio comprado no registro.br, com nameservers do Cloudflare (`damien` e `zelda.ns.cloudflare.com`).
- **Análise de acesso:** Cloudflare Web Analytics, injetado automaticamente pelo Cloudflare (painel: Analytics → Web Analytics). Sem cookies.
- **Repositório:** `faustosm/institutokhuririm` (**público** desde 16/10/2026, a pedido do Fausto). Tudo o que for commitado fica visível: nunca commite senhas, tokens ou dados pessoais além dos que já estão aqui.

## Estrutura do site

- `index.html`: todas as seções, nesta ordem: `inicio` → pilares → `sobre` (Nossa história) → `missao` → `valores` → `fundador` → `padrinho` (homenagem) → `programas` → `aulas` → `galeria` → `transparencia` → `apoie` (com "Quem apoia") → `contato`.
- **Idiomas:** `index.html` (português, padrão), `en/index.html` e `es/index.html`, com seletor PT · EN · ES no menu e `hreflang` nas páginas e no sitemap. **Toda mudança de conteúdo precisa ser feita nos três arquivos.** As páginas em `en/` e `es/` usam caminhos absolutos (`/assets/...`). Os textos dos botões do JS ficam no dicionário `textos` de `main.js`.
- Menu: Início · Quem somos (`#sobre`) · Nossos programas · Transparência · Apoie · Contato. "Impacto social" foi pedido pelo cliente, mas ainda não tem conteúdo.
- `assets/css/style.css`: cores como variáveis no topo (`--azul #02274B`, `--amarelo #FDC202`). Fontes Outfit (títulos) e DM Sans (texto), hospedadas em `assets/fonts/`.
- `assets/js/main.js`: menu do celular, botão de copiar PIX, ano do rodapé e animações `.reveal`.
- `assets/img/`: fotos em WebP, cada uma com versão de 600 px (`-600.webp`). `og-image.jpg` é a prévia de compartilhamento (só adultos).
- `_headers`: cabeçalhos de segurança (CSP, HSTS etc.) e cache. **Recurso externo novo precisa ser liberado na CSP.**
- `.assetsignore`: impede publicar `README.md`, arquivos `*:Zone.Identifier` e **qualquer arquivo com espaço no nome** (fotos originais do cliente).
- `sitemap.xml` e `robots.txt`.
- `404.html`: página de erro com a identidade do site (`noindex`).
- **WhatsApp:** 55 34 99200-0208 em todos os botões e no botão flutuante (`.wa-float`, antes do `</body>`). Mensagens prontas vão codificadas em URL.
- **PIX:** chave (34) 99200-0208 (o botão copia `+5534992000208` via `data-copy-value`), favorecido AK Dojo Jiujitsu Escola, CNPJ 28.762.457/0001-52 (empresário individual, **não** é CNPJ da OSC), Banco C6.

## Armadilhas já encontradas

- **O deploy publica a pasta local, não o git.** Já aconteceu de o cartaz original de campanha e o README irem ao ar sem estar no commit. Depois de publicar, rode `publicos.sh` da skill.
- **Arquivos `*:Zone.Identifier`** aparecem quando o Fausto copia arquivos do Windows. Nunca commitar.
- **Logo:** veio de print, não do designer. O fundo de `logo-completa.png` foi deixado transparente para combinar com o rodapé. O arquivo oficial (SVG) ainda está pendente com o cliente.
- **Placeholders** no padrão `[ASSIM]` são intencionais: indicam dado que o cliente ainda não mandou. Não remova sem o dado real. Nunca use um marcador como `href` (vira link para 404).
- **CNPJ 28.762.457/0001-52 é da academia** (empresário individual), não do instituto. Não colocar como CNPJ da OSC.

## Regras do cliente

- O cliente é Anderson Khuririm, fundador. Os pedidos chegam por WhatsApp, repassados pelo Fausto.
- Não divulgar programa ou serviço como disponível sem confirmação.
- Atividades psicológicas: sempre citar profissionais habilitados.
- Fotos de crianças só com autorização dos responsáveis (ECA/LGPD).
- Pendentes com o cliente: Política de Privacidade (LGPD), revisão da tradução em inglês e espanhol, seção "Impacto social", formulário (hoje tudo vai para o WhatsApp), Google Search Console e os dados marcados com `[...]` no site.

## Histórico

- O site atual é o modelo "v2", escolhido pelo cliente em 14/10/2026.
- Repositórios antigos: `faustosm/instituto-khuririm-antigo` (arquivado), `instituto-khuririm-v2` e `instituto-khuririm-v3` (modelos de teste).
- Workers antigos na conta: `instituto-khuririm` (sem domínio), `instituto-khuririm-v2` e `instituto-khuririm-v3`.
