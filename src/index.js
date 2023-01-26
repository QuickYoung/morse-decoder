const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

// 0 = [], 1 = ['.'],  2 = ['-']

function decode(expr)
{
  var answer_table = ['', '.', '-'],
      words = expr.split(/[*]{10}/),
      letter = '',
      word = '',
      resultDecoding = [];

  for (var i = 0, l = words.length; i < l; i++)
  {
    for (var j = 2, ln = words[i].length; j <= ln; j += 2)
    {
      letter += answer_table[Number(words[i][j - 1]) + Number(words[i][j - 2])];
      j % 10 == 0 && (word += MORSE_TABLE[letter]) && (letter = '');
    }
    resultDecoding.push(word) && (word = '');
  }

  return resultDecoding.join(' ');
}

module.exports = {decode};
