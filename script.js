const cards = [
    { word: "Культурные Традиции", translation: "Cultural traditions" },
    { word: "Единственный ребенок", translation: "An only child" },
    { word: "Семейная честь", translation: "Family honour" },
    { word: "Пожилые люди", translation: "Elders" },
    { word: "Скучный момент", translation: "Dull moment" },
    { word: "Уровень рождаемости снизился", translation: "The birth rate has dropped" },
    { word: "Имеет приоритет", translation: "Take priority" },
    { word: "Вечерняя прогулка", translation: "Evening stroll" },
    { word: "Оставаться большой частью жизни", translation: "Remain a big part of our life" },
    { word: "По маминой линии", translation: "Maternal" },
    { word: "Идея чистого пространства", translation: "Concept of privacy" },
    { word: "Поддержка", translation: "Support" },
    { word: "Подчиняться авторитетам (Послушный, послушание)", translation: "Obey (Obedient, obedience) authority" },
    { word: "Племянник", translation: "Nephew" },
    { word: "Племянница", translation: "Niece" },
    { word: "Вдова/Вдовец", translation: "Widow/Widower" },
    { word: "Свадьба", translation: "Wedding" },
    { word: "Женитьба", translation: "Marriage" },
    { word: "Расширенная/ Ближайшие/ Нуклеарная семья", translation: "Extended / Immediate / Nuclear family" },
    { word: "Родственники", translation: "Relations" },
    { word: "Поколение", translation: "Generation" },
    { word: "Предок", translation: "Ancestor" },
    { word: "Быть помолвленным", translation: "Be engaged" },
    { word: "Быть разведённым", translation: "Be divorced" },
    { word: "Быть женатым / замужем", translation: "Be married" },
    { word: "Приёмная семья", translation: "Foster family" },
    { word: "Источник любви и жизни", translation: "Cradle of love and life" },
    { word: "Быть разлучённы", translation: "Be separated" },
    { word: "Семейные узы", translation: "Family bonds" },
    { word: "Плохо отражаться", translation: "Reflect badly on" },
    { word: "Родные братья и сестры", translation: "Siblings" },
    { word: "Люблю!🫶🏻", translation: "Умничка!❤️" }
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