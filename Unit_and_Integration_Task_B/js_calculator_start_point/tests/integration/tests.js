var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    const running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // Do the number buttons update the display of the running total?
  it('the number buttons should update the display of the running total', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    number_1.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

// Do the arithmetical operations update the display with the result of the operation?
  it('add two numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const plus = element(by.id('operator_add'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    plus.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })
  it('subtract two numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const subtract = element(by.id('operator_subtract'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    subtract.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  })
  it('multiply two numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const multiply = element(by.id('operator_multiply'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    multiply.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })
  it('divide two numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const divide = element(by.id('operator_divide'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    divide.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
  })

  // Can multiple operations be chained together?
  it('add multiple numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const plus = element(by.id('operator_add'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    number_1.click();
    plus.click();
    number_2.click();
    plus.click();
    number_2.click();
    plus.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('17');
  })
  it('subtract multiple numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const subtract = element(by.id('operator_subtract'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    number_1.click();
    subtract.click();
    number_2.click();
    subtract.click();
    number_2.click();
    subtract.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })
  it('multiply multiple numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const multiply = element(by.id('operator_multiply'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    multiply.click();
    number_2.click();
    multiply.click();
    number_2.click();
    multiply.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })
  it('divide two numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_8 = element(by.id('number8'));
    const number_2 = element(by.id('number2'));
    const divide = element(by.id('operator_divide'));
    const equals = element(by.id('operator_equals'));
    number_8.click();
    divide.click();
    number_2.click();
    divide.click();
    number_2.click();
    divide.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1');
  })
  it('different operations on multiple numbers together correctly', function(){
    const running_total = element(by.id('running_total'));
    const number_0 = element(by.id('number0'));
    const number_8 = element(by.id('number8'));
    const number_2 = element(by.id('number2'));
    const divide = element(by.id('operator_divide'));
    const multiply = element(by.id('operator_multiply'));
    const subtract = element(by.id('operator_subtract'));
    const plus = element(by.id('operator_add'));
    const equals = element(by.id('operator_equals'));
    // 200
    number_2.click();
    number_0.click();
    number_0.click();
    divide.click();
  // 100
    number_2.click();
    plus.click();
    // 108
    number_8.click();
    subtract.click();
    // 106
    number_2.click();
    multiply.click();
    // 212
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('212');
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('gives negative number', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const subtract = element(by.id('operator_subtract'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    subtract.click();
    number_1.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-11');
  })
  it('gives decimal number', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_2 = element(by.id('number2'));
    const divide = element(by.id('operator_divide'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    divide.click();
    number_1.click();
    number_2.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.08333333333333333');
  })
  it('gives very large number', function(){
    const running_total = element(by.id('running_total'));
    const number_9 = element(by.id('number9'));
    const multiply = element(by.id('operator_multiply'));
    const equals = element(by.id('operator_equals'));
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();

    multiply.click();

    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();
    number_9.click();

    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('99999980000001');
  })

  // f a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement)
  it('divide by 0 is infinity', function(){
    const running_total = element(by.id('running_total'));
    const number_1 = element(by.id('number1'));
    const number_0 = element(by.id('number0'));
    const divide = element(by.id('operator_divide'));
    const equals = element(by.id('operator_equals'));
    number_1.click();
    divide.click();
    number_0.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  })

});