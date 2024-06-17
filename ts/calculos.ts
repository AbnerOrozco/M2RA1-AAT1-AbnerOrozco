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

// PAGINAS INDEMIZACION

  class Calculadora {
    private añosInput: HTMLInputElement;
    private mesesInput: HTMLInputElement;
    private sueldoInput: HTMLInputElement;
    private bonoInput: HTMLInputElement;
    private aguinaldoInput: HTMLInputElement;
    private salarioInput: HTMLInputElement;
    private deudasInput: HTMLInputElement;
    private resultadoDiv: HTMLDivElement;

    // EN EL CONSTRUCTOR OBTENEMOS  LOS DATOS

    constructor() {
        this.añosInput = document.getElementById('txtAnos') as HTMLInputElement;
        this.mesesInput = document.getElementById('txtMeses') as HTMLInputElement;
        this.sueldoInput = document.getElementById('txtSueldo') as HTMLInputElement;
        this.bonoInput = document.getElementById('txtBono') as HTMLInputElement;
        this.aguinaldoInput = document.getElementById('txtAguinaldo') as HTMLInputElement;
        this.salarioInput = document.getElementById('txtSalario') as HTMLInputElement;
        this.deudasInput = document.getElementById('txtDeudas') as HTMLInputElement;
        this.resultadoDiv = document.getElementById('ganado') as HTMLDivElement;

        this.initEvents();
        this.calcularMesesTrabajados();
        this.calcularBonoYAguinaldoProporcional();
        this.calcularIndemnizacion();
    }

    private initEvents(): void {
        this.añosInput.addEventListener('input', () => {
            this.calcularMesesTrabajados();
            this.calcularBonoYAguinaldoProporcional();
        });

        this.sueldoInput.addEventListener('input', () => {
            this.calcularBonoYAguinaldoProporcional();
            this.calcularIndemnizacion();
        });

        this.salarioInput.addEventListener('input', () => this.calcularIndemnizacion());
        this.deudasInput.addEventListener('input', () => this.calcularIndemnizacion());
        this.bonoInput.addEventListener('input', () => this.calcularIndemnizacion());
        this.aguinaldoInput.addEventListener('input', () => this.calcularIndemnizacion());
    }

// ACA EMPIEZA LOS CALCULOS
//CALCULO DE MESES
private calcularMesesTrabajados(): void {
  const añosTrabajados = parseFloat(this.añosInput.value) || 0;
  const añosEnteros = Math.floor(añosTrabajados);
  const meses = Math.round((añosTrabajados - añosEnteros) * 100);
  const mesesTrabajados = (añosEnteros * 12) + meses;
  this.mesesInput.value = mesesTrabajados.toString();
}
//CALCULO DE  AGUINALDO

    private calcularBonoYAguinaldoProporcional(): void {
        const sueldoBase = parseFloat(this.sueldoInput.value) || 0;
        const mesesTrabajados = parseInt(this.mesesInput.value) || 0;

        const bonoProporcional = (sueldoBase / 12) * mesesTrabajados;
        this.bonoInput.value = bonoProporcional.toFixed(2);

        const aguinaldoProporcional = (sueldoBase / 12) * mesesTrabajados;
        this.aguinaldoInput.value = aguinaldoProporcional.toFixed(2);
    }

// CALCULO DE INDEMIZACION

    private calcularIndemnizacion(): void {
        const sueldoBase = parseFloat(this.sueldoInput.value) || 0;
        const añosTrabajados = parseInt(this.añosInput.value) || 0;
        const bono14 = parseFloat(this.bonoInput.value) || 0;
        const aguinaldo = parseFloat(this.aguinaldoInput.value) || 0;
        const salarioPendiente = parseFloat(this.salarioInput.value) || 0;
        const deudas = parseFloat(this.deudasInput.value) || 0;

        const indemnizacion = (sueldoBase * añosTrabajados) + bono14 + aguinaldo + salarioPendiente - deudas;
        this.resultadoDiv.textContent = 'Indemnización: ' + indemnizacion.toFixed(2);
    }
}

// Inicializar la calculadora cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Calculadora();
});
