var FinancialCalculator = /** @class */ (function () {
    function FinancialCalculator() {
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
    FinancialCalculator.prototype.calcularIGSS = function () {
        var ingresos = parseFloat(this.ingresosInput.value) || 0;
        var igss = ingresos * 0.0483;
        this.igssInput.value = igss.toFixed(2);
    };
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
