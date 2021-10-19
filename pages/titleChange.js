const coverHeading = document.querySelector("#placesTitle");
const playListTitles = [
  "Чем перекусить на природе? SUPACK рекомендует!",
  "Семь раз выбри, один раз возьми!",
  "Ели мясо мужики, чаем записвали",
  "Конечно готовые блюда выглядят иначе, когда они в котелке.."
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener("click", function () {
  coverHeading.textContent = getRandomElement(playListTitles);
});
