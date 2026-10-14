# Site · Instituto Khuririm

Site institucional one-page, estático (HTML + CSS + JS puro, sem build). Baseado no briefing de marca: azul `#02274B`, amarelo `#FDC202`, fontes Outfit + DM Sans.

## Estrutura

```
index.html            # todas as seções
assets/css/style.css  # tokens de cor no topo (:root)
assets/js/main.js     # menu mobile, copiar PIX, ano, animações
assets/img/           # logo e fotos
```

## Rodar localmente

```bash
python3 -m http.server 8080   # abrir http://localhost:8080
```

## Antes de publicar: placeholders a preencher

Procure por `[` no `index.html`:

| Placeholder | Onde |
|---|---|
| `[NOME DO PROFESSOR]`, `[GRADUAÇÃO]` | Seção Sobre |
| `[FAIXA ETÁRIA]`, `[DIAS DA SEMANA]`, `[HORÁRIO DAS TURMAS]`, `[ENDEREÇO DO TREINO]` | Seção Aulas |
| `[CHAVE PIX]` | Seção Apoie |
| `[LOGO PARCEIRO]` | Seção Apoie → Quem apoia |
| `5534XXXXXXXXX`, `[E-MAIL]` | Seção Contato |
| `[MAPA ...]` | Seção Contato: colar o iframe do Google Maps |
| `[CNPJ]` | Rodapé |

## Imagens

- As fotos atuais foram recortadas de prints do Instagram e estão em **baixa resolução**. Troque pelos originais (ideal ≥ 1200 px no lado maior, JPG/WebP).
- A logo também veio de print: peça o **SVG** ao designer, incluindo a versão para fundo claro.
- Fotos de crianças só com **termo de autorização de uso de imagem** dos responsáveis (ECA/LGPD).

## Manutenção (o que mais muda)

- **Galeria:** adicione/troque `<img>` dentro de `.gallery`.
- **Patrocinadores:** troque cada `.sponsor-ph` por `<a href="https://site"><img src="assets/img/parceiros/nome.png" alt="Nome"></a>`.

## Deploy sugerido (gratuito)

GitHub Pages, Cloudflare Pages ou Netlify, apontando para a raiz do repositório. Sem etapa de build.
