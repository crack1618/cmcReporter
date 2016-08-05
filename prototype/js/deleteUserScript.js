var rowSelected = 0;
var okche = true;
var okart = true;
var row1 = "arturo";
var row2 = "chedraui";
function  clickSearchButton() 
{
	var name = document.getElementById('text-search').value;
	var table = document.getElementById('table-result');
	if (name == "chedraui")
	{
		if (okche)
		{
			table.rows[1].cells[0].innerHTML = "Chedraui S.A.";
			table.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 60";
			table.rows[1].cells[2].innerHTML = "5581721732";
			table.rows[1].cells[3].innerHTML = "chedraui@cuestamenos.com";
			row1 = "chedraui";
		}else
		{
			table.rows[1].cells[0].innerHTML = "";
			table.rows[1].cells[1].innerHTML = "";
			table.rows[1].cells[2].innerHTML = "";
			table.rows[1].cells[3].innerHTML = "";
			row1 = "";
		}
		table.rows[2].cells[0].innerHTML = " ";
		table.rows[2].cells[1].innerHTML = " ";
		table.rows[2].cells[2].innerHTML = " ";
		table.rows[2].cells[3].innerHTML = " ";
		row2 = "";
	}else if (name == "arturo")
	{
		if(okart)
		{
			table.rows[1].cells[0].innerHTML = "Arturo Vazquez A";
			table.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 123";
			table.rows[1].cells[2].innerHTML = "2281989898";
			table.rows[1].cells[3].innerHTML = "ava@cmc.com";
			row1 = "";
		}else
		{
			table.rows[1].cells[0].innerHTML = "";
			table.rows[1].cells[1].innerHTML = "";
			table.rows[1].cells[2].innerHTML = "";
			table.rows[1].cells[3].innerHTML = "";
			row1 = "";
		}
		table.rows[2].cells[0].innerHTML = " ";
		table.rows[2].cells[1].innerHTML = " ";
		table.rows[2].cells[2].innerHTML = " ";
		table.rows[2].cells[3].innerHTML = " ";
		row2 = "";
	}else
	{
		if (okche && okart)
		{
			table.rows[1].cells[0].innerHTML = "Arturo Vazquez A";
			table.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 123";
			table.rows[1].cells[2].innerHTML = "2281989898";
			table.rows[1].cells[3].innerHTML = "ava@cmc.com";
			table.rows[2].cells[0].innerHTML = "Chedraui S.A.";
			table.rows[2].cells[1].innerHTML = "Av. Ruiz Cortinez 60";
			table.rows[2].cells[2].innerHTML = "5581721732";
			table.rows[2].cells[3].innerHTML = "chedraui@cuestamenos.com";
			row1 = "arturo";
			row2 = "chedraui";
		}else if(okche)
		{
			table.rows[1].cells[0].innerHTML = "Chedraui S.A.";
			table.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 60";
			table.rows[1].cells[2].innerHTML = "5581721732";
			table.rows[1].cells[3].innerHTML = "chedraui@cuestamenos.com";
			table.rows[2].cells[0].innerHTML = " ";
			table.rows[2].cells[1].innerHTML = " ";
			table.rows[2].cells[2].innerHTML = " ";
			table.rows[2].cells[3].innerHTML = " ";
			row1 = "chedraui";
			row2 = "";
		}else if(okart)
		{
			table.rows[1].cells[0].innerHTML = "Arturo Vazquez A";
			table.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 123";
			table.rows[1].cells[2].innerHTML = "2281989898";
			table.rows[1].cells[3].innerHTML = "ava@cmc.com";
			table.rows[2].cells[0].innerHTML = " ";
			table.rows[2].cells[1].innerHTML = " ";
			table.rows[2].cells[2].innerHTML = " ";
			table.rows[2].cells[3].innerHTML = " ";
			row1 = "arturo";
			row2 = "";
		}else
		{
			table.rows[1].cells[0].innerHTML = "";
			table.rows[1].cells[1].innerHTML = "";
			table.rows[1].cells[2].innerHTML = "";
			table.rows[1].cells[3].innerHTML = "";
			table.rows[2].cells[0].innerHTML = " ";
			table.rows[2].cells[1].innerHTML = " ";
			table.rows[2].cells[2].innerHTML = " ";
			table.rows[2].cells[3].innerHTML = " ";
			row1 = "";
			row2 = "";
		}
	}
	table.rows[1].style.background = "#7db9e8";
	table.rows[2].style.background = "#7db9e8";
	rowSelected = 0;
	document.getElementById('text-search').value = "";
}

function selectRow(row)
{
	var table = document.getElementById('table-result');
	if(row.rowIndex == 1)
	{
		row.style.background = "white";
		table.rows[2].style.background = "#7db9e8";
		rowSelected = 1;
	}else
	{
		row.style.background = "white";
		table.rows[1].style.background = "#7db9e8";
		rowSelected = 2;
	}
}

function clickDeleteButton()
{
	if(rowSelected == 0)
	{
		alert("Seleccione un usuario en la tabla");
	}else if(rowSelected == 1)
	{
		if(row1 == "arturo")
		{
			okart = false;
		} else if(row1 == "chedraui")
		{
			okche = false;
		}
		clickSearchButton();
	}else if(rowSelected == 2)
	{
		if(row2 == "arturo")
		{
			okart = false;
		} else if(row2 == "chedraui")
		{
			okche = false;
		}
		clickSearchButton();
	}
}