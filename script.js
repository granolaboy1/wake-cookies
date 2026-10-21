// ===== Links de pedido e contato — edite aqui =====
const LINKS = {
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/wake-cookies-tatuape/bb508a15-a027-4b2f-93bc-e9f458ac8905",
  keeta: "https://url-eu.mykeeta.com/64L1nozz",
  "99": "https://oia.99app.com/dlp9/zbze4F",
  whatsapp: "https://wa.me/5511939338769",
  instagram: "https://www.instagram.com/wakecookies/",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Marengo%2C+1399+-+Tatuap%C3%A9%2C+S%C3%A3o+Paulo+-+SP",
};

// ===== Cardápio — edite preços e textos aqui =====
const COOKIES = [
  { name: "Clássico", img: "classico", tag: "Simples, mas perfeito!", price: "16,90", weight: "100g",
    desc: "Massa macia e dourada, recheada com a combinação equilibrada de gotas de chocolate nobre ao leite e meio amargo. Cada mordida é uma explosão de sabor." },
  { name: "Dark", img: "dark", tag: "Intensamente chocolatudo!", price: "16,90", weight: "100g",
    desc: "Massa cacau black para um sabor profundo e marcante, com gotas de chocolate nobre branco e meio amargo que equilibram cada mordida. Um cookie para quem ama chocolate de verdade!" },
  { name: "Kinder Bueno", img: "kinder-bueno", tag: "Uma explosão de sabor!", price: "23,90", weight: "120g",
    desc: "Nosso cookie leva gotas de chocolate nobre branco e ao leite. Recheio 100% artesanal, feito com o irresistível Kinder Bueno. E pra finalizar, um pedacinho de Kinder Bueno White no topo, porque a gente não economiza na perfeição!" },
  { name: "Nutella", img: "nutella", tag: "Uma combinação irresistível!", price: "18,90", weight: "120g",
    desc: "Massa branca macia por dentro e crocante por fora, combinada com gotas de chocolate nobre meio amargo e branco para um equilíbrio perfeito. No centro, uma explosão generosa de Nutella, derretendo a cada mordida. Simplesmente viciante!" },
  { name: "Nuts com Doce de Leite", img: "nuts-doce-de-leite", tag: "Uma combinação rica e deliciosa!", price: "20,90", weight: "120g",
    desc: "Massa generosa com gotas de chocolate nobre ao leite e meio amargo, pedaços de nozes e castanhas-do-Pará para dar o toque crocante, e um recheio cremoso de doce de leite mineiro. Equilíbrio perfeito entre textura e sabor!" },
  { name: "Ovomaltine", img: "ovomaltine", tag: "Para os amantes de crocância e cremosidade!", price: "18,90", weight: "120g",
    desc: "Massa macia com gotas de chocolate nobre branco e meio amargo, finalizada com rocks de Ovomaltine e um recheio generoso de creme crocante de Ovomaltine. Uma explosão de sabor a cada mordida!" },
  { name: "Pistache", img: "pistache", tag: "Surpreendente e irresistível!", price: "22,90", weight: "120g",
    desc: "Massa amanteigada combinada com gotas de chocolate nobre branco e chocolate belga ruby, trazendo uma explosão de sabores equilibrados. A crocância dos pedaços de pistache complementa a experiência, enquanto o recheio cremoso de pistache entrega um toque final sofisticado e viciante." },
  { name: "Red Velvet", img: "red-velvet", tag: "Elegante e cheio de sabor!", price: "20,90", weight: "130g",
    desc: "Massa vermelha aveludada com um toque de cacau, combinada com gotas de chocolate nobre branco. No recheio, a cremosidade da ganache de chocolate branco com cream cheese se une à acidez perfeita da geleia artesanal de frutas vermelhas. Uma experiência equilibrada e inesquecível!" },
  { name: "Siciliano", img: "siciliano", tag: "Refrescante e surpreendente!", price: "16,90", weight: "100g",
    desc: "Massa delicadamente aromatizada com raspas de limão siciliano, combinada com gotas de chocolate branco para um toque de doçura equilibrada. Leve, cítrico e irresistível!" },
  { name: "Biscoff", img: "biscoff", tag: "O inconfundível sabor Biscoff!", price: "25,90", weight: "120g",
    desc: "Massa com toque de baunilha e canela, pedaços do famoso biscoito Lotus Biscoff e chocolate ao leite. Por dentro, um recheio generoso de creme Biscoff, trazendo aquele sabor marcante e irresistível a cada mordida." },
  { name: "Ferrero", img: "ferrero", tag: "A combinação perfeita de chocolate e avelã!", price: "24,90", weight: "120g",
    desc: "Massa de chocolate e avelã, gotas de chocolate nobre ao leite e pedaços de avelã. Por dentro, um recheio cremoso com Ferrero Rocher triturado num creme artesanal inspirado no sabor do bombom. Intenso, cremoso e irresistível a cada mordida." },
];

const DRINKS_HOT = [
  { name: "Espresso", size: "40ml", price: "7,90" },
  { name: "Espresso Duplo", size: "80ml", price: "9,90" },
  { name: "Café Coado", size: "80ml", note: "100% arábica", price: "10,90" },
  { name: "Macchiato", size: "60ml", price: "8,90" },
  { name: "Macchiato Duplo", size: "120ml", price: "10,90" },
  { name: "Cappuccino", size: "160ml", price: "11,90" },
  { name: "Achocolatado", size: "160ml", price: "10,90" },
  { name: "Café com leite", size: "160ml", price: "9,90" },
  { name: "Chocolate Quente*", size: "160ml", price: "18,90" },
];

const DRINKS_COLD = [
  { name: "Água mineral", size: "510ml", price: "6,90" },
  { name: "Água com gás", size: "510ml", price: "6,90" },
  { name: "Coca-Cola", size: "lata 350ml", price: "7,90" },
];

// ===== Render =====
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.getElementById("cookie-grid").innerHTML = COOKIES.map((c, i) => `
  <article class="cookie ${i % 4 === 1 || i % 4 === 2 ? "cookie--gold" : ""}">
    <img class="cookie__img" src="assets/cookies/${c.img}.webp" alt="Cookie ${esc(c.name)}" loading="lazy">
    <div class="cookie__body">
      <h3>${esc(c.name)}</h3>
      <p class="cookie__tag">${esc(c.tag)}</p>
      <p class="cookie__desc">${esc(c.desc)}</p>
      <div class="price-row">
        <span class="price">R$ ${c.price}</span>
        <span class="weight">peso aproximado <b>${c.weight}</b></span>
      </div>
    </div>
  </article>`).join("");

const drinkRow = (d) => `
  <li>
    <span class="drink__name">${esc(d.name)} <small>${esc(d.size)}</small>${d.note ? `<em>${esc(d.note)}</em>` : ""}</span>
    <span class="drink__price">R$ ${d.price}</span>
  </li>`;
document.getElementById("drinks-hot").innerHTML = DRINKS_HOT.map(drinkRow).join("");
document.getElementById("drinks-cold").innerHTML = DRINKS_COLD.map(drinkRow).join("");

document.querySelectorAll("[data-order]").forEach((a) => {
  const url = LINKS[a.dataset.order];
  if (url) a.href = url;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Sombra no cabeçalho ao rolar
const topbar = document.querySelector(".topbar");
const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
