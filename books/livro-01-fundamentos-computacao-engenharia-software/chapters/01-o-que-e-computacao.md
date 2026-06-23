---
title: "O que é computação"
book: "Livro 1 — Fundamentos de Computação e Engenharia de Software"
chapter: 1
status: approved
agent_flow: editorial-director -> curriculum-architect -> chapter-writer -> technical-reviewer -> depth-auditor -> code-example-reviewer -> site-integrator -> final-quality-gate
prerequisites: "Nenhum; capítulo de abertura."
competencies: "Compreender computação como transformação formal de informação; explicar representação binária, dados, instruções, abstrações, limites computacionais e impactos em Full Stack, IA e Cybersegurança."
dependencies: "Base para hardware, software, sistemas operacionais, redes, programação, engenharia de software, IA aplicada e segurança."
final_project_connection: "Inicia o projeto final integrador com um diário técnico de decisões sobre dados, instruções, interfaces, segurança, performance, testes e observabilidade."
---

# 01. O que é computação

## Status editorial

- **Estado final:** aprovado após escrita, revisão técnica, auditoria de profundidade, revisão de código, integração por geração de status/busca e validações automatizadas.
- **Livro:** Fundamentos de Computação e Engenharia de Software.
- **Capítulo:** 01 — O que é computação.
- **Escopo:** computação como transformação de informação; representação de dados; instruções; software como ponte entre intenção humana e execução por máquina; impactos em Full Stack, IA e Cybersegurança.
- **Esteira aplicada:** Chapter Writer Agent produziu o capítulo; Technical Reviewer Agent aprovou a precisão técnica após correções; Depth Auditor Agent aprovou a profundidade; Code Example Reviewer Agent aprovou os exemplos; Site Integrator Agent foi atendido por geração de status e busca; Final Quality Gate Agent aprovou após validações automatizadas.

Este capítulo é a porta de entrada do livro. Ele não presume conhecimento prévio de programação, mas trata o leitor como futuro profissional: desde o primeiro contato, computação será apresentada como disciplina de representação, transformação, automação, verificação e responsabilidade. A meta não é decorar nomes de tecnologias; é construir o modelo mental que permitirá entender por que uma API falha, por que um modelo de IA erra, por que uma senha vaza, por que um sistema lento consome dinheiro e por que uma decisão aparentemente pequena de representação de dados pode afetar segurança, performance e manutenção por anos.

## Objetivos

### Objetivos de aprendizagem

Ao final deste capítulo, você deverá ser capaz de:

1. Definir computação como transformação sistemática de informação por regras executáveis.
2. Diferenciar dado, informação, representação, instrução, algoritmo, programa, processo e sistema.
3. Explicar por que computadores digitais usam bits e como bits representam números, textos, imagens, instruções e estados.
4. Descrever, em alto nível, como intenção humana vira código-fonte, código executável, uso de CPU, memória, entrada, saída e persistência.
5. Entender que software não é “mágica”: é uma sequência de abstrações apoiada por hardware, sistemas operacionais, linguagens, protocolos e contratos.
6. Conectar fundamentos de computação a desenvolvimento Full Stack, IA e Cybersegurança.
7. Identificar riscos profissionais relacionados a representação incorreta, ambiguidade, perda de precisão, limites de máquina, automação sem validação e confiança excessiva em abstrações.
8. Avaliar, em um exemplo simples e em um exemplo profissional, como dados são recebidos, validados, transformados, persistidos, observados e protegidos.
9. Criar uma primeira peça do projeto final: um registro técnico de decisões computacionais, com atenção a segurança, performance, testes e observabilidade.

## Pré-requisitos

Este é o primeiro capítulo do livro e não exige experiência anterior. Ainda assim, alguns hábitos ajudarão:

- curiosidade para perguntar “o que acontece por baixo?”;
- disposição para separar conceito de ferramenta;
- atenção a nomes, limites e contratos;
- paciência para avançar do exemplo pequeno ao cenário real;
- familiaridade básica com uso de computador, navegador e arquivos.

Não é necessário saber programar. Os trechos de código serão explicados linha a linha e devem ser lidos como instrumentos de pensamento, não como cobrança de memorização de sintaxe.

## Contexto

Computação está em sistemas bancários, prontuários médicos, redes sociais, roteadores, satélites, carros, assistentes de IA, pipelines de dados, lojas virtuais, sistemas de autenticação e ferramentas de desenvolvimento. Em todos esses casos, o computador recebe algum tipo de entrada, representa essa entrada internamente, aplica regras e produz saída. A saída pode ser uma tela, uma resposta HTTP, um alerta de fraude, uma predição de modelo, um arquivo criptografado, um log, uma mensagem em uma fila ou um comando físico enviado a um dispositivo.

O ponto central é que computadores não entendem “significado” como humanos. Eles manipulam representações. Quando você digita “comprar”, o computador não possui a experiência humana de compra; ele recebe sequências de bits que seguem uma codificação de caracteres, passa esses bits por camadas de software, compara padrões, executa instruções e muda estados. O significado nasce do acordo entre pessoas, software, dados, regras de negócio e contexto operacional.

Essa distinção é essencial para três áreas que atravessam toda a formação:

- **Full Stack:** uma aplicação web depende de representações coerentes entre interface, API, banco de dados, cache, filas e integrações externas.
- **IA:** modelos aprendem padrões estatísticos a partir de representações numéricas de dados; se a representação for enviesada, incompleta ou mal validada, o comportamento do modelo refletirá esses problemas.
- **Cybersegurança:** ataques frequentemente exploram diferença entre o que humanos acham que uma entrada significa e o que o computador realmente executa, interpreta ou autoriza.

