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
function DeleteRoute(e){
	$.post("/rutas/delete/",$( "#Eliminar" ).serialize()).done((data)=>{
		alert(data.msg)
		console.log(data)
	})
	return false;
}

function getRoute(e){
	let id=$("#up-id").val()
	console.log(id)
	$.get("/rutas/"+id).done((data)=>{
		$("#id1").val(data[0].route_name)
		$("#id2").val(data[0].origin)
		$("#id3").val(data[0].destination)
	})
	return false;
}

function getCompany(e){
	let id=$("#up-id").val()
	console.log(id)
	$.get("/companias/"+id).done((data)=>{
		$("#id4").val(data[0].company_name)
		$("#id5").val(data[0].address)
		$("#id6").val(data[0].telephone)
	})
	return false;
}

function getBrand(e){
	let id=$("#up-id").val()
	console.log(id)
	$.get("/modelo/"+id).done((data)=>{
		$("#id7").val(data[0].company_name)
		$("#id8").val(data[0].address)
		$("#id9").val(data[0].telephone)
	})
	return false;
}


function putRoute(e){
	let id=$("#up-id").val()
	console.log(id)
	$.post("/rutas/update/"+id,$("#Actualizar").serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}
// PUROS BOTONES
$("#Insert").on('click',PostRoute);
$("#Insertcompany").on('click',PostCompany);
$("#Insertbrand").on('click',PostBrand);

$("#Delete").on('click',DeleteRoute);

$("#Search").on('click',getRoute);
$("#Searchcompany").on('click',getCompany);
$("#Searchbrand").on('click',getBrand);

$("#Update").on('click',putRoute);
