# Guia de Implantação da Versão Estática do DARE Framework

Este documento descreve as opções para implantar a versão estática do DARE Framework em diferentes plataformas de hospedagem.

## Requisitos

A versão estática do DARE Framework consiste apenas em arquivos HTML, CSS, JavaScript e JSON estáticos. Não há necessidade de Node.js, banco de dados ou qualquer processamento no servidor.

Arquivos principais:
- `index.html` - Página principal
- `404.html` - Página de erro 404
- `css/styles.css` - Estilos CSS
- `js/main.js` - JavaScript principal
- `data/levels.json` - Dados dos níveis do framework

## Opções de Hospedagem

### 1. GitHub Pages

Uma das formas mais simples de hospedar o site estático, especialmente porque o framework já está no GitHub.

**Passos:**
1. Crie um branch `gh-pages` ou use o branch `main`
2. Vá para Settings > Pages no repositório
3. Selecione o branch e a pasta (`/static`)
4. GitHub Pages irá gerar uma URL (geralmente `username.github.io/repo-name`)

**Vantagens:**
- Gratuito
- Integração direta com o repositório GitHub existente
- HTTPS incluído

### 2. Netlify

Plataforma completa com recursos adicionais.

**Passos:**
1. Crie uma conta em [netlify.com](https://www.netlify.com/)
2. Conecte seu repositório GitHub
3. Configure:
   - Diretório de publicação: `static`
   - Comando de build: (deixar em branco)

**Vantagens:**
- Implantação contínua (CD)
- Domínio personalizado gratuito (seu-site.netlify.app)
- Funções de redirecionamento e formulários
- HTTPS incluído

### 3. Vercel

Similar ao Netlify, com boa integração ao GitHub.

**Passos:**
1. Crie uma conta em [vercel.com](https://vercel.com/)
2. Importe seu repositório GitHub
3. Configure o diretório raiz como `static`

**Vantagens:**
- Previews em cada pull request
- Escalabilidade automática
- Performance global
- HTTPS incluído

### 4. Firebase Hosting

Solução da Google com CDN global.

**Passos:**
1. Instale Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Inicialize: `firebase init`
   - Selecione "Hosting"
   - Defina `static` como diretório público
4. Deploy: `firebase deploy`

**Vantagens:**
- CDN global
- Integração com outros serviços Firebase
- HTTPS incluído
- Domínio personalizado

### 5. Amazon S3 + CloudFront

Solução mais robusta para sites com grande tráfego.

**Passos:**
1. Crie um bucket S3 e configure para hospedagem de site estático
2. Faça upload dos arquivos da pasta `/static`
3. Configure CloudFront para CDN (opcional)

**Vantagens:**
- Altamente escalável
- Integração com outros serviços AWS
- Controle granular de cache e distribuição

## Configuração de Domínio Personalizado

Para quase todas as opções acima, você pode configurar um domínio personalizado:

1. Compre um domínio (GoDaddy, Namecheap, Google Domains, etc.)
2. Configure os registros DNS para apontar para sua hospedagem
3. Configure o SSL/TLS para HTTPS

## Otimizações para Produção

Antes de implantar, considere:

1. **Minificação**: Comprimir HTML, CSS e JavaScript
   ```bash
   # Usando ferramentas como:
   npm install -g html-minifier clean-css-cli uglify-js
   html-minifier --collapse-whitespace index.html > index.min.html
   ```

2. **Otimização de imagens**: Comprimir e redimensionar imagens
   ```bash
   # Usando ferramentas como:
   npm install -g imagemin-cli
   imagemin assets/* --out-dir=assets/optimized
   ```

3. **Gzip/Brotli**: Ative a compressão na sua hospedagem

4. **Cache headers**: Configure cabeçalhos de cache apropriados

## Considerações Adicionais

- **Análise**: Adicione Google Analytics ou outra ferramenta de análise
- **Monitoramento**: Configure alertas para tempo de atividade
- **Backup**: Mantenha backups regulares do site

---

Para mais informações, consulte a documentação de cada plataforma de hospedagem ou entre em contato com [Gui Gonzalez](https://br.linkedin.com/in/guigonzalez/pt).