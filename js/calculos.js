//PAGINA SUELDOS LIQUIDOS
var FinancialCalculator = /** @class */ (function () {
    function FinancialCalculator() {
        //OBTENIENDO DATOS
        this.ingresosInput = document.getElementById('txtIngresos');
        this.bonificacionInput = document.getElementById('txtBonificacion');
        this.comisionesInput = document.getElementById('txtComisiones');
        this.ganadoOutput = document.getElementById('ganado');
        this.ahorroInput = document.getElementById('txtAhorro');
        this.igssInput = document.getElementById('txtIGSS');
        this.prestamosInput = document.getElementById('txtPrestamos');
        this.descuentoOutput = document.getElementById('descuento');
        this.resultadoOutput = document.getElementById('resultado');
        this.obtenerButton = document.getElementById('btnObtener');
        this.addEventListeners();
        this.calcularSuma();
        this.calcularSuma2();
        this.calcularIGSS();
    }
    FinancialCalculator.prototype.addEventListeners = function () {
        var _this = this;
        this.ingresosInput.addEventListener('input', function () {
            _this.calcularSuma();
            _this.calcularIGSS();
        });
        this.bonificacionInput.addEventListener('input', function () { return _this.calcularSuma(); });
        this.comisionesInput.addEventListener('input', function () { return _this.calcularSuma(); });
        this.ahorroInput.addEventListener('input', function () { return _this.calcularSuma2(); });
        this.prestamosInput.addEventListener('input', function () { return _this.calcularSuma2(); });
        this.obtenerButton.addEventListener('click', function () { return _this.calcularSueldoLiquido(); });
    };
    //CALCULANDO SUMA TOTAL
    FinancialCalculator.prototype.calcularSuma = function () {
        var ingresos = parseFloat(this.ingresosInput.value) || 0;
        var bonificacion = parseFloat(this.bonificacionInput.value) || 0;
        var comisiones = parseFloat(this.comisionesInput.value) || 0;
        var total = ingresos + bonificacion + comisiones;
        this.ganadoOutput.textContent = "Resultado: ".concat(total.toFixed(2));
    };
    FinancialCalculator.prototype.calcularSuma2 = function () {
        var ahorro = parseFloat(this.ahorroInput.value) || 0;
        var igss = parseFloat(this.igssInput.value) || 0;
        var prestamos = parseFloat(this.prestamosInput.value) || 0;
        var total = ahorro + igss + prestamos;
        this.descuentoOutput.textContent = "Resultado: ".concat(total.toFixed(2));
    };
    // CALCULANDO IGGS
    FinancialCalculator.prototype.calcularIGSS = function () {
        var ingresos = parseFloat(this.ingresosInput.value) || 0;
        var igss = ingresos * 0.0483;
        this.igssInput.value = igss.toFixed(2);
    };
    //CALCULANDO SUELDO LIQUIDO TOTAL
    FinancialCalculator.prototype.calcularSueldoLiquido = function () {
        var descuento = parseFloat(this.descuentoOutput.textContent.split(':')[1].trim()) || 0;
        var ganado = parseFloat(this.ganadoOutput.textContent.split(':')[1].trim()) || 0;
        var sueldoLiquido = ganado - descuento;
        this.resultadoOutput.textContent = "Resultado: ".concat(sueldoLiquido.toFixed(2));
    };
    return FinancialCalculator;
}());
document.addEventListener('DOMContentLoaded', function () {
    new FinancialCalculator();
});
// PAGINAS INDEMIZACION
var Calculadora = /** @class */ (function () {
    // EN EL CONSTRUCTOR OBTENEMOS  LOS DATOS
    function Calculadora() {
        this.añosInput = document.getElementById('txtAnos');
        this.mesesInput = document.getElementById('txtMeses');
        this.sueldoInput = document.getElementById('txtSueldo');
        this.bonoInput = document.getElementById('txtBono');
        this.aguinaldoInput = document.getElementById('txtAguinaldo');
        this.salarioInput = document.getElementById('txtSalario');
        this.deudasInput = document.getElementById('txtDeudas');
        this.resultadoDiv = document.getElementById('ganado');
        this.initEvents();
        this.calcularMesesTrabajados();
        this.calcularBonoYAguinaldoProporcional();
        this.calcularIndemnizacion();
    }
    Calculadora.prototype.initEvents = function () {
        var _this = this;
        this.añosInput.addEventListener('input', function () {
            _this.calcularMesesTrabajados();
            _this.calcularBonoYAguinaldoProporcional();
        });
        this.sueldoInput.addEventListener('input', function () {
            _this.calcularBonoYAguinaldoProporcional();
            _this.calcularIndemnizacion();
        });
        this.salarioInput.addEventListener('input', function () { return _this.calcularIndemnizacion(); });
        this.deudasInput.addEventListener('input', function () { return _this.calcularIndemnizacion(); });
        this.bonoInput.addEventListener('input', function () { return _this.calcularIndemnizacion(); });
        this.aguinaldoInput.addEventListener('input', function () { return _this.calcularIndemnizacion(); });
    };
    // ACA EMPIEZA LOS CALCULOS
    //CALCULO DE MESES
    Calculadora.prototype.calcularMesesTrabajados = function () {
        var añosTrabajados = parseFloat(this.añosInput.value) || 0;
        var añosEnteros = Math.floor(añosTrabajados);
        var meses = Math.round((añosTrabajados - añosEnteros) * 100);
        var mesesTrabajados = (añosEnteros * 12) + meses;
        this.mesesInput.value = mesesTrabajados.toString();
    };
    //CALCULO DE  AGUINALDO
    Calculadora.prototype.calcularBonoYAguinaldoProporcional = function () {
        var sueldoBase = parseFloat(this.sueldoInput.value) || 0;
        var mesesTrabajados = parseInt(this.mesesInput.value) || 0;
        var bonoProporcional = (sueldoBase / 12) * mesesTrabajados;
        this.bonoInput.value = bonoProporcional.toFixed(2);
        var aguinaldoProporcional = (sueldoBase / 12) * mesesTrabajados;
        this.aguinaldoInput.value = aguinaldoProporcional.toFixed(2);
    };
    // CALCULO DE INDEMIZACION
    Calculadora.prototype.calcularIndemnizacion = function () {
        var sueldoBase = parseFloat(this.sueldoInput.value) || 0;
        var añosTrabajados = parseInt(this.añosInput.value) || 0;
        var bono14 = parseFloat(this.bonoInput.value) || 0;
        var aguinaldo = parseFloat(this.aguinaldoInput.value) || 0;
        var salarioPendiente = parseFloat(this.salarioInput.value) || 0;
        var deudas = parseFloat(this.deudasInput.value) || 0;
        var indemnizacion = (sueldoBase * añosTrabajados) + bono14 + aguinaldo + salarioPendiente - deudas;
        this.resultadoDiv.textContent = 'Indemnización: ' + indemnizacion.toFixed(2);
    };
    return Calculadora;
}());
// Inicializar la calculadora cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    new Calculadora();
});
