//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
//если строка меньше или равна указанной длине, и false, если строка длиннее.


function getLineLength(line, allowedSymbols) {
  line.length <= allowedSymbols ? true : false;
  return
}

function getPalindrom (phrase) {

  let phraseNormalized = phrase.replaceAll(' ', '').toUpperCase();
  let newPhrase = '';
  for (let i=phraseNormalized.length-1; i >= 0; i--) {
    newPhrase += phraseNormalized[i];
  }
  console.log(newPhrase);

  newPhrase === phraseNormalized ? true : false;
  }


getPalindrom ('А роза упала на лапу Азора');



