function DeleteRoute(e){
	$.post("/rutas/delete/",$( "#Eliminar" ).serialize()).done((data)=>{
		alert(data.msg)
		console.log(data)
	})
	return false;
}


$("#Delete").on('click',DeleteRoute);