Computação, portanto, é tanto técnica quanto responsabilidade. Quem projeta sistemas computacionais define quais informações importam, quais regras serão automatizadas, quais erros serão tolerados, quais comportamentos serão bloqueados e quais evidências ficarão disponíveis para auditoria.

## Problema real

Imagine uma plataforma de cursos online. Um estudante clica em “concluir aula”. Parece uma ação simples. Por trás dela, o sistema precisa:

1. receber um evento da interface;
2. identificar usuário, curso, aula e horário;
3. validar se o usuário está autenticado;
4. verificar se a matrícula é válida;
5. representar o progresso de forma persistente;
6. evitar duplicidade caso o botão seja clicado duas vezes;
7. atualizar estatísticas;
8. emitir certificado quando regras forem cumpridas;
9. registrar logs para suporte e auditoria;
10. proteger a operação contra manipulação maliciosa;
11. responder rápido o suficiente para não prejudicar a experiência;
12. produzir métricas para descobrir falhas.

O usuário expressou uma intenção humana: “terminei esta aula”. O software precisa transformar essa intenção em comportamento executável. Essa transformação envolve dados, instruções, algoritmos, protocolos, memória, armazenamento, concorrência, segurança, testes e observabilidade.

Se o sistema representar o progresso apenas como texto livre, relatórios e validações serão frágeis. Se representar como porcentagem em número decimal sem cuidado, poderá sofrer inconsistências de arredondamento. Se aceitar o identificador da aula enviado pela tela sem verificar autorização no servidor, um atacante poderá marcar aulas de outro curso. Se não tratar idempotência, cliques repetidos poderão gerar eventos duplicados. Se não houver logs, a equipe não conseguirá explicar por que um certificado foi emitido indevidamente.

Esse problema real mostra que computação começa antes da programação. Começa ao decidir como representar o mundo de forma manipulável por regras.

## Conceito principal

**Computação é o processo de representar informação e transformá-la por meio de regras executáveis.**

Essa definição contém quatro ideias fundamentais:

1. **Representar:** computadores trabalham com símbolos codificados. Um número, uma letra, uma imagem, um token de sessão ou uma instrução precisam ser representados em bits.
2. **Informação:** dado bruto só vira informação quando interpretado dentro de um contexto. `42` pode ser idade, temperatura, identificador, quantidade ou código de erro.
3. **Transformar:** computar é mudar estado ou produzir saída a partir de entrada. Somar, ordenar, validar, comprimir, criptografar, classificar e renderizar são transformações.
4. **Regras executáveis:** a transformação precisa ser descrita de modo suficientemente preciso para que uma máquina execute sem ambiguidade humana.

Um computador digital moderno é uma máquina física construída para executar operações sobre representações binárias. O software organiza essas operações em camadas compreensíveis por humanos. Um algoritmo descreve uma estratégia de transformação. Um programa expressa essa estratégia em uma linguagem. Um processo é o programa em execução, com memória, recursos e interação com o sistema operacional. Um sistema é um conjunto de processos, dados, interfaces e pessoas operando para cumprir objetivos.

## Intuição

Pense em uma cozinha profissional. Ingredientes são entradas; receitas são instruções; utensílios são ferramentas; cozinheiros executam passos; pratos são saídas; estoque e higiene impõem restrições; câmeras, comandas e controles registram o processo. Uma receita ambígua, como “adicione sal suficiente”, pode funcionar com um cozinheiro experiente, mas não com uma máquina. Para automatizar, seria necessário definir quantidade, unidade, momento, temperatura, tolerância e tratamento de erro.

Computadores exigem esse tipo de precisão. Eles são extremamente rápidos e consistentes, mas não inferem intenção humana fora das regras e modelos que recebem. Se você manda dividir por zero, acessar memória inválida, confiar em entrada adulterada ou repetir uma cobrança sem chave de idempotência, a máquina não “percebe” o absurdo moral ou comercial da ação. Ela executa instruções, falha conforme suas regras ou produz um resultado incorreto.

A intuição profissional é esta: **software é intenção humana congelada em instruções executáveis, operando sobre representações limitadas do mundo.** Boas equipes tornam essa intenção explícita, testável, observável e segura. Equipes imaturas deixam intenção implícita, espalhada, difícil de auditar e vulnerável a interpretações equivocadas.

## Explicação profunda

Computação pode ser estudada em vários níveis. No nível matemático, ela investiga quais problemas podem ser resolvidos por procedimentos mecânicos, quais exigem recursos impraticáveis e quais são indecidíveis em modelos formais. No nível físico, ela depende de energia, circuitos, sinais elétricos, armazenamento e limites materiais. No nível de sistemas, envolve CPU, memória, sistema operacional, arquivos, rede e dispositivos. No nível de software, envolve linguagens, compiladores, interpretadores, bibliotecas, protocolos, bancos de dados, interfaces e observabilidade. No nível social, automatiza decisões que afetam pessoas, dinheiro, privacidade e segurança.

A primeira ponte entre esses níveis é a **representação**. Computadores digitais usam bits porque é mais confiável distinguir dois estados físicos estáveis do que muitos estados contínuos em ambientes ruidosos. Um bit pode representar `0` ou `1`, falso ou verdadeiro, ligado ou desligado, ausência ou presença. Sozinho, um bit é limitado. Em grupos, bits representam números, caracteres, pixels, sons, instruções e estruturas complexas. O byte, com 8 bits, permite 256 combinações. Sequências de bytes, quando interpretadas por convenções, permitem arquivos, mensagens de rede, bancos de dados e modelos de IA.

