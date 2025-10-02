
// TASK-ZP:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

function countNumberAndLetters(str: string): { number: number; letter: number } {
  let number = 0;
  let letter = 0;

  for (const char of str) {
    if (char >= '0' && char <= '9') {
      number++;
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      letter++;
    }
  }

  return { number, letter };
}
console.log(countNumberAndLetters("string152%¥"));



// TASK ZQ:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function rotateArray(arr: number[], index: number): number[] {
//   const left = arr.slice(0, index);
//   const right = arr.slice(index);
//   return [...right.slice(1), ...left, right[0]];
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));



// TASK-ZP:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(str: string): { number: number; letter: number } {
//   let numbers = 0;
//   let letters = 0;

//   for (let char of str) {
//     if (/[0-9]/.test(char)) {
//       numbers++;
//     } else if (/[a-zA-Z]/.test(char)) {
//       letters++;
//     }
//   }
//   return { number: numbers, letter: letters };
// }
// console.log(countNumberAndLetters("string152%¥")); 
// console.log(countNumberAndLetters("abc123"));     
// console.log(countNumberAndLetters("Hello! 2025")); 


// TASK-ZO:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. 
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.

// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(str: string) {
//   let open = 0;
//   let close = 0;

//   for (let char of str) {
//     if (char === "(") open++;
//     if (char === ")") close++;
//   }

//   return open === close;
// }
// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
// console.log(areParenthesesBalanced("(abc)(def)")); 
// console.log(areParenthesesBalanced("())(")); 


// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];


// function rotateArray(arr: number[], index: number): number[] {
//   const left = arr.slice(0, index);
//   const right = arr.slice(index);
//   return [...right, ...left];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));



// TASK-ZG: Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
//  MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string

// function capitalizeWords(input: string): string {
//   return input
//     .toLowerCase()
//     .split(" ")
//     .filter(word => word.trim() !== "")
//     .join("_");
// }

// console.log(capitalizeWords("name should be a string"));

// TASK-ZF:

// Shunday function yozing, uni string parametri bolsin. 
// String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin
//  lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(input: string): string {
//   return input
//     .split(" ")
//     .map(word => {
//       if (word.length <= 2) {
//         return word; 
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log(capitalizeWords("name should be a string")); 

// console.log(capitalizeWords("a simple ts function")); 

// console.log(capitalizeWords("go to school now")); 



// TASK ZE

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.

// function removeDuplicate(input: string): string {
//   let result = '';
//   const seen: Record<string, boolean> = {};

//   for (const char of input) {
//     if (!seen[char]) {
//       result += char;
//       seen[char] = true;
//     }
//   }

//   return result;
// }


// console.log(removeDuplicate('stringgg')); 
// console.log(removeDuplicate('hellooo')); 



// TASK ZD Shunday function yozing. 
// Bu function o'ziga, parametr sifatida birinchi oddiy number, 
// keyin yagona array va uchinchi bo'lib oddiy number qabul qilsin.
// Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib,
// natija sifatida yangilangan arrayni qaytarsin.
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]; Yuqoridagi misolda,
// birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib, yangilangan arrayni qaytarmoqda.

// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//   if (index < 0 || index >= arr.length) {
//     throw new Error("Index is out of range");
//   }
//   const updatedArr = [...arr];
//   updatedArr[index] = newValue;

//   return updatedArr;
// }
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));


// TASK ZC Selisy (°C) shkalasi bo'yicha raqam qabul qilib, 
// uni Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing. 
// MASALAN: celsiusToFahrenheit(0) return 32; MASALAN: celsiusToFahrenheit(10) return 50; 
// Yuqoridagi misolda, 0°C, 32°F'ga teng. Yoki 10 gradus Selsiy, 50 Farenhaytga teng.
//  °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(0)); 
// console.log(celsiusToFahrenheit(10));  
// console.log(celsiusToFahrenheit(25));  



// TASK-ZB:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin

// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(30, 50));
// console.log(randomBetween(1, 10));  



