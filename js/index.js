const messages = [
    "Começa para baixo pela seta tabom?",
    "Primeiramente olá ❤️",
    "Você é minha Gostosa",
    "Minha alma gêmea",
    "E é claro...",
    "Minha futura wifer🤭",
    "Eu sempre estarei aqui para você",
    "Não importa o quão longe estivermos🥰",
    "Você é a mais bonita, fofa, engraçada,",
    "a garota mais doce que existe.",
    "Em uma palavra, você é simplesmente panguona.😍",
    "Eu sou o homem mais feliz do mundo, pode acreditar🥰",
    "Sou tão grato por ter te conhecido❤️",
    "Sempre farei o meu melhor para te fazer feliz🥺",
    "Você é a pessoa mais especial da minha vida🥰",
    "Eu não quero te perder",
    "E acredite em mim, eu não quero ninguém mais",
    "Não há ninguém melhor do que você❤️",
    "Você é a melhor de todas e única!",
    "O tempo voa, já estamos juntos há 1 ano e 1 mês exatos",
    "Houve algumas dificuldades,",
    "mas superamos a maioria delas",
    "e isso me fez perceber o quão importante você é vida ❤️",
    "Isso é para você,",
    "Para o amor da minha vida, assinado Hector Silva <3",
    "EU TE PANGUO ❤️"
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / messages.length;
init();
function init() {
    messages.forEach((msg, idx) => {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
            idx + 1
        }</time><span>${msg}</span>`;
        ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
}
function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + messages.length) % messages.length;
    const newActiveEl = document.querySelector(
        `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
        newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            adjustDay(-1);
            break;
        case "ArrowDown":
            adjustDay(1);
            break;
        default:
            return;
    }
});