Representação não é neutralidade. O mesmo padrão de bits pode significar coisas diferentes conforme o tipo e o contexto. A sequência `01000001` pode ser o número decimal 65, a letra `A` em ASCII/UTF-8, parte de uma instrução de máquina ou um componente de uma imagem. Por isso, sistemas precisam de contratos: tipos, formatos, esquemas, protocolos e validações. Sem contrato, dados atravessam camadas com significado ambíguo.

A segunda ponte é a **instrução**. Uma CPU executa operações elementares: mover dados, somar, comparar, saltar para outra instrução, ler ou escrever memória, acionar mecanismos de entrada e saída por intermédio do sistema operacional. Linguagens de alto nível escondem essa granularidade. Quando escrevemos `total = price * quantity`, expressamos intenção comercial de calcular valor. Em camadas inferiores, isso envolve carregar valores, verificar representação numérica, executar multiplicação, armazenar resultado e talvez lidar com overflow, precisão decimal ou conversão de tipo.

A terceira ponte é a **abstração**. Abstrair é esconder detalhes para permitir raciocínio em um nível mais produtivo. Arquivos abstraem blocos de armazenamento; processos abstraem execução; sockets abstraem comunicação; HTTP abstrai troca de mensagens; JSON abstrai estrutura textual; ORMs abstraem SQL; frameworks web abstraem roteamento; bibliotecas de IA abstraem tensores e otimização. Abstrações são indispensáveis, mas têm custo: quando falham, o profissional precisa descer camadas. Um erro de encoding pode aparecer como caractere quebrado na interface; uma consulta ORM pode virar SQL ineficiente; uma chamada HTTP pode falhar por DNS, TLS, timeout, proxy ou limite de taxa; um modelo de IA pode responder com confiança a partir de representação insuficiente.

A quarta ponte é a **correção**. Um programa correto não é apenas um programa que “rodou uma vez”. Correção significa que, sob condições especificadas, ele preserva invariantes e produz resultados esperados. Em sistemas reais, as condições incluem entradas inválidas, concorrência, falhas de rede, dados antigos, usuários maliciosos, relógios inconsistentes, limites de armazenamento e mudanças de requisito. Computação profissional transforma regras em comportamento, mas também define como detectar quando o comportamento se desvia do esperado.

A quinta ponte é o **limite**. Nem todo problema é computável; nem todo problema computável é viável no tempo disponível; nem toda solução rápida é segura; nem toda solução segura é barata; nem toda automação é desejável. Ordenar mil itens é trivial; buscar a melhor rota global sob múltiplas restrições pode explodir combinatoriamente; treinar um grande modelo de IA exige dados, energia, hardware e governança; quebrar uma criptografia moderna por força bruta deve ser impraticável quando parâmetros são adequados. Entender computação é entender possibilidades e limites.

Essas ideias sustentam decisões profissionais. Em Full Stack, escolher entre número decimal, inteiro em centavos ou string para dinheiro não é detalhe: afeta precisão, validação, serialização, banco de dados e cálculo fiscal. Em IA, escolher como tokenizar texto e vetorizar documentos afeta recuperação, viés, custo e qualidade de resposta. Em Cybersegurança, escolher como representar identidade, sessão, permissão e segredo afeta autenticação, autorização, auditoria e superfície de ataque.

## Funcionamento interno

Um computador moderno executando uma aplicação web envolve uma cadeia de transformação. O usuário toca em uma tela ou pressiona uma tecla. O dispositivo converte uma ação física em sinais. O sistema operacional entrega eventos ao navegador. O navegador executa HTML, CSS e JavaScript para atualizar interface e talvez enviar uma requisição HTTP. A requisição é representada como bytes, passa por TLS, rede, roteadores, balanceadores, servidor web, runtime da aplicação, camadas de validação, regras de negócio, banco de dados e sistemas auxiliares. A resposta percorre o caminho de volta.

Internamente, a CPU segue um ciclo conceitual clássico: busca uma instrução, decodifica a instrução, executa a operação, acessa memória se necessário e grava resultado. CPUs reais fazem isso de forma altamente otimizada, com pipelines, caches, execução especulativa e múltiplos núcleos, mas o modelo simplificado ajuda: instruções controlam transformações sobre dados. A memória principal guarda dados e instruções em endereços. O sistema operacional isola processos, gerencia permissões, agenda execução, controla arquivos, oferece APIs para rede e impede que cada programa manipule hardware arbitrariamente.

O software profissional raramente fala diretamente com instruções de máquina. Usamos linguagens. Um compilador traduz código-fonte para uma forma executável antes da execução. Um interpretador executa ou traduz dinamicamente instruções. Muitas plataformas combinam estratégias: Java usa bytecode e máquina virtual; JavaScript em navegadores modernos usa interpretação, compilação just-in-time e otimizações; Python interpreta bytecode em uma máquina virtual. Cada escolha afeta desempenho, portabilidade, segurança, depuração e distribuição.

Dados também atravessam representações. Um formulário envia texto; a API converte texto em tipos internos; a regra de negócio valida invariantes; o banco armazena em colunas, documentos ou índices; logs serializam eventos; métricas agregam contadores; dashboards exibem tendências. Em cada fronteira pode ocorrer perda de informação, mudança de tipo, truncamento, arredondamento, encoding incorreto, exposição de segredo, erro de timezone, inconsistência de versão ou interpretação maliciosa.

