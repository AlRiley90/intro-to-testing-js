// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("helloWorld", function(){
    it("should be a defined function", function(){
        expect(typeof helloWorld).toBe("function");
    });
    it("should return a string when called", function(){
        expect(typeof helloWorld()).toBe("string");
    });
});

describe("sayHello", function(){
    it("it should return 'Hello, Jane!' when executed", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when executed", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when executed", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when executed", function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when passed a value of true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when passed a value of false", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when passed a null value", function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    // it("should return 'Hello, Number 23!' when passed a numerical value", function(){
    //     expect(sayHello(23)).toBe("Hello, Number 23!");
    // });
});

describe("isFive", function(){
    it("should be a defined function", function(){
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean value", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return 'true' when passed value is 5", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return 'true' even if input is a string of 5", function(){
        expect(isFive("5")).toBe(true);
    });
});

describe("isEven", function(){
    it("should be a defined function", function(){
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean value", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when input is 2", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return true when input is -4", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when input is 3", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return false when input is the string 'banana'", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when input is '8'", function(){
        expect(isEven("8")).toBe(true);
    });
    it("should return false when input is Infinity", function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when input is a boolean value", function(){
        expect(isEven(true)).toBe(false);
    });
});

describe("isVowel", function(){
    it("should be a defined function", function(){
        expect(typeof isVowel).toBe("function");
    });
    it("should return a boolean value when called", function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when the input is 'a'", function(){
        expect(isVowel('a')).toBe(true);
    });
    it("should return true when input is 'A'", function(){
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when input is 'y'", function(){
        expect(isVowel('y')).toBe(false);
    });
    it("should return false when input is 4", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when a boolean value is passed for input", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when 'banana' is passed for input", function(){
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when no input is passed into the function", function(){
        expect(isVowel()).toBe(false);
    });
});