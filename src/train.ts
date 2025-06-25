// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin.
//  Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: 
// getDigits("J2o5n1ny") return qiladi "251" codni tsda yozib ber soddaroq bolsin 




function getDigits(input: string): string {
  let result = "";
  for (let char of input) {
    if (char >= '0' && char <= '9') {
      result += char;
    }
  }
  return result;
}

console.log(getDigits("J2o5n1ny"));


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

  