Por isso, o funcionamento interno relevante para engenheiros não é apenas eletrônico. É a cadeia completa de estados e contratos:

```text
intenção humana
  -> entrada física ou digital
  -> representação em bits
  -> interpretação por software
  -> validação e autorização
  -> transformação por regras
  -> alteração de estado
  -> saída observável
  -> evidência para auditoria
```

Quando essa cadeia é explícita, é possível testar, proteger e otimizar. Quando é implícita, o sistema se torna dependente de sorte e conhecimento tribal.

## Modelo mental

Use o seguinte modelo mental durante todo o livro:

1. **Toda computação começa com uma fronteira.** Algo externo entra no sistema: clique, arquivo, mensagem, requisição, sensor, job agendado ou resposta de IA.
2. **Toda fronteira exige interpretação.** Bytes precisam virar tipos e significados.
3. **Toda interpretação precisa de contrato.** Sem contrato, cada camada inventa uma leitura.
4. **Todo contrato precisa de validação.** Entradas podem estar erradas, antigas, maliciosas ou fora do contexto.
5. **Toda transformação altera ou consulta estado.** Mesmo uma busca aparentemente simples consome recursos e pode revelar informação.
6. **Todo estado precisa de invariantes.** Invariantes dizem o que jamais deve ser violado: saldo não pode ficar negativo sem regra explícita; certificado não pode existir sem conclusão; sessão expirada não autoriza ação.
7. **Todo comportamento relevante precisa ser observável.** Se não há evidência, suporte, segurança e melhoria ficam frágeis.
8. **Toda abstração deve ter uma rota de descida.** Quando a camada alta falha, o profissional precisa saber investigar camadas inferiores.

Esse modelo será usado nos próximos capítulos para hardware, sistemas operacionais, redes, HTTP, programação, bancos de dados, arquitetura, testes, segurança e observabilidade.

## Exemplo simples

Vamos transformar uma intenção humana simples em computação: “calcular o preço total de uma compra com duas unidades de um produto de R$ 19,90”.

A intenção humana é compreensível, mas a máquina precisa de representação precisa:

- produto: identificador ou nome;
- preço unitário: valor monetário;
- quantidade: inteiro;
- moeda: BRL;
- regra: total = preço unitário multiplicado por quantidade.

Um primeiro erro comum seria usar número decimal de ponto flutuante para dinheiro em qualquer contexto sem pensar. Muitas linguagens representam números reais em binário aproximado. Valores como `19.90` podem não ter representação exata. Para aplicações financeiras, uma alternativa comum é representar dinheiro em centavos como inteiro.

```js
const precoUnitarioEmCentavos = 1990;
const quantidade = 2;
const totalEmCentavos = precoUnitarioEmCentavos * quantidade;

console.log(totalEmCentavos); // 3980
console.log(`R$ ${(totalEmCentavos / 100).toFixed(2)}`); // R$ 39.80
```

O exemplo é pequeno, mas contém fundamentos profissionais:

- o valor foi representado como inteiro para evitar erro de precisão em cálculo simples;
- a unidade está no nome da variável, reduzindo ambiguidade;
- a saída formatada é separada da representação interna;
- a regra de transformação é explícita;
- ainda faltam validações: quantidade negativa, moeda, produto inexistente, desconto, imposto, arredondamento fiscal e autorização.

Computação não é apenas fazer a conta. É escolher representação, aplicar regra, preservar significado e conhecer limites.

## Exemplo profissional

Agora considere uma API de matrícula em uma plataforma de formação técnica. O endpoint `POST /enrollments` recebe o identificador do estudante e do curso. A intenção humana é “matricular este estudante neste curso”. O sistema real precisa lidar com autenticação, autorização, regras de negócio, idempotência, persistência, eventos, métricas e auditoria.

Um contrato de entrada poderia ser:

```json
{
  "studentId": "stu_123",
  "courseId": "course_fullstack_001",
  "requestId": "req_2026_06_23_0001"
}
```

O campo `requestId` evita duplicidade quando o cliente repete a requisição por timeout. A regra de negócio não pode confiar apenas no `studentId` enviado: em autoatendimento, a identidade deve ser derivada do token autenticado; em operação administrativa sobre terceiro, o servidor precisa verificar permissão específica para agir em nome do estudante. O `courseId` deve existir, estar disponível e permitir matrícula. A operação precisa preservar consistência entre matrícula e evento: em arquiteturas profissionais, uma transação local pode gravar a matrícula e um registro de outbox no mesmo banco; a publicação externa do evento ocorre depois, de forma assíncrona, com retentativas, consumidores idempotentes e reconciliação para tolerar falhas entre banco e broker.

Em termos computacionais, o fluxo profissional é:

1. receber bytes da requisição;
2. decodificar JSON;
3. validar esquema e tipos;
4. autenticar o chamador;
5. derivar identidade do contexto autenticado;
6. autorizar a ação;
7. verificar invariantes: curso existe, matrícula ainda não existe, limite de vagas, período de inscrição;
8. executar transformação de estado;
9. persistir matrícula e registro de outbox com chave de idempotência;
10. publicar posteriormente o evento `EnrollmentCreated` a partir da outbox, aceitando repetição controlada;
11. registrar log sem expor dados sensíveis;
12. atualizar métricas;
13. responder com status adequado.

