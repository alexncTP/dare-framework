# DARE Framework - Versão Estática

Esta é a versão estática do DARE Framework (Design AI Reliable Engagement), um framework para adoção de IA em processos de design, desenvolvido por Gui Gonzalez.

## Como executar localmente

Para executar o site estático localmente, você pode usar qualquer servidor de arquivos estáticos. Alguns exemplos:

### Usando Node.js

1. Navegue até a pasta raiz do projeto
2. Execute: `node scripts/start-static.js`
3. Acesse o site em: http://localhost:5000

### Usando Python

Se você tem Python instalado, pode usar:

```bash
# Python 3
python -m http.server 3000 -d static

# Python 2
cd static && python -m SimpleHTTPServer 3000
```

### Usando serve (Node.js)

Você pode instalar o pacote `serve` globalmente:

```bash
npm install -g serve
serve -s static
```

## Estrutura de arquivos

```
static/
├── data/            # Dados estáticos (níveis do framework)
├── css/             # Estilos
├── js/              # JavaScript
├── assets/          # Recursos (imagens, ícones, etc.)
├── index.html       # Página principal
└── 404.html         # Página de erro 404
```

## Hospedagem

Este site estático pode ser hospedado em diversos serviços:

- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Firebase Hosting
- Qualquer serviço de hospedagem de arquivos estáticos

## Licença

O DARE Framework é disponibilizado sob a [Licença Creative Commons BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).

---

© DARE Framework | Desenvolvido por Gui Gonzalez