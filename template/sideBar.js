//Left side bar
function openSideNav(){
	document.getElementById("sideBar").style.width = "400px";	//These are basically moving the sidebars into the page
	document.getElementById("ClassContainer").style.marginLeft  = "400px";
	document.getElementById("ProfessorContainer").style.marginLeft  = "400px";
	document.getElementById("sideBarClickMe").style.marginLeft  = "400px";
	document.getElementById("sideBarClickMeTwo").style.marginLeft = "400px";
}

function closeSideBar(){
	document.getElementById("sideBar").style.width = "0";	  //These will move the sidebars outside the page
	document.getElementById("ClassContainer").style.marginLeft  = "0";
	document.getElementById("ProfessorContainer").style.marginLeft  = "0";
	document.getElementById("sideBarClickMe").style.marginLeft  = "0";
	document.getElementById("sideBarClickMeTwo").style.marginLeft = "0";
}

//Right side bar
function openSideNavTwo(){
	document.getElementById("sideBarTwo").style.width = "400px";
	document.getElementById("ClassContainer").style.marginRight  = "400px";
	document.getElementById("ProfessorContainer").style.marginRight  = "400px";
	document.getElementById("sideBarClickMe").style.marginRight  = "400px";
	document.getElementById("sideBarClickMeTwo").style.marginRight = "400px";
}

function closeSideBarTwo(){
	document.getElementById("sideBarTwo").style.width = "0";
	document.getElementById("ClassContainer").style.marginRight  = "0";
	document.getElementById("ProfessorContainer").style.marginRight  = "0";
	document.getElementById("sideBarClickMe").style.marginRight  = "0";
	document.getElementById("sideBarClickMeTwo").style.marginRight = "0";
}

