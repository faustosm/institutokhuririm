# Instituto Khuririm — site institucional

Para aplicar qualquer pedido do cliente, use a skill `atualizar-site-khuririm`.
Pedidos, status e pendências ficam em `SOLICITACOES-CLIENTE.md`.

## Onde está cada coisa

- **Site:** https://institutokhuririm.com.br (e `www.`). One-page estático: HTML, CSS e JS puro, sem build.
- **Código publicado:** só a pasta `instituto-khuririm-site/` (definida em `wrangler.jsonc`). Arquivos na raiz do repositório, como este, não vão ao ar.
- **Hospedagem:** Cloudflare Workers com assets estáticos. Worker `institutokhuririm`, conta `e9dec97370b71cab6410d54362b5b7bd`. Domínios ligados por `custom_domain` no `wrangler.jsonc`.
- **Deploy:** `npx --yes wrangler@4 deploy` na raiz do repositório. Não há deploy automático por push.
- **DNS:** domínio comprado no registro.br, com nameservers do Cloudflare (`damien` e `zelda.ns.cloudflare.com`).
- **Análise de acesso:** Cloudflare Web Analytics, injetado automaticamente pelo Cloudflare (painel: Analytics → Web Analytics). Sem cookies.
- **Repositório:** `faustosm/institutokhuririm` (privado).

## Estrutura do site

- `index.html`: todas as seções, nesta ordem: `inicio` → pilares → `sobre` (Nossa história) → `missao` → `valores` → `fundador` → `padrinho` (homenagem) → `programas` → `aulas` → `galeria` → `transparencia` → `apoie` (com "Quem apoia") → `contato`.
- Menu: Início · Quem somos (`#sobre`) · Nossos programas · Transparência · Apoie · Contato. "Impacto social" foi pedido pelo cliente, mas ainda não tem conteúdo.
- `assets/css/style.css`: cores como variáveis no topo (`--azul #02274B`, `--amarelo #FDC202`). Fontes Outfit (títulos) e DM Sans (texto), hospedadas em `assets/fonts/`.
- `assets/js/main.js`: menu do celular, botão de copiar PIX, ano do rodapé e animações `.reveal`.
- `assets/img/`: fotos em WebP, cada uma com versão de 600 px (`-600.webp`). `og-image.jpg` é a prévia de compartilhamento (só adultos).
- `_headers`: cabeçalhos de segurança (CSP, HSTS etc.) e cache. **Recurso externo novo precisa ser liberado na CSP.**
- `.assetsignore`: impede publicar `README.md`, arquivos `*:Zone.Identifier` e **qualquer arquivo com espaço no nome** (fotos originais do cliente).
- `sitemap.xml` e `robots.txt`.

## Armadilhas já encontradas

- **O deploy publica a pasta local, não o git.** Já aconteceu de o cartaz original de campanha e o README irem ao ar sem estar no commit. Depois de publicar, rode `publicos.sh` da skill.
- **Arquivos `*:Zone.Identifier`** aparecem quando o Fausto copia arquivos do Windows. Nunca commitar.
- **Logo:** veio de print, não do designer. O fundo de `logo-completa.png` foi deixado transparente para combinar com o rodapé. O arquivo oficial (SVG) ainda está pendente com o cliente.
- **Placeholders** no padrão `[ASSIM]` são intencionais: indicam dado que o cliente ainda não mandou. Não remova sem o dado real.

## Regras do cliente

- O cliente é Anderson Khuririm, fundador. Os pedidos chegam por WhatsApp, repassados pelo Fausto.
- Não divulgar programa ou serviço como disponível sem confirmação.
- Atividades psicológicas: sempre citar profissionais habilitados.
- Fotos de crianças só com autorização dos responsáveis (ECA/LGPD).
- Pendentes com o cliente: Política de Privacidade (LGPD), versão em inglês, seção "Impacto social", formulário (hoje tudo vai para o WhatsApp), Google Search Console e os dados marcados com `[...]` no site.

## Histórico

- O site atual é o modelo "v2", escolhido pelo cliente em 14/10/2026.
- Repositórios antigos: `faustosm/instituto-khuririm-antigo` (arquivado), `instituto-khuririm-v2` e `instituto-khuririm-v3` (modelos de teste).
- Workers antigos na conta: `instituto-khuririm` (sem domínio), `instituto-khuririm-v2` e `instituto-khuririm-v3`.
