**Automação de Aulas Online com Puppeteer**

**Descrição**
Este script automatiza o processo de login e navegação na plataforma de cursos online **OneBitCode** usando a biblioteca **Puppeteer**. Ele solicita as credenciais do usuário, o URL da primeira e última aula a serem completadas, e automatiza a navegação entre as aulas até a aula final especificada.

**Pré-requisitos**
* **Node.js** instalado na sua máquina.  
* **Puppeteer**: será instalado automaticamente após o passo de instalação.

**Instalação**
1. Crie um arquivo *`script.js`* e cole o código fornecido.  
2. No terminal, navegue até o diretório onde o arquivo foi salvo.  
3. Instale o Puppeteer com o seguinte comando: *`npm install puppeteer`*

**Como Executar**
1. No terminal, execute o comando: *`node script.js`*  
2. O script solicitará:  
   * Seu **email**.  
   * Sua **senha**.  
   * O **URL da lição inicial** que você quer começar.  
   * O **URL da lição final** onde deseja parar.  
3. O script fará o login na plataforma e navegará automaticamente pelas aulas até a aula especificada como a última.

**Funcionamento**
* O script navega para a página de login e solicita suas credenciais.  
* Após o login, ele vai até a página de cursos e solicita o URL da primeira e última lição.  
* Ele verifica se a primeira lição é anterior à última.  
* Se for, o script começa a navegar pelas lições, clicando nos botões de "concluir" e "ir para a próxima aula", até alcançar a aula final.  
* Quando concluído, uma mensagem de sucesso é exibida.  

**Observações**  
* As credenciais inseridas não são armazenadas, apenas usadas para essa sessão.  
* O script só funciona em páginas com o mesmo formato de URLs de lições.

