function createHTML(elem){
	return `
	<tr>
		<td>`+elem.idroute+`</td>
		<td>`+elem.route_name+`</td>
		<td>`+elem.origin+`</td>
		<td>`+elem.destination+`</td>
	</tr>`
}

function createHTML2(elem){
	return `
	<tr>
		<td>`+elem.idcompany+`</td>
		<td>`+elem.company_name+`</td>
		<td>`+elem.address+`</td>
		<td>`+elem.telephone+`</td>
	</tr>`
}

function createHTML3(elem){
	return `
	<tr>
		<td>`+elem.idunit+`</td>
		<td>`+elem.license_plate+`</td>
		<td>`+elem.brand+`</td>
		<td>`+elem.model+`</td>
	</tr>`
}

$.get("/rutas/").done((data)=>{
	console.log(data);
	$.each(data,(index,value)=>{
		$("#rutasTable").append(createHTML(value))
	})
})	
$.get("/companias/").done((data)=>{
	console.log(data);
	$.each(data,(index,value)=>{
		$("#companiasTable").append(createHTML2(value))
	})
})	

$.get("/modelo/").done((data)=>{
	console.log(data);
	$.each(data,(index,value)=>{
		$("#marcasTable").append(createHTML3(value))
	})
})	