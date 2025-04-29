# DARE Framework

Framework de integração entre Design e IA - Design AI Reliable Engagement

## Sobre o Projeto

O DARE Framework é uma estrutura para ajudar designers e equipes a navegarem pela integração da IA em seus processos de design, definindo níveis claros de engajamento e uso apropriado. Desenvolvido por Gui Gonzalez, o framework estabelece seis níveis progressivos de adoção de IA em processos de design (0-5), promovendo o uso confiável e estratégico de inteligência artificial em UI, UX, motion e processos de branding.

## Duas Versões Disponíveis

Este repositório contém duas versões do site DARE Framework:

### 1. Versão React/Node.js (Completa)

Uma aplicação web completa construída com:
- Frontend: React, TypeScript, TailwindCSS e shadcn/ui
- Backend: Express.js e PostgreSQL
- Internacionalização com suporte a português e inglês

Para executar esta versão:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### 2. Versão HTML Estática (Simplificada)

Uma versão estática do site usando apenas HTML, CSS e JavaScript vanilla, sem necessidade de Node.js para execução. Esta versão é ideal para hospedagem simples e econômica.

Para executar esta versão:

```bash
# Usando o script Node.js incluído
node scripts/start-static.js

# OU navegue até a pasta static e use qualquer servidor HTTP
cd static && python -m http.server 5000
```

Veja mais detalhes em [static/README.md](static/README.md).

## Níveis do Framework

O DARE Framework define seis níveis de integração da IA no design:

0. **Manual Total** - Nenhuma IA. Só cérebro, mão e suor.
1. **IA Assistiva** - A IA te ajuda, mas não cria.
2. **IA como Acelerador Visual** - Você cria, a IA preenche.
3. **IA como Copiloto** - Você lidera, a IA propõe.
4. **Co-criação Modular** - A IA monta, você direciona.
5. **Automação Guiada por Prompt** - Você descreve, a IA entrega.

## Contribuindo

O Framework DARE é de código aberto e orientado pela comunidade. Contribuições são bem-vindas via GitHub:

1. Faça um fork do repositório
2. Crie um branch para sua contribuição
3. Envie um pull request com uma descrição clara das alterações

Veja o [Código de Conduta](https://github.com/guigonzalez/dare-framework/blob/main/CODE_OF_CONDUCT.md) para mais informações.

## Licença

O DARE Framework é disponibilizado sob a [Licença Creative Commons BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).

---

© DARE Framework | Desenvolvido por [Gui Gonzalez](https://br.linkedin.com/in/guigonzalez/pt)