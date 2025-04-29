// Script para alternar para o servidor estático
import { spawn, exec } from 'child_process';

console.log('Verificando processos em execução...');

// Função para matar processos Node.js existentes
const killExistingProcesses = () => {
  return new Promise((resolve, reject) => {
    exec('pkill -f "tsx server/index.ts" || true', (error) => {
      // Ignoramos erros aqui, pois o processo pode não existir
      console.log('Processos do servidor Node.js interrompidos.');
      resolve();
    });
  });
};

// Função para iniciar o servidor estático
const startStaticServer = () => {
  console.log('Iniciando o servidor estático...');
  
  const server = spawn('node', ['scripts/start-static.js'], {
    stdio: 'inherit',
    shell: true
  });
  
  server.on('error', (err) => {
    console.error('Erro ao iniciar o servidor estático:', err);
  });
  
  console.log('Servidor estático iniciado. Use a URL do Webview para acessar.');
  console.log('Pressione Ctrl+C para encerrar.');
};

// Executa a sequência
const run = async () => {
  try {
    await killExistingProcesses();
    
    // Espera um pouco para garantir que as portas estejam liberadas
    setTimeout(() => {
      startStaticServer();
    }, 1000);
  } catch (error) {
    console.error('Erro:', error);
  }
};

run();