// TASK Z Shunday function yozing.
//  Bu function sonlardan iborat array qabul qilsin. 
//  Function'ning vazifasi array tarkibidagi juft sonlarni topib ularni yig'disini qaytarsin.
//   MASALAN: sumEvens([1, 2, 3]); return 2; sumEvens([1, 2, 3, 2]); return 4;
//    Yuqoridagi misolda, bizning funktsiya berilayotgan array tarkibidagi sonlar ichidan faqatgina 
//    juft bo'lgan sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.


// function sumEvens(arr: number[]): number {
//   let sum = 0;
//   for (const num of arr) {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }
// console.log(sumEvens([1, 2, 3]));       
// console.log(sumEvens([1, 2, 3, 2]));    



// TASK Y  Shunday function yozing, uni 2'ta array parametri bo'lsin. 
// Bu function ikkala arrayda ham ishtirok etgan bir xil qiymatlarni yagona arrayga joylab qaytarsin.
//   MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]  Yuqoridagi misolda, 
//   argument sifatida berilayotgan array'larda o'xshash sonlar mavjud.
//    Function'ning vazifasi esa ana shu ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga joylab return qilmoqda.

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value) => arr2.includes(value));
// }

// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result); 


// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda 

// function countOccurrences(obj: object, keyToFind: string): number {
//   let count = 0;

//   function recursiveCount(currentObj: any) {
//     for (const key in currentObj) {
//       if (key === keyToFind) {
//         count++;
//       }

//       const value = currentObj[key];

//       if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//         recursiveCount(value);
//       }
//     }
//   }

//   recursiveCount(obj);
//   return count;
// }

// const data = {
//   model: 'Bugatti',
//   steer: {
//     model: 'HANKOOK',
//     size: 30
//   }
// };
// console.log(countOccurrences(data, 'model')); 




// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti


// function chunkArray<T>(arr: T[], size: number): T[][] {
//   if (size <= 0) {
//     throw new Error("size (kesma uzunligi) 0 dan katta bolishi kerak");
//   }
//   const result: T[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));
// console.log(chunkArray(["a","b","c"], 2));
// console.log(chunkArray([], 5));




/*
  Traditional API
  Rest API
  GraphQL API
*/

// API
/*
 *Type =   Traditional API => HTMLForm || Rest API => JSON || GraphQL API => ?
 *Method = GET || POST
 *Structure = Header || Body
 */
/*VALIDATION:
  Frontend validation
  Beckend validation
  Database validation
*/
// - Naming standards =>
/*
    function, method, vairable, : CAMEL case
    class  : PASCAL
    folder : KEBAB
    css    : SNAKE
*/
//TASK V
/*
Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
*/

// function countLetters(str: string) {
//   const result: any = {};

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log(countLetters("hello"));
//TASK U
/* 
Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.
*/
// function sumOdds(number: number) {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));
//TASK T
/*
Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
*/
// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//   const birlashgan = [];

//   for (let i = 0; i < arr1.length; i++) {
//     birlashgan.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     birlashgan.push(arr2[i]);
//   }

//   return birlashgan.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
//TASK-S:
/*
Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
*/
// function findMissingNumber(arr: number[]): number | null {
//   if (arr.length === 0) return null;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] !== arr[i] + 1) {
//       return arr[i] + 1;
//     }
//   }
//   return null;
// }
// console.log(findMissingNumber([1, 2, 3, 5]));
// console.log(findMissingNumber([10, 11, 13]));
// console.log(findMissingNumber([7, 8, 9]));
// console.log(findMissingNumber([]));
// TASK R
/*
Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin
*/
// function calculateSum(expression: string): number {
//   const cleaned = expression.replace(/\s/g, "");
//   const parts = cleaned.split("+");
//   let sum = 0;

//   for (let i = 0; i < parts.length; i++) {
//     const num = Number(parts[i]);
//     sum += num;
//   }

//   return sum;
// }

// console.log(calculateSum("1 + 2"));
// console.log(calculateSum(" 10 + 5 + 3 "));
// console.log(calculateSum("4+ 6+7"));
