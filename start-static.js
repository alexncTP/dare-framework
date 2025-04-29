// Script para iniciar o site estático
import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Iniciando o servidor estático...');
console.log('Pressione Ctrl+C para encerrar');

// Inicia o servidor
const server = spawn('node', ['static/server.js'], {
  stdio: 'inherit',
  shell: true
});

server.on('close', (code) => {
  console.log(`Servidor estático encerrado com código: ${code}`);
});

// Captura sinais para encerramento limpo
process.on('SIGINT', () => {
  console.log('Encerrando servidor estático...');
  server.kill();
  process.exit(0);
});