Esse exemplo conecta a definição de computação à engenharia. Cada etapa é uma transformação de representação sob contrato. Um erro em qualquer etapa pode virar bug, incidente de segurança, perda financeira ou experiência ruim. Em IA, fluxo semelhante ocorre quando uma aplicação recebe pergunta do usuário, transforma texto em tokens, recupera documentos, monta prompt, chama modelo, valida resposta e registra evidências. Em Cybersegurança, a mesma cadeia é analisada ao buscar pontos de entrada, interpretação insegura, falha de autorização e vazamento de informação.

## Implementação prática

A implementação abaixo é propositalmente pequena, mas modela decisões profissionais: representação de dinheiro em centavos, validação explícita, separação entre dado de entrada e resultado, e retorno estruturado de erro. Ela pode ser lida como um microcosmo de computação: entrada, interpretação, transformação e saída.

```js
function calcularTotalDoItem(entrada) {
  if (!entrada || typeof entrada !== 'object' || Array.isArray(entrada)) {
    return { ok: false, error: 'entrada_invalida' };
  }

  const { precoUnitarioEmCentavos, quantidade } = entrada;

  if (
    !Number.isSafeInteger(precoUnitarioEmCentavos) ||
    precoUnitarioEmCentavos < 0 ||
    precoUnitarioEmCentavos > 10_000_000
  ) {
    return { ok: false, error: 'preco_unitario_invalido' };
  }

  if (!Number.isSafeInteger(quantidade) || quantidade <= 0 || quantidade > 1000) {
    return { ok: false, error: 'quantidade_invalida' };
  }

  const totalEmCentavos = precoUnitarioEmCentavos * quantidade;

  if (!Number.isSafeInteger(totalEmCentavos)) {
    return { ok: false, error: 'total_fora_do_limite_seguro' };
  }

  return {
    ok: true,
    value: {
      totalEmCentavos,
      moeda: 'BRL'
    }
  };
}

console.log(calcularTotalDoItem({ precoUnitarioEmCentavos: 1990, quantidade: 2 }));
console.log(calcularTotalDoItem({ precoUnitarioEmCentavos: 1990, quantidade: -1 }));
```

Essa função não resolve todos os problemas de comércio eletrônico. Ela não calcula imposto, desconto, frete, cupom, arredondamento regulatório, estoque ou autorização. Seu valor didático está em mostrar que até uma transformação simples exige fronteiras claras. Em um sistema real, essa função faria parte de um domínio maior, seria coberta por testes automatizados, teria logs em chamadas relevantes e receberia entradas de uma camada que já autenticou e autorizou o usuário. Em sistemas de dinheiro com escala maior, múltiplas moedas, regras fiscais complexas ou exigência regulatória, a equipe deve considerar `BigInt`, bibliotecas decimais, tipos `DECIMAL` no banco de dados ou tipos monetários específicos da plataforma, sempre com testes de arredondamento e limites.

## Código comentado

```js
function calcularTotalDoItem(entrada) {
  // Toda computação começa interpretando uma entrada.
  // Não assumimos que o chamador enviou um objeto válido.
  if (!entrada || typeof entrada !== 'object' || Array.isArray(entrada)) {
    return { ok: false, error: 'entrada_invalida' };
  }

  // Extraímos apenas os campos necessários para a transformação.
  const { precoUnitarioEmCentavos, quantidade } = entrada;

  // Dinheiro é representado em centavos para evitar imprecisão de ponto flutuante.
  // A validação exige inteiro seguro, não negativo e dentro do limite de domínio.
  if (
    !Number.isSafeInteger(precoUnitarioEmCentavos) ||
    precoUnitarioEmCentavos < 0 ||
    precoUnitarioEmCentavos > 10_000_000
  ) {
    return { ok: false, error: 'preco_unitario_invalido' };
  }

  // Quantidade precisa ser inteira, positiva e limitada.
  // O limite reduz risco de abuso e de consumo inesperado de recursos.
  if (!Number.isSafeInteger(quantidade) || quantidade <= 0 || quantidade > 1000) {
    return { ok: false, error: 'quantidade_invalida' };
  }

  // A regra de transformação é simples, mas explícita.
  const totalEmCentavos = precoUnitarioEmCentavos * quantidade;

  // Mesmo usando inteiros seguros nos operandos, JavaScript tem limite de segurança numérica.
  // A checagem evita aceitar resultado que não pode ser representado com precisão.
  if (!Number.isSafeInteger(totalEmCentavos)) {
    return { ok: false, error: 'total_fora_do_limite_seguro' };
  }

  // A saída preserva unidade e moeda, evitando ambiguidade para próximas camadas.
  return {
    ok: true,
    value: {
      totalEmCentavos,
      moeda: 'BRL'
    }
  };
}
```

O código ensina cinco práticas: validar na fronteira, nomear unidades, limitar domínio, tratar erro como parte do contrato e preservar significado na saída. Essas práticas reaparecerão em APIs, bancos de dados, autenticação, filas, sistemas de IA e observabilidade.

## Aplicação no projeto final

O projeto final do Livro 1 será um sistema mínimo, versionado, testável, seguro por design e observável. Neste capítulo, você inicia um artefato chamado **Diário de Decisões Computacionais**. Ele deve registrar, em linguagem técnica, como o sistema representará entradas, estados e saídas.

Crie um arquivo no projeto final com estas perguntas:

1. Quais entidades existem no domínio inicial?
2. Quais dados entram por fronteiras externas?
3. Quais dados são confiáveis e quais precisam ser validados?
4. Que unidades aparecem nos nomes dos campos?
5. Que estados são permitidos e proibidos?
6. Quais invariantes não podem ser violados?
7. Quais erros devem ser retornados ao usuário e quais devem ser apenas registrados internamente?
8. Que eventos precisam ser observáveis?
9. Que dados são sensíveis?
10. Que decisões dependem de trade-offs entre simplicidade, segurança e performance?

