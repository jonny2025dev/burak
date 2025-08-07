
// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda 

function countOccurrences(obj: object, keyToFind: string): number {
  let count = 0;

  function recursiveCount(currentObj: any) {
    for (const key in currentObj) {
      if (key === keyToFind) {
        count++;
      }

      const value = currentObj[key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        recursiveCount(value);
      }
    }
  }

  recursiveCount(obj);
  return count;
}

const data = {
  model: 'Bugatti',
  steer: {
    model: 'HANKOOK',
    size: 30
  }
};
console.log(countOccurrences(data, 'model')); 




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
