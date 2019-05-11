
function change(panel){
	switch(panel){
		case 1:
		$("#routeSection").removeClass("active")
		$("#brandSection").removeClass("active")
		$("#companySection").addClass("active")

		$("#tab-link1").addClass("active")
		$("#tab-link2").removeClass("active")
		$("#tab-link3").removeClass("active")

		//companySection
		break;
		case 2:

		//routeSection
		$("#companySection").removeClass("active")
		$("#brandSection").removeClass("active")
		$("#routeSection").addClass("active")

		$("#tab-link1").removeClass("active")
		$("#tab-link2").addClass("active")
		$("#tab-link3").removeClass("active")

		

		break;

		case 3:
		$("#companySection").removeClass("active")
		$("#routeSection").removeClass("active")
		$("#brandSection").addClass("active")

		$("#tab-link1").removeClass("active")
		$("#tab-link2").removeClass("active")
		$("#tab-link3").addClass("active")

		//brandSection
		break;
	}
}