Esse diário será refinado nos capítulos seguintes. A ideia é treinar uma habilidade essencial: antes de codar, explicitar representação e transformação.

## Segurança

Segurança começa quando você reconhece que toda entrada é uma fronteira entre um mundo não confiável e um sistema que executa regras. Computadores executam instruções com precisão; atacantes exploram justamente interpretações imprecisas, validações ausentes e permissões mal modeladas.

Problemas de segurança comuns têm relação direta com fundamentos de computação:

- **Injeção:** ocorre quando dados são interpretados como instruções. SQL injection, command injection e prompt injection têm diferenças técnicas, mas compartilham a confusão entre conteúdo fornecido e comando executável.
- **Falha de autorização:** ocorre quando o sistema representa identidade, papel ou permissão de forma incompleta. Saber quem é o usuário não basta; é necessário verificar o que ele pode fazer neste recurso específico.
- **Exposição de dados sensíveis:** ocorre quando logs, respostas, URLs, caches ou mensagens carregam informações que não deveriam atravessar aquela fronteira.
- **Erro de serialização:** ocorre quando uma representação externa permite campos inesperados, tipos incoerentes ou objetos manipulados.
- **Overflow e limites numéricos:** ocorrem quando operações excedem a capacidade segura da representação.
- **Confiança indevida em cliente:** ocorre quando a interface envia algo como `isAdmin: true` e o servidor trata como autoridade.

Em Full Stack, a regra é validar no servidor mesmo que a interface valide. Em IA, a regra é tratar prompts e documentos recuperados como dados potencialmente adversariais, não como autoridade absoluta. Em Cybersegurança, a regra é modelar ativos, fronteiras, agentes, permissões e impactos.

Uma postura profissional inclui: validação por allowlist, separação entre dados e comandos, princípio do menor privilégio, logs sem segredos, criptografia adequada, dependências atualizadas, revisão de código, testes de segurança e monitoramento de anomalias. Segurança não é uma seção adicionada ao fim do projeto; é consequência de boas representações e contratos desde o início.

## Performance

Performance é a relação entre trabalho computacional, recursos consumidos e tempo percebido. Um sistema lento não é apenas desagradável; ele pode aumentar custo de infraestrutura, reduzir conversão, criar filas, provocar timeouts, duplicar requisições, mascarar falhas e abrir oportunidades de negação de serviço.

A base de performance está em entender que toda transformação tem custo. Ler da memória costuma ser mais rápido que ler do disco; ler do disco costuma ser mais rápido que chamar uma rede distante; processar um item é diferente de processar milhões; copiar dados grandes entre camadas custa; serializar e desserializar JSON repetidamente custa; logs excessivos custam; índices aceleram leitura, mas tornam escrita mais cara; cache reduz latência, mas introduz invalidação e consistência eventual.

No exemplo de cálculo de item, performance parece irrelevante. Em escala, a história muda. Se uma loja calcula carrinhos milhões de vezes por dia, escolhas de representação, validação e estrutura de dados importam. Se cada cálculo chama um serviço remoto de preço sem cache e sem timeout, a aplicação ficará vulnerável à latência externa. Se um modelo de IA é chamado para cada tecla digitada, custo e tempo explodem. Se logs registram objetos enormes em cada requisição, armazenamento e busca ficam caros.

Performance profissional começa com perguntas mensuráveis:

- Qual é o volume esperado de entradas?
- Qual é a latência aceitável para o usuário?
- Qual é o custo por operação?
- Qual é a complexidade do algoritmo?
- O gargalo está em CPU, memória, disco, rede, banco, lock, fila ou serviço externo?
- O sistema degrada com segurança quando recursos acabam?

O objetivo não é otimizar prematuramente cada linha. É escolher representações e abstrações que não inviabilizem evolução, medir antes de concluir e entender que eficiência também é requisito de confiabilidade.

## Testes

Testar é verificar se uma transformação preserva o contrato esperado. Em computação, testes não provam ausência absoluta de defeitos, mas reduzem incerteza, documentam comportamento e protegem evolução.

Para a função `calcularTotalDoItem`, testes essenciais incluem:

```js
import assert from 'node:assert/strict';

assert.deepEqual(
  calcularTotalDoItem({ precoUnitarioEmCentavos: 1990, quantidade: 2 }),
  { ok: true, value: { totalEmCentavos: 3980, moeda: 'BRL' } }
);

assert.equal(
  calcularTotalDoItem({ precoUnitarioEmCentavos: 1990, quantidade: 0 }).error,
  'quantidade_invalida'
);

assert.equal(
  calcularTotalDoItem({ precoUnitarioEmCentavos: 10.5, quantidade: 2 }).error,
  'preco_unitario_invalido'
);

assert.equal(
  calcularTotalDoItem(null).error,
  'entrada_invalida'
);

assert.equal(
  calcularTotalDoItem([]).error,
  'entrada_invalida'
);

assert.equal(
  calcularTotalDoItem({ precoUnitarioEmCentavos: 10_000_001, quantidade: 1 }).error,
  'preco_unitario_invalido'
);

assert.equal(
  calcularTotalDoItem({ precoUnitarioEmCentavos: 1000, quantidade: 1001 }).error,
  'quantidade_invalida'
);
```

Em um sistema real, camadas de teste se complementam:

