
$(function(){
	var numQues = 1;
	function selectAsk(){
		selectedVal = $( "#pregunta-tipo option:selected").val();
		switch(selectedVal) {
		    case "opc":
		        $("#contenido-opc").css("display", "block");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "none");
				$("#add-ques-btn").css("display", "initial");
		        break;
		    case "chk":
		        $("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "block");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "none");
				$("#add-ques-btn").css("display", "initial");
		        break;
		    case "num":
		        $("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "block");
				$("#contenido-txt").css("display", "none");
				$("#add-ques-btn").css("display", "initial");
		        break;
		    case "txt":
		        $("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "block");
				$("#add-ques-btn").css("display", "initial");
		        break;
		    case "pic":
		    	$("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "none");
		    	$("#add-ques-btn").css("display", "initial");
		        break;
		    case "fec":
		    	$("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "none");
		    	$("#add-ques-btn").css("display", "initial");
		        break;
		    default:
		    	$("#contenido-opc").css("display", "none");
		        $("#contenido-chk").css("display", "none");
				$("#contenido-num").css("display", "none");
				$("#contenido-txt").css("display", "none");
				$("#add-ques-btn").css("display", "none");
		        break;
		}
	}


	function deleteOption(){
		$(this).closest(".option-wrapper").remove();
	}
	function addCheckBoxOp(){
		var optionChkTemplate = $("#option-template").clone();
		optionChkTemplate.attr("id","");
		optionChkTemplate.css("display","block");
		optionChkTemplate.addClass("ques-chk");
		optionChkTemplate.click(deleteOption);
		txtChk = $("#txt-chk").val();
		if(txtChk){
			optionChkTemplate.children(".option-text").html(txtChk);    				
			$("#txt-chk").before(optionChkTemplate);
			txtChk = $("#txt-chk").val("");
		}
	}

	function addRadioOp(){
		var optionChkTemplate = $("#option-template").clone();
		optionChkTemplate.attr("id","");
		optionChkTemplate.css("display","block");
		optionChkTemplate.addClass("ques-opc");
		optionChkTemplate.click(deleteOption);
		txtChk = $("#txt-opc").val();
		$("#txt-opc").val("");
		if(txtChk){
			optionChkTemplate.children(".option-text").html(txtChk);    				
			$("#txt-opc").before(optionChkTemplate);
			txtChk = $("#txt-opc").val("");
		}
	}

	function hideAlert()
	{
		$("#alerta").css("display", "block");
		$("#alerta").css("display","none");
	}
	function alert()
	{
		console.log("checkpoint1");
		$("#alerta").css("display", "none");
		$("#alerta").css("display", "block");				
	}

	/* handlers */
	$("#alert-close").click(hideAlert);

	$("#pregunta-tipo").change(selectAsk);

	$(".close").click(deleteOption);

	$("#add-chk").click(addCheckBoxOp);

	$("#txt-chk").keypress(function(e) {
	    if(e.which == 13) {
	        addCheckBoxOp();
	    }
	});

	$("#add-opc").click(addRadioOp);

	$("#txt-opc").keypress(function(e) {
	    if(e.which == 13) {
	        addRadioOp();
	    }
	});

	$("#add-ques").click(function(){
		var selectedVal = $( "#pregunta-tipo option:selected").val();
		var quesText = $("#pregunta-norma").val();
		var quesCont = $("#ques-container").clone();
		quesCont.css("display","block");
		quesCont.addClass("ques-container");
		quesCont.children(".close").click(deleteOption);
		quesCont.children(".ques-text").html(quesText);
		switch(selectedVal) {
		    case "opc":
				var options = $(".ques-opc > .option-text").clone();
				for(var i = 0; i < options.length; i++){
					quesCont.append('<div class="radio"><label><input type="radio" name="q'+numQues+'">'+$(options[i]).html()+'</label></div>');
		    	}
		    	$(".ques-opc").remove();
		        break;
		    case "chk":
		    	var options = $(".ques-chk > .option-text").clone();
		    	for(var i = 0; i < options.length; i++){
					quesCont.append('<div class="checkbox"><label><input type="checkbox" name="q'+numQues+'">'+ $(options[i]).html() +'</label></div>');
		    	}
		    	$(".ques-chk").remove();
		        break;
		    case "num":
		    	var max = $("#max-num").val();
		    	var min = $("#min-num").val();
		    	quesCont.append('<input class="form-control" type="number" min="'+min+'" max="'+max+'" style="width:150px;">');
		        break;
		    case "txt":
		    	var max = $("#max-text").val();
		    	quesCont.append('<textarea id="descripcion-norma" cols="70" rows="2" class="form-control" placeholder="Escriba Respuesta" ></textarea>');
		        break;
		    case "pic":
		        quesCont.append('<div class="input-group" style="width:200px;"><input type="text" class="form-control" placeholder="nombre de archivo" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon1"><span id="icon-triangle" class="glyphicon glyphicon-camera"></span></span></div>');
		        break;
		    case "fec":
				quesCont.append('<input type="date" class="form-control" name="dateQues'+numQues+'" style="width:200px;">');
		        break;
		}
		$("#new-ques-container").before(quesCont);
		$("#pregunta-norma").val("");
		numQues++;
	});

	$("#save-norm").click(alert);
});