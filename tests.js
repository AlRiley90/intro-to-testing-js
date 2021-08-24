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