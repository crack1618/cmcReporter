var user;
function clickSearchButton()
{
	var name = document.getElementById('text-search').value;
	var tableR = document.getElementById('table-result');
	if(name == "chedraui")
	{
		tableR.rows[1].cells[0].innerHTML = "Chedraui S.A.";
		user ="chedraui" 
		tableR.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 60";
		tableR.rows[1].cells[2].innerHTML = "5581721732";
		tableR.rows[1].cells[3].innerHTML = "chedraui@cuestamenos.com";
	}else if(name == "arturo")
	{
		tableR.rows[1].cells[0].innerHTML = "Arturo Vazquez A";
		user ="arturo" 
		tableR.rows[1].cells[1].innerHTML = "Av. Ruiz Cortinez 123";
		tableR.rows[1].cells[2].innerHTML = "2281989898";
		tableR.rows[1].cells[3].innerHTML = "ava@cmc.com";
	}
}

function clickFirstRowTable()
{
	var row = document.getElementById('table-result').rows[1];
	var name = document.getElementById('name');
	var date = document.getElementById('date');
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
	var cpass = document.getElementById('cpass');
	var image = document.getElementById('image');
	if(user == "chedraui")
	{
		name.value = "Chedraui S.A.";
		date.value = "1960-05-05"
		email.value = "chedraui@cuestamenos.com";
		pass.value = "c9K3p8";
		cpass.value = "c9K3p8";

	}else if(user == "arturo")
	{
		name.value = "Arturo Vazquez A";
		date.value = "1980-05-12"
		email.value = "ava@cmc.com";
		pass.value = "1jP23ws";
		cpass.value = "1jP23ws";
		document.getElementById('admin').selected=true;
	}
	user="";
	//alert("'"+row.cells[0].value+"'");
}