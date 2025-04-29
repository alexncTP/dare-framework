// Script para migrar permanentemente para a versão estática
// Este script vai:
// 1. Mover todos os arquivos da pasta static/ para a raiz
// 2. Criar um package.json simples para o servidor estático
// 3. Remover arquivos desnecessários da versão Node.js/React

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Obter o diretório atual no contexto de módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para copiar recursivamente um diretório
function copyDir(src, dest) {
  // Cria o diretório de destino se não existir
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Lê o conteúdo do diretório de origem
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Se for um diretório, copia recursivamente
      copyDir(srcPath, destPath);
    } else {
      // Se for um arquivo, copia diretamente
      fs.copyFileSync(srcPath, destPath);
      console.log(`Arquivo copiado: ${destPath}`);
    }
  }
}

// Função para remover diretório recursivamente
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        removeDir(entryPath);
      } else {
        fs.unlinkSync(entryPath);
        console.log(`Arquivo removido: ${entryPath}`);
      }
    });
    fs.rmdirSync(dir);
    console.log(`Diretório removido: ${dir}`);
  }
}

// Função para criar um package.json mínimo
function createMinimalPackageJson() {
  const packageJson = {
    "name": "dare-framework-static",
    "version": "1.0.0",
    "description": "DARE Framework - Versão Estática",
    "main": "server.js",
    "scripts": {
      "start": "node server.js"
    },
    "author": "Gui Gonzalez",
    "license": "CC-BY-SA-4.0"
  };

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('Novo package.json criado');
}

// Função principal
async function migrateToStatic() {
  try {
    console.log('Iniciando migração para versão estática...');

    // 1. Copiar arquivos estáticos para a raiz
    console.log('Copiando arquivos estáticos...');
    copyDir('static', '.');

    // 2. Criar server.js na raiz
    console.log('Movendo server.js para a raiz...');
    fs.copyFileSync('static/server.js', 'server.js');

    // 3. Criar package.json mínimo
    console.log('Criando package.json mínimo...');
    createMinimalPackageJson();

    // 4. Remover diretórios desnecessários
    console.log('Removendo diretórios desnecessários...');
    const dirsToRemove = [
      'client',
      'server',
      'shared',
      'components.json', 
      'drizzle.config.ts',
      'postcss.config.js',
      'tailwind.config.ts',
      'tsconfig.json',
      'vite.config.ts'
    ];

    for (const dir of dirsToRemove) {
      if (fs.existsSync(dir)) {
        if (fs.lstatSync(dir).isDirectory()) {
          removeDir(dir);
        } else {
          fs.unlinkSync(dir);
          console.log(`Arquivo removido: ${dir}`);
        }
      }
    }

    // 5. Remover scripts desnecessários
    console.log('Removendo scripts desnecessários...');
    fs.unlinkSync('scripts/switch-to-static.js');
    console.log('Arquivo removido: scripts/switch-to-static.js');

    // 6. Manter apenas 'start-static.js' renomeado para 'start.js'
    console.log('Renomeando script para start.js...');
    fs.copyFileSync('scripts/start-static.js', 'scripts/start.js');
    fs.unlinkSync('scripts/start-static.js');
    console.log('Script renomeado para start.js');

    // 7. Remover a pasta static (já que o conteúdo foi copiado para a raiz)
    console.log('Removendo pasta static original...');
    removeDir('static');

    console.log('\nMigração concluída com sucesso!');
    console.log('Para iniciar o servidor estático, execute: node server.js');
  } catch (error) {
    console.error('Erro durante a migração:', error);
  }
}

// Executar a migração
migrateToStatic();