import FizzBuzz from "../scripts/FizzBuzz.js";



describe ('FizzBuzz', () => {
    test('should', ()  => {
        //given
        let numb = 3;
        const fizzBuzz = new FizzBuzz;
        //when
        const result = fizzBuzz.isDIvisible(numb);

        //then
        expect (result).toBe('Fizz');    
           
    });
    test ('should return Buzz', () => {
        const numb = 5;
        const fizzBuzz = new FizzBuzz;
        const result = fizzBuzz.isDIvisible(numb);
    expect(result).toBe('Buzz')
    });

    test ('should return FizzBuzz', () =>{
        const numb = 15;
        const fizzBuzz = new FizzBuzz;
        const result = fizzBuzz.isDIvisible(numb);
        expect(result).toBe('FizzBuzz');
    })
});

test ('divisible by 3 and with 3 return Fizz', () =>{
    const numb = 100;
    const numbString = numb.toString();
    const arrayNumber = numbString.valueOf(numb)
    const fizzBuzz = new FizzBuzz;
    const result = fizzBuzz.isDIvisibleWithThree(arrayNumber);
    expect(result).toBe('Fizz');

})

test('divisible by 5 and with 5 return Buzz', () => {
    const numb = 100;
    const numbString = numb.toString();
    const arrayNumber = numbString.valueOf(numb)
    const fizzBuzz = new FizzBuzz;
    const result = fizzBuzz.isDIvisibleWithFive(arrayNumber);
    expect(result).toBe('Buzz');

})