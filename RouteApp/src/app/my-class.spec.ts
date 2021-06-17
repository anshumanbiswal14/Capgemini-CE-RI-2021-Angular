import { MyClass } from "./my-class";

describe('MyClass', () => {
    it ('should create an instance', () => {
        expect(new MyClass()).toBeTruthy();
    });

    it ('should create formatted name', () => {
             ( expect (new MyClass().doThings("Ramesh")).toBe('[Ramesh]'));
    });

     it ('should create an instance', () => {
         expect(new MyClass().doStringWorks("Ramesh@gmail.com")).toBe('Ramesh');

   });
});