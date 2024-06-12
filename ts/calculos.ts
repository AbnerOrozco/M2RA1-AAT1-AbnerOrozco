//PAGINA SUELDOS LIQUIDOS

class FinancialCalculator {
    //DECLARANDO ELEMENTOS QUE VAMOS A USAR
    ingresosInput: HTMLInputElement;
    bonificacionInput: HTMLInputElement;
    comisionesInput: HTMLInputElement;
    ganadoOutput: HTMLParagraphElement;
  
    ahorroInput: HTMLInputElement;
    igssInput: HTMLInputElement;
    prestamosInput: HTMLInputElement;
    descuentoOutput: HTMLParagraphElement;
  
    resultadoOutput: HTMLParagraphElement;
    obtenerButton: HTMLButtonElement;
  
    constructor() {
      //OBTENIENDO DATOS
      this.ingresosInput = document.getElementById('txtIngresos') as HTMLInputElement;
      this.bonificacionInput = document.getElementById('txtBonificacion') as HTMLInputElement;
      this.comisionesInput = document.getElementById('txtComisiones') as HTMLInputElement;
      this.ganadoOutput = document.getElementById('ganado') as HTMLParagraphElement;
  
      this.ahorroInput = document.getElementById('txtAhorro') as HTMLInputElement;
      this.igssInput = document.getElementById('txtIGSS') as HTMLInputElement;
      this.prestamosInput = document.getElementById('txtPrestamos') as HTMLInputElement;
      this.descuentoOutput = document.getElementById('descuento') as HTMLParagraphElement;
  
      this.resultadoOutput = document.getElementById('resultado') as HTMLParagraphElement;
      this.obtenerButton = document.getElementById('btnObtener') as HTMLButtonElement;
  
      this.addEventListeners();
      this.calcularSuma();
      this.calcularSuma2();
      this.calcularIGSS();
    }
  
    addEventListeners() {
      this.ingresosInput.addEventListener('input', () => {
        this.calcularSuma();
        this.calcularIGSS();
      });
  
      this.bonificacionInput.addEventListener('input', () => this.calcularSuma());
      this.comisionesInput.addEventListener('input', () => this.calcularSuma());
  
      this.ahorroInput.addEventListener('input', () => this.calcularSuma2());
      this.prestamosInput.addEventListener('input', () => this.calcularSuma2());
  
      this.obtenerButton.addEventListener('click', () => this.calcularSueldoLiquido());
    }
    //CALCULANDO SUMA TOTAL
    calcularSuma() {
      const ingresos = parseFloat(this.ingresosInput.value) || 0;
      const bonificacion = parseFloat(this.bonificacionInput.value) || 0;
      const comisiones = parseFloat(this.comisionesInput.value) || 0;
      const total = ingresos + bonificacion + comisiones;
      this.ganadoOutput.textContent = `Resultado: ${total.toFixed(2)}`;
    }
    
    calcularSuma2() {
      const ahorro = parseFloat(this.ahorroInput.value) || 0;
      const igss = parseFloat(this.igssInput.value) || 0;
      const prestamos = parseFloat(this.prestamosInput.value) || 0;
      const total = ahorro + igss + prestamos;
      this.descuentoOutput.textContent = `Resultado: ${total.toFixed(2)}`;
    }
    // CALCULANDO IGGS
    calcularIGSS() {
      const ingresos = parseFloat(this.ingresosInput.value) || 0;
      const igss = ingresos * 0.0483;
      this.igssInput.value = igss.toFixed(2);
    }
    //CALCULANDO SUELDO LIQUIDO TOTAL
    calcularSueldoLiquido() {
      const descuento = parseFloat(this.descuentoOutput.textContent.split(':')[1].trim()) || 0;
      const ganado = parseFloat(this.ganadoOutput.textContent.split(':')[1].trim()) || 0;
      const sueldoLiquido = ganado - descuento;
      this.resultadoOutput.textContent = `Resultado: ${sueldoLiquido.toFixed(2)}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new FinancialCalculator();
  });