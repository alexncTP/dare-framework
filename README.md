# DARE Framework

**Design AI Reliable Engagement Framework**

Um framework colaborativo para adoção estratégica de IA em processos de design—equilibrando inovação com criatividade humana.

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e execução

1. **Instalar dependências do frontend:**
   ```bash
   npm run install:client
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### Scripts disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run install:client` - Instala dependências do frontend

## 🌐 Deploy no GitHub Pages

### Configuração Automática

1. **Fork ou clone este repositório**
2. **Configure o GitHub Pages:**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
3. **Configure o domínio customizado:**
   - Em Settings > Pages, adicione seu domínio customizado
   - Atualize o arquivo `client/public/CNAME` com seu domínio
4. **Faça push para a branch main:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

### Configuração Manual

Se preferir fazer deploy manual:

```bash
# Build do projeto
cd client
npm run build

# O build será gerado em client/dist/
# Faça upload dos arquivos para seu servidor web
```

## 🏗️ Estrutura do projeto

```
dare-framework/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── data/          # Dados estáticos
│   │   ├── pages/         # Páginas
│   │   └── ...
│   ├── public/            # Assets públicos
│   └── package.json       # Dependências do frontend
├── attached_assets/       # Assets do projeto
├── .github/workflows/     # GitHub Actions
└── package.json          # Scripts principais
```

## 🎨 Tecnologias

- **Frontend:** React 18 + TypeScript + Vite
- **UI:** Tailwind CSS + Radix UI
- **Roteamento:** Wouter
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Deploy:** GitHub Pages + GitHub Actions

## 📋 Níveis do Framework

O DARE Framework apresenta 6 níveis de adoção de IA em design:

1. **Nível 0 - Manual Total:** Nenhuma IA, apenas ferramentas tradicionais
2. **Nível 1 - IA Assistiva:** IA para tarefas operacionais
3. **Nível 2 - Acelerador Visual:** IA gera partes do design
4. **Nível 3 - Copiloto:** IA sugere layouts e fluxos
5. **Nível 4 - Co-criação Modular:** IA monta telas inteiras
6. **Nível 5 - Automação Guiada:** IA gera design completo via prompts

## 🔧 Configuração de Domínio Customizado

### Passos para configurar seu domínio:

1. **Configure o DNS do seu domínio:**
   ```
   Tipo: CNAME
   Nome: @ (ou www)
   Valor: seu-usuario.github.io
   ```

2. **Atualize o arquivo CNAME:**
   ```bash
   # Edite client/public/CNAME
   echo "seu-dominio.com" > client/public/CNAME
   ```

3. **Configure no GitHub:**
   - Settings > Pages > Custom domain
   - Adicione seu domínio
   - Marque "Enforce HTTPS"

4. **Faça deploy:**
   ```bash
   git add .
   git commit -m "Add custom domain"
   git push origin main
   ```

## 🤝 Contribuição

Este é um projeto open source. Contribuições são bem-vindas!

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes. 