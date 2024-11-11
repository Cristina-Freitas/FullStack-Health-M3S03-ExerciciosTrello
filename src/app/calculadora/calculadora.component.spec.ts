import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar se 2 valores são iguais', () => {
      const valor1 = {value: true};
      const valor2 = {value: true};

      expect(valor1).toEqual(valor2);
  });

  it('deve validar se 2 valores são iguais e se os objetos comparados também são iguais', () => {
    const valor1 = {value: true};
    const valor2 = {value: true};

    expect(valor1).toBe(valor1);
  });

  it('deve somar dois números corretamente', () => {
    component.num1 = 2;
    component.num2 = 4;
    component.calculate();

    expect(component.result).toBe(6);
  });

  it('deve validar a expressão regular de cep', () => {
    const cep = "12345-567";

    expect(cep).toMatch(/^\d{5}-\d{3}$/);
  });

  it('deve validar se valor foi definido', () => {
    expect(component.num1).toBeDefined();
  });

  it('deve validar se valor não foi definido', () => {
    let nota;
    expect(nota).toBeUndefined();
  });

  it('deve validar se valor é nulo', () => {
    let notas = null;
    expect(notas).toBeNull();
  });

  it('deve validar se o valor do resultado não é nulo após somar os valores', () => {
    component.num1 = 2;
    component.num2 = 4;
    component.calculate();

    expect(component.result).not.toBeNull();
  });

  it('deve validar se o valor está contido dentro do array', () => {
    let frutas = ['laranja', 'maçã', 'pera'];

    expect(frutas).toContain('laranja');
  });

  it('deve validar se o valor é menor que 10', () => {
    component.num1 = 2;
    component.num2 = 4;
    component.calculate();

    expect(component.result).toBeLessThan(10);
  });

  it('deve validar se o valor é maior que 10', () => {
    component.num1 = 2;
    component.num2 = 14;
    component.calculate();

    expect(component.result).toBeGreaterThan(10);
  });

  it('deve executar pelo menos uma vez o evento de click da função somar ', () => {
    const spy = spyOn(component, 'calculate').and.callThrough();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(spy).toHaveBeenCalled();
  });

    // Novo teste para verificar o funcionamento do ngModel
    it('deve atualizar as variáveis num1 e num2 com o ngModel', () => {
      const compiled = fixture.nativeElement as HTMLElement;
  
      // Seleciona os campos de entrada pelo atributo placeholder
      const inputNum1 = compiled.querySelector('input[placeholder="Número 1"]') as HTMLInputElement;
      const inputNum2 = compiled.querySelector('input[placeholder="Número 2"]') as HTMLInputElement;
  
      // Define valores nos campos de entrada e dispara o evento de input
      inputNum1.value = '5';
      inputNum1.dispatchEvent(new Event('input'));
  
      inputNum2.value = '10';
      inputNum2.dispatchEvent(new Event('input'));
  
      // Atualiza a detecção de mudanças
      fixture.detectChanges();
  
      // Verifica se os valores das variáveis foram atualizados
      expect(component.num1).toBe(5);
      expect(component.num2).toBe(10);
    });
  

});
