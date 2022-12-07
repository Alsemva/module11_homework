import { getMonth, repeatWord, countDown } from "../../utils/index.js";

describe("Test for getMonth function", ()=>{
    it("Should be correctly if the number of month from 1 to 12 and invalid number", () => {
        expect(getMonth(11)).toBe('ноябрь');
        expect(getMonth('Не число')).toBe('Ошибка. Должно быть число');
        expect(getMonth(15)).toBe('Число не попадает в диапазон');
    })
})

describe("Test for repeatWord function", ()=>{
    const word = 'Hello';
    const correctAnswer = 'Hello1, Hello2, Hello3, Hello4, Hello5';
    const count = 5;
    it("it is correct if the required quantity of the output", () => {
        expect(repeatWord(word, count)).toBe(correctAnswer);
    })
})

describe("countDown", ()=>{
    const number = 7;
    const correctAnswer = '7 6 5 4 3 2 1';
    it("Should be correctly if the sequence of numbers is in reverse order", () => {
        expect(countDown(number)).toBe(correctAnswer);
    })
})