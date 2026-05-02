import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { CalculatorService, numbers, operators } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(CalculatorService);
  });

  beforeAll(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set resultText to "0", subResultText to "0" when C is pressed', () => {
    service.resultText.set('123');
    service.subResultText.set('456');
    service.lastOperator.set('*');

    service.constructNumber('C');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should update resultText with number input', () => {
    let result = '';

    numbers.forEach(value => {
      service.constructNumber(value);

      if (value === '0' && service.resultText() === '0') {
        expect(service.resultText()).toBe('0');
      } else {
        result += value;
        expect(service.resultText()).toBe(result);
      }
    });
  });

  it('should handle operators correctly', () => {

    numbers.forEach(strNumber => {
      operators.forEach((operator) => {
        service.constructNumber('C');
        service.constructNumber(strNumber);
        service.constructNumber(operator);
        expect(service.lastOperator()).toBe(operator);

        expect(service.subResultText()).toBe(strNumber);
        expect(service.resultText()).toBe('0');
      });
    })
  });

  it('should calculte adding result', () => {
    for (let iteration = 0; iteration <= 100; iteration++) {
      const strNumber1 = Math.floor(Math.random() * 10).toString();
      const strNumber2 = Math.floor(Math.random() * 10).toString();

      service.constructNumber('C');
      service.constructNumber(strNumber1);
      service.constructNumber('+');
      service.constructNumber(strNumber2);

      expect(service.lastOperator()).toBe('+');
      expect(service.resultText()).toBe(strNumber2);
      expect(service.subResultText()).toBe(strNumber1);

      service.constructNumber('=');

      const result = +strNumber1 + +strNumber2;
      expect(service.resultText()).toBe(result.toString());
    }
  });

  it('should calculte substraction result', () => {
    for (let iteration = 0; iteration <= 100; iteration++) {
      const strNumber1 = Math.floor(Math.random() * 10).toString();
      const strNumber2 = Math.floor(Math.random() * 10).toString();

      service.constructNumber('C');
      service.constructNumber(strNumber1);
      service.constructNumber('-');
      service.constructNumber(strNumber2);

      expect(service.lastOperator()).toBe('-');
      expect(service.resultText()).toBe(strNumber2);
      expect(service.subResultText()).toBe(strNumber1);

      service.constructNumber('=');

      const result = +strNumber1 - +strNumber2;
      expect(service.resultText()).toBe(result.toString());
    }
  });

  it('should calculte multiply result', () => {
    for (let iteration = 0; iteration <= 100; iteration++) {
      const strNumber1 = Math.floor(Math.random() * 10).toString();
      const strNumber2 = Math.floor(Math.random() * 10).toString();

      service.constructNumber('C');
      service.constructNumber(strNumber1);
      service.constructNumber('x');
      service.constructNumber(strNumber2);

      expect(service.lastOperator()).toBe('x');
      expect(service.resultText()).toBe(strNumber2);
      expect(service.subResultText()).toBe(strNumber1);

      service.constructNumber('=');

      const result = +strNumber1 * +strNumber2;
      expect(service.resultText()).toBe(result.toString());
    }
  });

  it('should calculte divide result', () => {
    for (let iteration = 0; iteration <= 100; iteration++) {
      const strNumber1 = Math.floor(Math.random() * 10).toString();
      const strNumber2 = Math.floor(Math.random() * 10).toString();

      service.constructNumber('C');
      service.constructNumber(strNumber1);
      service.constructNumber('÷');
      service.constructNumber(strNumber2);

      expect(service.lastOperator()).toBe('÷');
      expect(service.resultText()).toBe(strNumber2);
      expect(service.subResultText()).toBe(strNumber1);

      service.constructNumber('=');

      const result = +strNumber1 / +strNumber2;
      expect(service.resultText()).toBe(result.toString());
    }
  });

  it('should handle decimal point correctly', () => {
    for (let iteration = 0; iteration <= 100; iteration++) {
      service.constructNumber('C');
      const strNumber1 = Math.floor(Math.random() * 10).toString();
      const strNumber2 = Math.floor(Math.random() * 10).toString();


      service.constructNumber(strNumber1);
      service.constructNumber('.');
      service.constructNumber(strNumber2);

      const resultStr = `${strNumber1}.${strNumber2}`;

      expect(service.resultText()).toBe(resultStr);
      service.constructNumber('.');
      expect(service.resultText()).toBe(resultStr);
    }
  });

  it('should handle backspace correctly', () => {
    service.resultText.set('1234');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('123');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('12');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('1');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('0');
  });

  it('should handle max length correctly', () =>{
    for( let i = 1; i <= 10; i++) {
      service.constructNumber(i === 10 ? '0': `${i}`);
    }

    expect(service.resultText().length).toBe(10);

    service.constructNumber('0')
    expect(service.resultText().length).toBe(10);
  });

  it('should not take any other character not available', () => {
    service.constructNumber('@');
    expect(service.resultText()).toBe('0');
    service.constructNumber('a');
    expect(service.resultText()).toBe('0');
    service.constructNumber('~');
    expect(service.resultText()).toBe('0');
    service.constructNumber('°');
    expect(service.resultText()).toBe('0');
  });

});
