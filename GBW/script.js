const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se imagine como um grande produtor rural (o grande mesmo, com mais de 10 mil alqueires de terra), pra facilitar suas ideias vamos dizer que é de grãos. Você teve uma produção um pouco a baixo no ano, porém a projeção para a próxima safra é a melhor possível. Então você lembra que em uma certa área, cerca de 15% da propriedade, possui uma grande quantidade de árvores e um manancial, um local que provalvemente pode alavancar ainda mais a sua safra. O que faria nessa circunstância?",
        alternativas: [
            {
                texto: "Provavelmente eu plantaria na área, pode ser que venha a causar um pequeno problema no futuro, porém vou ter mais produtividade.",
                afirmacao: "A ganância começa a aparecer, "
            },
            {
                texto: "Eu plantaria apenas na área que já é de costume, uma vez que o problema que posso gerar com esse desmatamento é maior do que o lucro a mais que eu teria.",
                afirmacao: "Você fez o certo em um primeiro momento, "
            }
        ]
    },
    {
        enunciado: "Caso tenha optado pela primeira opção saiba que sua produção foi de 18% a mais do que era esperado. Já se escolheu a segunda opção saiba que mesmo com o bom ano sua produção foi apenas 3% maior que o esperado. Nessa nova safra você tem mais uma oportunidade de ampliar sua área de plantio, pois comprou mais uma área, com mais biodiversidade, porém nessa nova área você terá 20% a mais de produção. E aí vai ampliar?",
        alternativas: [
            {
                texto: "Que duvida hein, acho que vou continuar ampliando",
                afirmacao: "vai aumentando..."
            },
            {
                texto: "Como não ampliei a outra área, acho que essa vou ampliar",
                afirmacao: "porém a ganância apareceu em. "
            },
            {
                texto: "Já ampliei a outra área, essa vou preservar",
                afirmacao: "porém sua conciência começou a te levar pro caminho certo. "
            },
            {
                texto: "Vou continuar sem ampliar",
                afirmacao: "mesmo após uma nova tentação, você continua no caminho certo. "
            },
        ]
    },
    {
        enunciado: "Agora, 5 anos depois, você está feliz com sua familia, afinal comprou uma área do mesma magnitude da sua, e pagou muito abaixo ainda, pelo fato de ter muitas árvores e pouco espaço para plantio. Mas você tem possibilidade de ampliar cerca de 35% da área de plantio, uma baita oportunidade. Agora fica a pergunta o que você faria hein?",
        alternativas: [
            {
                texto: "Já fiz duas vezes,tô experiente nisso, bora mais uma",
                afirmacao: "E todos morrem" 
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
