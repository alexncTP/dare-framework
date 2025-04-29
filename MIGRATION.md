# Migração do DARE Framework para Versão Estática

Este documento descreve o processo de migração do DARE Framework de uma aplicação React/Node.js para uma versão HTML/CSS/JS estática.

## Visão Geral

O DARE Framework agora possui duas versões funcionais:

1. **Versão React/Node.js (Original)**
   - Aplicação fullstack com React no frontend e Express/Node.js no backend
   - Banco de dados PostgreSQL para armazenamento de dados
   - Interface de usuário avançada com componentes React
   - Suporte a contribuições dinâmicas e administração de conteúdo

2. **Versão HTML Estática (Nova)**
   - Implementação puramente em HTML, CSS e JavaScript vanilla
   - Dados armazenados em arquivos JSON estáticos
   - Sem dependências de frameworks ou bibliotecas externas (exceto Tailwind CSS via CDN)
   - Facilmente hospedável em qualquer serviço de hospedagem estática

## Motivação para a Migração

- **Simplicidade de hospedagem**: Redução das necessidades de infraestrutura
- **Performance**: Carregamento mais rápido sem overhead de JavaScript pesado
- **Custos reduzidos**: Eliminação da necessidade de servidores ou DBaaS
- **Confiabilidade**: Menos pontos de falha sem backend ou banco de dados
- **Acessibilidade**: Menor consumo de recursos do navegador

## O Que Foi Preservado

- Design visual e UX/UI completos
- Todos os níveis e detalhes do Framework DARE
- Seções principais: Sobre, Framework, Manifesto, Contribuir
- Responsividade para diferentes tamanhos de tela
- Links para GitHub e conteúdo sobre o criador

## Como Alternar Entre as Versões

### Versão React/Node.js (Original)

Para executar a versão original:

```bash
# Restartar o workflow padrão
# OU
npm run dev
```

### Versão Estática (Nova)

Para executar a versão estática:

```bash
# Interromper o servidor React/Node.js e iniciar o servidor estático
node scripts/switch-to-static.js

# OU diretamente
node scripts/start-static.js
```

## Estrutura de Arquivos da Versão Estática

```
static/
├── data/            # Dados do framework em JSON
│   └── levels.json  # Níveis do DARE Framework
├── css/             # Estilos CSS
│   └── styles.css   # Estilos customizados
├── js/              # JavaScript
│   └── main.js      # Lógica da interface
├── index.html       # Página principal
├── 404.html         # Página de erro 404
├── README.md        # Documentação da versão estática
└── DEPLOYMENT.md    # Guia de implantação
```

## Scripts de Utilidade

- **start-static.js**: Inicia um servidor HTTP simples para a versão estática
- **switch-to-static.js**: Interrompe o servidor React/Node.js e inicia o servidor estático

## Passos Técnicos da Migração

1. **Exportação de dados**: Extração dos níveis do framework do banco de dados para JSON
2. **Criação de HTML**: Conversão dos componentes React para HTML estático
3. **JavaScript independente**: Reescrita da lógica React em JavaScript vanilla
4. **Estilos unificados**: Consolidação dos estilos CSS
5. **Servidor estático**: Implementação de um servidor HTTP simples para testes

## Hospedagem

Consulte o documento [static/DEPLOYMENT.md](static/DEPLOYMENT.md) para instruções detalhadas sobre como implantar a versão estática em diversas plataformas de hospedagem.

## Manutenção Futura

- Para atualizar os níveis do framework, edite o arquivo `static/data/levels.json`
- Para modificar o conteúdo das páginas, edite os arquivos HTML diretamente
- Para alterar estilos, modifique o arquivo `static/css/styles.css`
- Para adicionar novas funcionalidades interativas, edite `static/js/main.js`

## Conclusão

A migração para HTML estático simplifica significativamente a implantação e manutenção do DARE Framework, mantendo todas as características visuais e funcionais importantes da versão original React/Node.js.

---

© DARE Framework | Desenvolvido por Gui Gonzalez