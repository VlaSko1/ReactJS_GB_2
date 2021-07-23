
/**
 * 
 * @param {number} maxLimit 
 * @returns { number } возвращает целое число от 0 до (maxLimit - 1 ) в случайном порядке
 */
export const generateTime = (maxLimit = 2001) => Math.floor(Math.random() * maxLimit);

/**
 * 
 * @param {Date (object)} date 
 * @returns {string} возвращает строку даты в формате: 15:16:16 23.07.2021
 */
export const getDate = (date) => {
  let mounth = getTwoNumber(date.getMonth() + 1); 
  let hour = getTwoNumber(date.getHours()) ;
  let minute = getTwoNumber(date.getMinutes());
  let second = getTwoNumber(date.getSeconds());
  
  return `${hour}:${minute}:${second} ${date.getDate()}.${mounth}.${date.getFullYear()}`;

  function getTwoNumber(number) {
    let string = number + '';
    if (string.length === 1) {
      string = '0' + string;
    }
    return string;
  }
}

/**
 * Скролит чат в нижнюю экрана на последнее сообщение
 */
export const scrollFunc = () => {
  let scrollElement = document.getElementById('messageField');
  scrollElement.scrollTop = scrollElement.scrollHeight;
}