// TASK-S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
//  va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2



function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}


console.log(missingNumber([3, 0, 1])); 




// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. tsda yozib ber

// function calculate(expression: string): number {
//   const parts = expression.split('+').map(part => part.trim());
//   const numbers = parts.map(Number);
//   return numbers.reduce((sum, num) => sum + num, 0);
// }


// console.log(calculate("1 + 2"));   
// console.log(calculate("10 + 5"));   
// console.log(calculate(" 7 +  8"));



// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]   tsda yozib ber

// function objectToArray<T extends Record<string, unknown>>(obj: T): [keyof T, T[keyof T]][] {
//   const entries = Object.entries(obj) as [keyof T, T[keyof T]][];
//   return entries;
// }

// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);




// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas. tsda yozib ber


// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number" && !isNaN(item)) {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); 



// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, 
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


// function palindromCheck(str: string): boolean {
//   const cleaned: string = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//   const reversed: string = cleaned.split('').reverse().join('');
//   return cleaned === reversed;
// }

// console.log(palindromCheck("Dad")); 
// console.log(palindromCheck("A man, a plan, a canal: Panama")); 
// console.log(palindromCheck("Hello")); 



// TASK M: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin 
// va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan 
// object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3])
//  return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({
//       number: num,
//       square: num * num
//     }));
//   }
  
//   console.log(getSquareNumbers([1, 2, 3]));
 
  



// TASK L: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni
//  chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")              
//     .map(word => word.split("").reverse().join("")) 
//     .join(" ");        
// }

// console.log(reverseSentence("we like coding!")); 











// TASK K: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;


// function countVowels(str: string): number {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("string")); 






// TASK-I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni 
// ko'p takrorlanganligi uchun 4'ni return qilmoqda.



// function majorityElement(arr: number[]): number {
//   const countMap: { [key: number]: number } = {};

//   for (const num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   let max = 0;
//   let result = arr[0];

//   for (const num in countMap) {
//     if (countMap[num] > max) {
//       max = countMap[num];
//       result = Number(num);
//     }
//   }

//   return result;
// }


// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 







// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin.
//  Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: 
// getDigits("J2o5n1ny") return qiladi "251" codni tsda yozib ber soddaroq bolsin 




// function getDigits(input: string): string {
//   let result = "";
//   for (let char of input) {
//     if (char >= '0' && char <= '9') {
//       result += char;
//     }
//   }
//   return result;
// }

// console.log(getDigits("J2o5n1ny"));


// TASK H: 


// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
//  faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//   let result = "";

//   for (let num of arr) {
//     if (num > 0) {
//       result += num.toString();
//     }
//   }

//   return result;
// }

// console.log(getPositive([1, -4, 3]));






//TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


// function getHighestIndex(arr: number[]): number {
//   let max = arr[0];
//   let index = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }

//   return index;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));

  