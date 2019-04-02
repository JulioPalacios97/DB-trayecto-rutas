function PostRoute(e){
	$.post("/rutas",$( "#Insertar" ).serialize()).done((data)=>{
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

function putRoute(e){
	let id=$("#up-id").val()
	console.log(id)
	$.post("/rutas/update/"+id,$("#Actualizar").serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}

$("#Insert").on('click',PostRoute);
$("#Delete").on('click',DeleteRoute);
$("#Search").on('click',getRoute);
$("#Update").on('click',putRoute);
