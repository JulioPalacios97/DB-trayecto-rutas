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


$("#Search").on('click',getRoute);
$("#Searchcompany").on('click',getCompany);
$("#Searchbrand").on('click',getBrand);