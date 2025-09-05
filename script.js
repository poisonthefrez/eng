const cards = [
    { word: "Cultural traditions", translation: "Культурные Традиции" },
    { word: "An only child", translation: "Единственный ребенок" },
    { word: "Family honour", translation: "Семейная честь" },
    { word: "Elders", translation: "Пожилые люди" },
    { word: "Dull moment", translation: "Скучный момент" },
    { word: "The birth rate has dropped", translation: "Уровень рождаемости снизился" },
    { word: "Take priority", translation: "Имеет приоритет" },
    { word: "Evening stroll", translation: "Вечерняя прогулка" },
    { word: "Remain a big part of our life", translation: "Оставаться большой частью жизни" },
    { word: "Maternal", translation: "По маминой линии" },
    { word: "Concept of privacy", translation: "Идея чистого пространства" },
    { word: "Support", translation: "Поддержка" },
    { word: "Obey (Obedient, obedience) authority", translation: "Подчиняться авторитетам (Послушный, послушание)" },
    { word: "Nephew", translation: "Племянник" },
    { word: "Niece", translation: "Племянница" },
    { word: "Widow/Widower", translation: "Вдова/Вдовец" },
    { word: "Wedding", translation: "Свадьба" },
    { word: "Marriage", translation: "Женитьба" },
    { word: "Extended / Immediate / Nuclear family", translation: "Расширенная/ Ближайшие/ Нуклеарная семья " },
    { word: "Relations", translation: "Родственники" },
    { word: "Generation", translation: "Поколение" },
    { word: "Ancestor", translation: "Предок" },
    { word: "Be engaged", translation: "Быть помолвленным" },
    { word: "Be divorced", translation: "Быть разведённым" },
    { word: "Be married", translation: "Быть женатым / замужем" },
    { word: "Foster family", translation: "Приёмная семья" },
    { word: "Cradle of love and life", translation: "Источник любви и жизни" },
    { word: "Be separated", translation: "Быть разлучённы" },
    { word: "Family bonds", translation: "Семейные узы" },
    { word: "Reflect badly on", translation: "Плохо отражаться" },
    { word: "Siblings", translation: "Родные братья и сестры" },
    { word: "Умничка!❤️", translation: "Люблю!🫶🏻" }
];

let currentIndex = 0;
const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");

function updateCard() {
    card.classList.remove("flip"); // сброс поворота
    front.textContent = cards[currentIndex].word;
    back.textContent = cards[currentIndex].translation;
}

card.addEventListener("click", () => {
    card.classList.toggle("flip");
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
});

updateCard();

function toggleDictionary() {
    const dict = document.getElementById("dictionary");
    dict.style.display = dict.style.display === "none" || dict.style.display === "" ? "block" : "none";
}