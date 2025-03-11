# Calculator
📌 Funcionalidades

Aceita entrada via botões na interface ou pelo teclado.

Executa cálculos matemáticos usando a função eval().

Limpa a tela de exibição.

Remove o último caractere digitado.

Suporta a tecla Enter para calcular a expressão digitada.

🚀 Como Funciona

O código define uma função createCalculator() que retorna um objeto com métodos para manipular a calculadora.

Métodos Principais:

start(): Inicia os eventos de clique e entrada via teclado.

pressEnter(): Captura o evento de pressionar a tecla Enter para calcular a conta.

clearDisplay(): Limpa todo o conteúdo da tela.

clearOne(): Remove o último caractere digitado.

mkAcct(): Processa a equação matemática inserida e exibe o resultado na tela.

clickBtn(): Captura os eventos de clique nos botões e chama os métodos apropriados.

btnToDisplay(value): Adiciona um número ou operador à tela.

⚠️ Observações Importantes

O código usa eval(), o que pode representar riscos de segurança se não for devidamente controlado.

Há um erro de digitação: actt deve ser acct dentro de mkAcct().

📜 Como Usar

Clone o repositório ou copie o código para um arquivo local.

Adicione o código a um arquivo HTML e associe botões com as classes adequadas.

Abra o arquivo no navegador e comece a calcular!

🛠 Melhorias Futuras

Substituir eval() por uma solução mais segura.

Melhorar a validação das expressões matemáticas.

Estilizar a interface da calculadora.

