#!/bin/bash

echo "🚀 Iniciando deploy do DARE Framework..."

# Build do projeto
echo "📦 Fazendo build do projeto..."
cd client
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    echo "❌ Erro: Build não foi gerado"
    exit 1
fi

echo "✅ Build concluído com sucesso!"

# Voltar para a raiz
cd ..

# Adicionar todas as mudanças
echo "📝 Adicionando mudanças ao git..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "Deploy: $(date)"

# Push para o GitHub
echo "🚀 Fazendo push para o GitHub..."
git push origin main

echo "✅ Deploy iniciado!"
echo "🌐 O site será publicado em alguns minutos em:"
echo "   https://seu-usuario.github.io/dare-framework/"
echo ""
echo "📋 Para configurar domínio customizado:"
echo "   1. Vá em Settings > Pages no GitHub"
echo "   2. Adicione seu domínio customizado"
echo "   3. Configure o DNS do seu domínio" 