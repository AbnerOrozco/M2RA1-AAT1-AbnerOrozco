//PAGINA 2 EMPLEADOS

$(document).ready(function() {
    // Agregar fila
    $('#btnAgregar').click(function() {
        var Nombre = $('#txtNombre').val();
        var ingreso = $('#txtIngreso').val();
        var puesto = $('#txtPuesto').val();
        var salario = $('#txtsalario').val();
        var nuevaFila = '<tr>' +
                            '<th scope="row">' + Nombre + '</th>' +
                            '<td>' + ingreso + '</td>' +
                            '<td>' + puesto + '</td>' +
                            '<td>' + salario + '</td>' +
                        '</tr>';
        $('#tablaEstudiantes tbody').append(nuevaFila);
        // Limpiar campos de texto después de agregar la fila
        $('#txtNombre').val('');
        $('#txtIngreso').val('');
        $('#txtPuesto').val('');
        $('#txtsalario').val('');
    });
    // Eliminar fila
    $('#btnEliminar').click(function() {
        $('#tablaEstudiantes tbody tr:last').remove();
    });
    $('#btnEliminarU').click(function() {
        $('#tablaEstudiantes tbody tr:first').remove();
    });    
});


/* ///PAGINA 3 SUELDO LIQUIDOS

$(document).ready(function() {
    function calcularSuma() {
        var ingresos = parseFloat($('#txtIngresos').val()) || 0;
        var bonificacion = parseFloat($('#txtBonificacion').val()) || 0;
        var comisiones = parseFloat($('#txtComisiones').val()) || 0;
        var total = ingresos + bonificacion + comisiones;
        $('#ganado').text('Resultado: ' + total.toFixed(2));
    }
    $('#txtIngresos, #txtBonificacion, #txtComisiones').on('input', function() {
        calcularSuma();
    });
    calcularSuma();
});

/// RESULTADOS DE LA CASIIILA DE EGRESOS

$(document).ready(function() {
    function calcularSuma2() {
        var Ahorro = parseFloat($('#txtAhorro').val()) || 0;
        var IGSS = parseFloat($('#txtIGSS').val()) || 0;
        var Prestamos = parseFloat($('#txtPrestamos').val()) || 0;
        var total = Ahorro + IGSS + Prestamos;
        $('#descuento').text('Resultado: ' + total.toFixed(2));
    }
    $('#txtAhorro, #txtIGSS, #txtPrestamos').on('input', function() {
        calcularSuma2();
    });
    calcularSuma2();
});

/// CALCULO Y LLENADO DE CASILLA IGSS

$(document).ready(function() {
    function calcularIGSS() {
        var ingresos = parseFloat($('#txtIngresos').val()) || 0;
        var igss = ingresos * 0.0483;
        $('#txtIGSS').val(igss.toFixed(2));
    }
    $('#txtIngresos').on('input', function() {
        calcularIGSS();
    });
});

/// OBTENER SUELDOS LIQUIDOS

$(document).ready(function() {
    function calcularSueldoLiquido() {
        var descuento = parseFloat($('#descuento').text().split(':')[1].trim()) || 0;
        var ganado = parseFloat($('#ganado').text().split(':')[1].trim()) || 0;
        var sueldoLiquido = ganado - descuento;
        $('#resultado').text('Resultado: ' + sueldoLiquido.toFixed(2));
    }
    $('#btnObtener').click(function() {
        calcularSueldoLiquido();
    });
});
*/
///PAGINA 4 INDEMIZACION

/*$(document).ready(function() {
    function calcularMesesTrabajados() {
        var añosTrabajados = parseInt($('#txtAnos').val()) || 0;
        var mesesTrabajados = añosTrabajados * 12;
        $('#txtMeses').val(mesesTrabajados);
    }
    function calcularBonoYAguinaldoProporcional() {
        var sueldoBase = parseFloat($('#txtSueldo').val()) || 0;
        var mesesTrabajados = parseInt($('#txtMeses').val()) || 0;

        var bonoProporcional = (sueldoBase / 12) * mesesTrabajados;
        $('#txtBono').val(bonoProporcional.toFixed(2));

        var aguinaldoProporcional = (sueldoBase / 12) * mesesTrabajados;
        $('#txtAguinaldo').val(aguinaldoProporcional.toFixed(2));
    }
    $('#txtAnos').on('input', function() {
        calcularMesesTrabajados();
        calcularBonoYAguinaldoProporcional();
    });
    $('#txtSueldo').on('input', function() {
        calcularBonoYAguinaldoProporcional();
    });
    calcularMesesTrabajados();
});

// INDEMIZACION

$(document).ready(function() {
    function calcularIndemnizacion() {
        var sueldoBase = parseFloat($('#txtSueldo').val()) || 0;
        var añosTrabajados = parseInt($('#txtAnos').val()) || 0;
        var bono14 = parseFloat($('#txtBono').val()) || 0;
        var aguinaldo = parseFloat($('#txtAguinaldo').val()) || 0;
        var salarioPendiente = parseFloat($('#txtSalario').val()) || 0;
        var deudas = parseFloat($('#txtDeudas').val()) || 0;
        var indemnizacion = (sueldoBase * añosTrabajados) + bono14 + aguinaldo + salarioPendiente - deudas;
        $('#ganado').text('Indemnización: ' + indemnizacion.toFixed(2));
    }
    $('#txtSueldo, #txtAnos, #txtBono, #txtAguinaldo, #txtSalario, #txtDeudas').on('input', function() {
        calcularIndemnizacion();
    });
    calcularIndemnizacion();
});  */
