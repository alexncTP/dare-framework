export default function ContributeSection() {
  return (
    <section id="contribute" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contribua com o DARE</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              O Framework DARE é de código aberto e orientado pela comunidade. Convidamos designers, pesquisadores e especialistas em IA para ajudar a desenvolver este recurso.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 rounded-md bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Sugerir Mudanças</h3>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Proponha modificações aos níveis existentes do framework, descrições ou exemplos através de issues no GitHub ou pull requests.
                  </p>
                  <div className="mt-6">
                    <a href="https://github.com/guigonzalez/dare-framework/issues" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                      Abrir uma issue
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 rounded-md bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Sobre o Criador</h3>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Gui Gonzalez é um designer apaixonado por processos, que busca incorporar a IA de forma sadia no mercado de Design, para que um novo design surja junto com as mudanças de paradigma.
                  </p>
                  <div className="mt-6">
                    <a href="https://br.linkedin.com/in/guigonzalez/pt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                      Conectar no LinkedIn
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="diretrizes" className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Diretrizes de Contribuição</h3>
              <div className="mt-6 prose prose-blue max-w-none">
                <p>
                  O Framework DARE é disponibilizado sob a <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Licença Creative Commons BY-SA</a>, permitindo compartilhamento livre e adaptação com a devida atribuição.
                </p>
                
                <h4>Para contribuir:</h4>
                <ol>
                  <li>Faça um fork do repositório no GitHub</li>
                  <li>Crie um branch para sua contribuição</li>
                  <li>Faça suas alterações seguindo nossos padrões de código e documentação</li>
                  <li>Envie um pull request com uma descrição clara das alterações</li>
                  <li>Participe do processo de revisão</li>
                </ol>
                
                <p>
                  Todos os colaboradores devem seguir nosso <a href="https://github.com/guigonzalez/dare-framework/blob/main/CODE_OF_CONDUCT.md" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Código de Conduta</a>, que promove um ambiente inclusivo e acolhedor.
                </p>
                
                <div className="mt-8 flex items-center justify-center">
                  <a href="https://github.com/guigonzalez/dare-framework" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
