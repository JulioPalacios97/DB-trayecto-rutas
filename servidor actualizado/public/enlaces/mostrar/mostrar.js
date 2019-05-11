
	$.get("/rutas/").done((data)=>{
		console.log(data[0]);
		alert(data);
	})	