- **testes unitários:** validam transformações pequenas e regras puras;
- **testes de contrato:** garantem compatibilidade entre API, consumidores e produtores;
- **testes de integração:** verificam banco, filas, arquivos e serviços;
- **testes end-to-end:** exercitam jornada de usuário;
- **testes de segurança:** buscam entradas maliciosas e falhas de autorização;
- **testes de performance:** verificam latência, throughput e consumo;
- **testes de regressão:** impedem que comportamento já corrigido volte a falhar.

Testes também são computação: recebem entradas, executam instruções, comparam saídas e produzem evidência. Um teste ruim codifica uma expectativa errada; um teste frágil prende a implementação; um teste ausente deixa contrato implícito.

## Observabilidade

Observabilidade é a capacidade de entender o estado interno de um sistema a partir de sinais externos. Em sistemas computacionais, os principais sinais são logs, métricas, traces e eventos de auditoria.

Sem observabilidade, a equipe sabe apenas que “algo deu errado”. Com observabilidade, ela pode responder: qual entrada chegou, qual contrato falhou, qual dependência atrasou, qual usuário foi afetado, qual versão estava em produção, qual regra decidiu, quanto tempo levou, quantas vezes ocorreu e se há sinal de ataque.

Para o exemplo de matrícula, sinais úteis incluem:

- log estruturado de tentativa de matrícula com `requestId`, `courseId`, resultado e motivo de erro, sem expor token ou dados sensíveis;
- métrica de matrículas criadas por minuto;
- métrica de falhas por tipo;
- trace distribuído ligando API, banco e publicação de evento;
- evento de auditoria quando uma matrícula é criada, cancelada ou alterada por administrador.

Observabilidade exige equilíbrio. Registrar tudo pode vazar segredos e elevar custos. Registrar pouco impede investigação. O fundamento é o mesmo do restante do capítulo: decidir quais representações são necessárias para operar o sistema com segurança, confiabilidade e responsabilidade.

## Limitações

Computadores são poderosos, mas limitados. Entre as limitações mais importantes estão:

- **representação finita:** memória e armazenamento são finitos; números têm limites; textos dependem de encoding; tempo depende de relógios imperfeitos;
- **ambiguidade humana:** máquinas não entendem intenção não codificada;
- **complexidade:** alguns problemas crescem rápido demais para busca exaustiva;
- **falhas físicas e operacionais:** disco, rede, energia, dependências e processos humanos falham;
- **dados incompletos:** sistemas computam sobre o que foi representado, não sobre a realidade completa;
- **modelos aproximados:** IA e estatística produzem estimativas, não verdades absolutas;
- **segurança imperfeita:** não existe sistema conectado com risco zero;
- **evolução contínua:** requisitos mudam e representações antigas precisam conviver com novas.

Reconhecer limitações não diminui a computação. Ao contrário, é o que permite projetar sistemas robustos. Profissionais perigosos prometem certeza onde há incerteza; profissionais responsáveis especificam limites, monitoram comportamento e planejam mitigação.

## Trade-offs

Toda decisão computacional relevante envolve trade-offs.

- **Simplicidade versus precisão:** representar dinheiro como número decimal simples facilita código inicial, mas pode introduzir erro; representar em centavos exige disciplina de unidade.
- **Abstração versus controle:** frameworks aceleram entrega, mas podem esconder custo e dificultar diagnóstico.
- **Performance versus legibilidade:** otimizações manuais podem melhorar latência, mas tornar manutenção arriscada.
- **Segurança versus conveniência:** autenticação multifator reduz risco, mas adiciona fricção; logs detalhados ajudam suporte, mas podem expor dados.
- **Consistência versus disponibilidade:** sistemas distribuídos podem precisar escolher entre responder durante falha parcial ou preservar visão estritamente consistente.
- **Generalidade versus foco:** uma solução muito genérica pode ficar complexa cedo demais; uma solução muito específica pode bloquear evolução.
- **Automação versus supervisão:** IA pode acelerar triagem, mas decisões sensíveis podem exigir revisão humana, explicabilidade e trilha de auditoria.

O papel do engenheiro não é evitar trade-offs; é torná-los explícitos. Uma decisão aceitável para protótipo pode ser inaceitável para banco, hospital, defesa, educação ou sistema com dados infantis. Contexto, risco e custo importam.

## Erros comuns

1. **Confundir dado com significado.** `admin` em um campo textual não torna alguém administrador; autorização precisa de regra confiável.
2. **Achar que validação no frontend basta.** O cliente está fora da fronteira confiável.
3. **Usar tipos sem unidade.** `amount` sem dizer centavos, reais, dólares ou percentual convida erro.
4. **Tratar logs como lixeira.** Logs devem ajudar investigação sem vazar segredos.
5. **Ignorar limites numéricos.** Overflow, arredondamento e precisão importam.
6. **Acreditar que abstração elimina fundamento.** Frameworks reduzem trabalho, não removem CPU, memória, rede e banco.
7. **Confundir execução bem-sucedida com correção.** Rodar sem erro não significa atender contrato.
8. **Otimizar sem medir.** Palpites de performance frequentemente atacam o lugar errado.
9. **Confiar cegamente em IA.** Saídas de modelos devem ser validadas conforme risco e contexto.
10. **Não registrar decisões.** Sem histórico, o sistema vira coleção de escolhas inexplicáveis.

## Checklist

### Checklist profissional

Antes de implementar uma transformação computacional, verifique:

