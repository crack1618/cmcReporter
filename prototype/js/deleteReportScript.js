var fila1 = "norma1";
var fila2 = "norma2";
var okn1 = true;
var okn2 = true;

function clickBotonLupa()
{
	var tabla = document.getElementById('table-result');
	var texto = document.getElementById('text-search').value;
	var destab = document.getElementById('des-tab');
	if (texto == "norma 1")
	{
		destab.value = "Código norma 1";
		tabla.rows[1].cells[0].innerHTML = "Norma 1";
		tabla.rows[1].cells[1].innerHTML = "Descripción de la norma 1.";
		tabla.rows[2].cells[0].innerHTML = "";
		tabla.rows[2].cells[1].innerHTML = "";
		fila1 = "norma1";
		fila2 = "";
	} else if(texto == "norma 2") {
		destab.value = "Código norma 2";
		tabla.rows[1].cells[0].innerHTML = "Norma 2";
		tabla.rows[1].cells[1].innerHTML = "Descripción de la norma 2.";
		tabla.rows[2].cells[0].innerHTML = "";
		tabla.rows[2].cells[1].innerHTML = "";
		fila1 = "norma2";
		fila2 = "";
	} else {
		destab.value = "Todas";
		tabla.rows[1].cells[0].innerHTML = "Norma 1";
		tabla.rows[1].cells[1].innerHTML = "Descripción de la norma 1.";
		tabla.rows[2].cells[0].innerHTML = "Norma 2";
		tabla.rows[2].cells[1].innerHTML = "Descripción de la norma 2.";
		fila1 = "norma1";
		fila2 = "norma2";	 
	}
	document.getElementById('text-search').value="";
}

function seleccionarFila(row) 
{
	var tabla = document.getElementById('table-result');
	var normsele = document.getElementById('norm-sele');
	if(row.rowIndex == 1)
	{
		row.style.background = "#005490";
		row.style.color = "white";
		tabla.rows[2].style.background = "white";
		tabla.rows[2].style.color = "black";
		if(fila1 == "norma1")
		{
			normsele.value = "Norma 1";
		} else if(fila1 == "norma2") {
			normsele.value = "Norma 2";
		} else
		{
			normsele.value = "Ninguna";
		}
		llenarSelect(normsele);
		filaSeleccionada = 1;
	}else if(row.rowIndex == 2)
	{
		row.style.background = "#005490";
		row.style.color = "white";
		tabla.rows[1].style.background = "white";
		tabla.rows[1].style.color = "black";
		if(fila2 == "norma1")
		{
			normsele.value = "Norma 1";
		} else if(fila2 == "norma2") {
			normsele.value = "Norma 2";
		} else {
			normsele.value = "Ninguna";
		}
		llenarSelect(normsele);
		filaSeleccionada = 2;
	}
	seleccionar();
}

var ok11 = true;
var ok21 = true;
var ok12 = true;
var ok22 = true;

function llenarSelect(normsele)
{
	var select = document.getElementById('unico-select');
	var op11 = '<option id="11">Reporte 1 de la norma 1</option> ';
	var op21 = '<option id="21">Reporte 2 de la norma 1</option> ';
	var op12 = '<option id="12">Reporte 1 de la norma 2</option> ';
	var op22 = '<option id="22">Reporte 2 de la norma 2</option> ';
	if(normsele.value == "Norma 1")
	{	
		if (op11 && op21)
		{
			select.innerHTML = op11+op21;
		} else if(op11)
		{
			select.innerHTML = op11;
		} else if(op21)
		{
			select.innerHTML = op21;
		} else 
		{
			select.innerHTML = "";
		}
	} else if(normsele.value == "Norma 2")
	{
		if (op12 && op22)
		{
			select.innerHTML = op12+op22;
		} else if(op12)
		{
			select.innerHTML = op12;
		} else if(op22)
		{
			select.innerHTML = op22;
		} else 
		{
			select.innerHTML = "";
		}
	} else {
		select.innerHTML = "";
	}
}

var reporteSeleccionado = "00";

function clickBotonNaranja()
{
	if (reporteSeleccionado == "00")
	{
		document.getElementById('alertR').style.display = "none";
		document.getElementById('alertR').style.display = "block";
	}else if(reporteSeleccionado == "01") {
		document.getElementById('alert').style.display = "none";
		document.getElementById('alert').style.display = "block";
	}

}

function SeleccionarReporte(option)
{
	var select = document.getElementById('unico-select');
	
}

function esconderAlertaR()
{
	document.getElementById('alertR').style.display = "none";
}

function seleccionar()
{
	reporteSeleccionado = "01";
}

function esconderA()
{
	document.getElementById('alert').style.display = "none";
}