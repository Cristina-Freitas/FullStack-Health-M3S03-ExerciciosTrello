import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrow)', () => {
    expect(() => service.dividir(10,0)).toThrow();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrowError)', () => {
    expect(() => service.dividir(10,0)).toThrowError('Não é permitida a divisão por zero');
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrowError)', () => {
    expect(() => { throw new Error('Numero dividido por zero') }).toThrowError('Numero dividido por zero');
  });

  it('deve observar a função de somar de spyOn com o retorno fixo', () => {
    const spy = spyOn(service, 'somar').and.returnValue(5);

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(5);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve executar pelo 2 vez a função de somar ', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(4,2);
    service.somar(4,1);

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('deve executar pelo 2 vez a função de somar ', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(4,2);

    expect(spy).toHaveBeenCalledWith(4,2);
  });

  // Novo teste para a função `subtrair`
  it('deve subtrair dois números corretamente', () => {
    const result = service.subtrair(10, 3);
    expect(result).toBe(7); // Verifica se o resultado é 7
  });

   // Novo teste para a função `multiplicar`
   it('deve multiplicar dois números corretamente', () => {
    const result = service.multiplicar(3, 5);
    expect(result).toBe(15); // Verifica se o resultado é 15
  });

  // Novo teste para a função `dividir`
  it('deve dividir dois números corretamente', () => {
    const result = service.dividir(10, 2);
    expect(result).toBe(5); // Verifica se o resultado é 5
  });

  
});