- [ ] A entrada está claramente definida.
- [ ] A representação interna tem unidade e tipo explícitos.
- [ ] O contrato diferencia dado, comando e identidade.
- [ ] Entradas inválidas têm tratamento previsível.
- [ ] Invariantes do domínio foram declaradas.
- [ ] Erros não expõem segredos.
- [ ] O comportamento relevante é testável.
- [ ] Há sinais mínimos de observabilidade.
- [ ] Custos de performance foram considerados proporcionalmente ao risco.
- [ ] Trade-offs foram documentados.
- [ ] A decisão conecta-se ao projeto final e aos capítulos seguintes.

## Exercícios

### Exercícios guiados

1. Explique, com suas palavras, a diferença entre dado e informação usando o valor `100` em três contextos diferentes.
2. Reescreva o exemplo de preço total usando nomes de variáveis que deixem unidade e moeda explícitas.
3. Liste cinco entradas externas de uma aplicação de cursos online e classifique cada uma como confiável ou não confiável.
4. Descreva o que pode dar errado se uma API aceitar `userId` do corpo da requisição para decidir quem está autenticado.
5. Escolha uma ação comum em aplicativo web, como “curtir publicação” ou “alterar senha”, e escreva a cadeia: entrada, representação, validação, transformação, estado, saída e observabilidade.
6. Identifique um caso em que performance e segurança entram em tensão. Explique qual decisão você tomaria e por quê.
7. Para um assistente de IA que responde dúvidas de alunos, liste três riscos de representação ou interpretação incorreta.
8. Crie três testes para uma função que calcula porcentagem de conclusão de curso.

## Desafio

### Desafios práticos

Desafio principal: modele a computação por trás de “emitir certificado de conclusão”.

Entregáveis:

1. Defina as entradas necessárias.
2. Defina a representação interna de estudante, curso, aula, progresso e certificado.
3. Declare pelo menos cinco invariantes.
4. Escreva pseudocódigo para a transformação “emitir certificado”.
5. Liste validações de segurança.
6. Liste métricas, logs e eventos de auditoria.
7. Explique um trade-off entre consistência e experiência do usuário.
8. Escreva três testes de unidade e dois testes de integração em linguagem natural.

Critério de qualidade: sua resposta deve permitir que outra pessoa implemente a primeira versão sem depender de adivinhação sobre significado dos dados.

## Revisão

### Perguntas de revisão

1. Por que computação pode ser definida como transformação de informação por regras executáveis?
2. Por que bits precisam de contexto para representar informação útil?
3. Qual é a diferença entre algoritmo, programa e processo?
4. Como uma intenção humana vira comportamento executável?
5. Por que abstrações são indispensáveis e perigosas ao mesmo tempo?
6. Como fundamentos de representação impactam Full Stack?
7. Como fundamentos de representação impactam IA?
8. Como fundamentos de representação impactam Cybersegurança?
9. Por que testes são parte da especificação do comportamento?
10. Por que observabilidade precisa ser planejada desde o começo?

## Resumo do capítulo

Computação é a disciplina de representar informação e transformá-la por regras executáveis. Computadores digitais manipulam bits, mas bits só ganham significado por convenções, tipos, contratos e contexto. Software transforma intenção humana em comportamento de máquina por camadas de abstração que passam por linguagens, runtimes, sistemas operacionais, memória, rede, armazenamento e interfaces.

O capítulo mostrou que até uma operação simples, como calcular total de item, envolve representação, validação, limites e saída estruturada. Em um cenário profissional, como matrícula em plataforma de cursos, os mesmos fundamentos aparecem em autenticação, autorização, idempotência, persistência, eventos, logs, métricas e auditoria. Full Stack, IA e Cybersegurança não são áreas separadas desses fundamentos; elas são aplicações especializadas deles.

A principal competência adquirida é pensar antes de codar: quais dados entram, o que significam, como são representados, quais regras os transformam, quais estados são permitidos, quais riscos existem, como testar e como observar.

## Conexão com os próximos capítulos

No próximo capítulo, estudaremos hardware, software e camadas de abstração. A pergunta mudará de “o que é computação?” para “como diferentes camadas cooperam para executar computação?”. Depois avançaremos para sistemas operacionais, processos, memória, redes, Internet, HTTP, programação, tipos, estruturas de dados, algoritmos, Git, engenharia de software, arquitetura, testes, segurança e observabilidade.

A conexão direta é esta: agora que você sabe que computação depende de representação, transformação e contratos, os próximos capítulos mostrarão as máquinas, camadas e práticas que tornam isso possível em sistemas reais.

## Conexão com projeto final

A contribuição deste capítulo para o projeto final é o **Diário de Decisões Computacionais**. Ele será usado para registrar entidades, representações, fronteiras, invariantes, validações, testes e sinais de observabilidade. Esse diário não é burocracia; é uma ferramenta para impedir que decisões fundamentais fiquem escondidas no código.

Ao final deste capítulo, o projeto final ainda não precisa ter aplicação executável. Ele precisa ter pensamento técnico documentado. Essa documentação será a base para as próximas implementações.

## Referências conceituais

- Alan Turing e a noção de procedimento mecânico como base para modelos de computação.
- Arquitetura de von Neumann como modelo clássico de armazenamento de dados e instruções na memória.
- Teoria da informação como estudo de representação, codificação e transmissão de informação.
- Sistemas operacionais como camada de gerenciamento de processos, memória, arquivos, dispositivos e permissões.
- Engenharia de software como disciplina para transformar requisitos humanos em sistemas corretos, seguros, testáveis e evolutivos.
- Segurança por design como prática de considerar ameaças, fronteiras e privilégios desde a concepção.
- Observabilidade como prática de produzir evidências operacionais por logs, métricas, traces e eventos.
