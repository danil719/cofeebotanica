// Получаем элементы
const animatedText = document.getElementById('animated-text');
const themeToggle = document.getElementById('theme-toggle');

// Массив с путями к GIF-файлам
const gifs = [
'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJweTU3M2w2Z3IxaW5hY2M0MmEwa2I2aWludmwyNG51czhodzQ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lWD61veKc405UGLcCx/giphy.gif',
  'https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif', // Первый GIF
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG0zZG40cHF3YnZucnA1d2FlemlmOXI2MGRxbjh1NDl0OTl6NXQybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ywo4hjS5Ab1Wb3uapU/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF6eXY3bDZsanE3dWo4bGEwc3U2NHZzbTZveXN0bmx0ZWdqeml1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hqTwL0ZCZE8pMfHn6G/giphy.gif', // Второй GIF
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNyY2tzN2F0cGRsajVjMjl3dXJkbzhvdGsyM3lvcGJpbGdzbWY1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsVGl3vuG5g0Kic/giphy.gif'  // Третий GIF
];

let currentGifIndex = 0; // Индекс текущего GIF

// Функция для смены GIF
function toggleGif() {
  // Меняем индекс GIF
  currentGifIndex = (currentGifIndex + 1) % gifs.length;

  // Устанавливаем новый GIF для текста
  animatedText.style.backgroundImage = `url(${gifs[currentGifIndex]})`;
}

// Добавляем обработчик события на кнопку
themeToggle.addEventListener('click', toggleGif);

// Устанавливаем начальный GIF
toggleGif(); // При загрузке страницы

'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJweTU3M2w2Z3IxaW5hY2M0MmEwa2I2aWludmwyNG51czhodzQ2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lWD61veKc405UGLcCx/giphy.gif',
  'https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif', // Первый GIF
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG0zZG40cHF3YnZucnA1d2FlemlmOXI2MGRxbjh1NDl0OTl6NXQybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ywo4hjS5Ab1Wb3uapU/giphy.gif',
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF6eXY3bDZsanE3dWo4bGEwc3U2NHZzbTZveXN0bmx0ZWdqeml1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hqTwL0ZCZE8pMfHn6G/giphy.gif', // Второй GIF
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNyY2tzN2F0cGRsajVjMjl3dXJkbzhvdGsyM3lvcGJpbGdzbWY1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsVGl3vuG5g0Kic/giphy.gif'  // Третий GIF