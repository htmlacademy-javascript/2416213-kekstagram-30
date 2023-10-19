// Функция для проверки длины строки.

const isStringLengthLess = (string1, length) => string1.length <= length;

isStringLengthLess('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.

function isStringPalindrome (string2) {
  const stringWithoutSpace = string2.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < stringWithoutSpace.length / 2; i++) {
    if (stringWithoutSpace.at(i) !== stringWithoutSpace.at(-i - 1)) {
      return false;
    }
  }

  return true;
}

isStringPalindrome('А роза упала на лапу Азора ');

// Дополнительное задание

const getPositiveIntegerNumber = (input) => {
  let result = '';

  if (!Number.isNaN(input)) {
    input = input.toString;

    for (let i = 0; i <= input.length - 1; i++) {
      const resultItem = parseInt(input[i], 10);

      if (Number.isInteger(resultItem)) {
        result += resultItem;
      }
    }
  }

  const integerNumber = result.length > 0 ? Math.round(result) : NaN;

  return integerNumber;
};

getPositiveIntegerNumber(-1.12);


