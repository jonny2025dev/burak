
// TASK M: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin 
// va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan 
// object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3])
//  return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
    return numbers.map(num => ({
      number: num,
      square: num * num
    }));
  }
  
  console.log(getSquareNumbers([1, 2, 3]));
 
  



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

  