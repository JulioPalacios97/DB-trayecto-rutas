function putRoute(e){
	let id=$("#up-id").val()
	console.log(id)
	$.post("/rutas/update/"+id,$("#Actualizar").serialize()).done((data)=>{
		alert(data.msg)
	})
	return false;
}

$("#Update").on('click',putRoute);