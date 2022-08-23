export default class FizzBuzz {
    constructor() {
    }

        isDIvisible(numb) {
            if (numb % 3 === 0 && numb % 5 === 0) return 'FizzBuzz';
            if (numb % 3 === 0) return 'Fizz';
            if (numb % 5 === 0) return 'Buzz';
            
        else {
            return numb;
        }
    }

        isDIvisibleWithThree (arrayNumber) {
            if (arrayNumber.indexOf('3') || arrayNumber % 3 === 0) return 'Fizz';
        }

        isDIvisibleWithFive (arrayNumber) {
            if (arrayNumber.indexOf('5') || arrayNumber % 5 === 0) return 'Buzz';
        }
    
}