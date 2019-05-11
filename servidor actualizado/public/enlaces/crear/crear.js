function PostRoute(e){
	$.post("/rutas",$( "#Insertar" ).serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}

function PostCompany(e){  // PUROS FORMS
	$.post("/companias",$( "#InsertcompanyForm" ).serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}

function PostBrand(e){  // PUROS FORMS
	$.post("/modelo",$( "#InsertbrandForm" ).serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}


$("#Insert").on('click',PostRoute);
$("#Insertcompany").on('click',PostCompany);
$("#Insertbrand").on('click',PostBrand);