//This is where the professor's data is
let profData = [
	{
		"Name": "Dhanyu Eshaka Amarasinghe",
		"Faculty Role": "Part Time Faculty",
		"Desk Phone Number": "559-278-3026",
		"Department Phone Number": "559-278-4373",
		"Email Address": "dhanyu@csufresno.edu",
		"Office Location": "Science II 249",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/dhanyu_amarasinghe.png"
	},
	{
		"Name": "Dr. Brent Auernheimer",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-2573",
		"Department Phone Number": "559-278-4373",
		"Email Address": "brent_auernheimer@csufresno.edu",
		"Office Location": "Science II 280",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/icons/auernheimer.jpg"
	},
	{
		"Name": "Santanu Banerjee",
		"Faculty Role": "Part Time Faculty",
		"Desk Phone Number": "559-278-3026",
		"Department Phone Number": "559-278-4373",
		"Email Address": "santanub@csufresno.edu",
		"Office Location": "Science II 249",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/icons/unnamed.jpg"
	},
	{
		"Name": "Amith Kamath Belman",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-7074",
		"Department Phone Number": "559-278-4373",
		"Email Address": "akamathbelman@mail.fresnostate.edu",
		"Office Location": "Science II 253",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/hubert_cecotti.jpg"
	},
	{
		"Name": "Hubert Cecotti",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-2905",
		"Department Phone Number": "559-278-4373",
		"Email Address": "hcecotti@csufresno.edu",
		"Office Location": "Science II 263",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/hubert_cecotti.jpg"
	},
	{
		"Name": "Lisa Dennis",
		"Faculty Role": "Staff / Administrative Asstant",
		"Desk Phone Number": "559-278-4156",
		"Department Phone Number": "559-278-4373",
		"Email Address": "ldennis@csufresno.edu",
		"Office Location": "Science II 255",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "N/A"
	},
	{
		"Name": "William Kerney",
		"Faculty Role": "Part Time Faculty",
		"Desk Phone Number": "559-278-4373",
		"Department Phone Number": "559-278-4373",
		"Email Address": "wkerney@mail.fresnostate.edu",
		"Office Location": "Science II 255",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "N/A"
	},
	{
		"Name": "Dr. Ming Li",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-4792",
		"Department Phone Number": "559-278-4373",
		"Email Address": "mingli@csufresno.edu",
		"Office Location": "Science II 272",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/ming.jpg"
	},
	{
		"Name": "Alex Liu",
		"Faculty Role": "Faculty / Chair",
		"Desk Phone Number": "559-278-4789",
		"Department Phone Number": "559-278-4373",
		"Email Address": "shliu@csufresno.edu",
		"Office Location": "Science II 271",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/liu2.jpg"
	},
	{
		"Name": "Athanasios Aris (Thanos) Panagopoulos",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-5152",
		"Department Phone Number": "559-278-4373",
		"Email Address": "apanagopoulos@csufresno.edu",
		"Office Location": "Science II 248",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/Thanos%20Pic.jpg"
	},
	{
		"Name": "Jin Park",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-4307",
		"Department Phone Number": "559-278-4373",
		"Email Address": "jpark@csufresno.edu",
		"Office Location": "Science II 277",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/Jin-Park-photo.jpg"
	},
	{
		"Name": "Matin Pirouz Nia",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-5142",
		"Department Phone Number": "559-278-4373",
		"Email Address": "mpirouz@csufresno.edu",
		"Office Location": "Science II 246",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/Matin%20Pirouz%20Nia_Web800.jpg"
	},
	{
		"Name": "David Ruby",
		"Faculty Role": "Part Time Faculty",
		"Desk Phone Number": "559-278-4312",
		"Department Phone Number": "559-278-4373",
		"Email Address": "druby@csufresno.edu",
		"Office Location": "Science II 273",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/DRuby.jpg"
	},
	{
		"Name": "Todd Wilson",
		"Faculty Role": "Faculty",
		"Desk Phone Number": "559-278-9138",
		"Department Phone Number": "559-278-4373",
		"Email Address": "twilson@csufresno.edu",
		"Office Location": "Science II 250",
		"Department": "Computer Science Department",
		"Mail Stop": "ST109",
		"Image": "https://csm.fresnostate.edu/csci/images/facstaff/todd.jpg"
	},
	{
		"Name": "Max J Tsai",
		"Faculty Role": "Part Time Faculty / Interim Director of Digital Transformation",
		"Desk Phone Number": "559-278-4180",
		"Department Phone Number": "559-278-4180",
		"Email Address": "janq@csufresno.edu",
		"Office Location": "IT 300",
		"Department": "Computer Science Department",
		"Mail Stop": "N/A",
		"Image": "N/A"
	}
];

//Creating Arrays to hold all the data
let nameProfArr = [];
let roles = [];
let deskPhone = [];
let departmentPhone = [];
let emailAdd = [];
let officeLoc = [];
let department = [];
let mailStop = [];
let csciProfImages = [];

// This will push all the data in the array into it's respective array above
for(let i = 0; i < profData.length; i++){
	nameProfArr.push(profData[i]["Name"]);
	roles.push(profData[i]["Faculty Role"]);
	deskPhone.push(profData[i]["Desk Phone Number"]);
	departmentPhone.push(profData[i]["Department Phone Number"]);
    emailAdd.push(profData[i]["Email Address"]);
	officeLoc.push(profData[i]["Office Location"]);
	department.push(profData[i]["Department"]);
	mailStop.push(profData[i]["Mail Stop"]);
	csciProfImages.push(profData[i]["Image"]);
};

// This will display the data for all professors
// function showProfData(){
// 	let docBod = document.getElementById("ProfessorContainer");
// 	let newTable= document.createElement('TABLE');
// 	let newTableBod = document.createElement('TBODY');
// 	docBod.appendChild(newTable);
// 	newTable.appendChild(newTableBod);

//     for(let i = 0; i < profData.length; i++){
// 		let tr = document.createElement('TR');
// 		newTableBod.appendChild(tr);
// 		for(let j = 0; j < 4 && i < profData.length; j++, i++){
// 			if(profData[i]["Name"] == ""){
// 			}
// 			else{
// 				let profInfo = createProfTd(nameProfArr[i], roles[i], deskPhone[i], 
//                                          departmentPhone[i], emailAdd[i], officeLoc[i], 
//                                          department[i], mailStop[i], csciProfImages[i]);
// 				tr.appendChild(profInfo);
// 			}
// 			if(j == 3)
// 				i--;
//         }
        
//     }
// }

// This is for create professor tages
// function createProfTd(name, role, desk, departP, em, officeL, dep, mail){
// 	// Tags the profDataList with the ID element of 'TD' for reference
// 	let profDataList = document.createElement('TD')

// 	let profName = document.createElement('H2');
// 	profName.appendChild(document.createTextNode(name));

// 	// All of this below follows the element of 'P'
// 	let roleName = document.createElement('P');
// 	roleName.appendChild(document.createTextNode(role));

//     let deskP = document.createElement('P');
// 	deskP.appendChild(document.createTextNode(desk));

//     let departPh = document.createElement('P');
// 	departPh.appendChild(document.createTextNode(departP));

//     let email = document.createElement('P');
// 	email.appendChild(document.createTextNode(em));
    
//     let office = document.createElement('P');
// 	office.appendChild(document.createTextNode(officeL));

//     let depar = document.createElement('P');
// 	depar.appendChild(document.createTextNode(dep));

//     let mailS = document.createElement('P');
// 	mailS.appendChild(document.createTextNode(mail));

// 	let csciProfImages = document.createElement('P');
// 	mailS.appendChild(document.createTextNode(mail));

// 	// This will append the child of all these nodes 
// 	profDataList.appendChild(profName);
// 	profDataList.appendChild(roleName);
// 	profDataList.appendChild(deskP);
// 	profDataList.appendChild(departPh);
//     profDataList.appendChild(email);
//     profDataList.appendChild(office);
//     profDataList.appendChild(depar);
//     profDataList.appendChild(mailS);
// 	profDataList.appendChild(csciProfImages);
// 	return profDataList;
// }


// function getProfData(){	//Get all professor data
// 	return profData;
// }

//Return a single instance of the professor
function getProfName(index){
	return nameProfArr[index];
}
function getProfRole(index){
	return roles[index];
}
function getProfDeskPhone(index){
	return deskPhone[index];
}
function getProfDepartMentPhone(index){
	return departmentPhone[index];
}
function getProfEmail(index){
	return emailAdd[index];
}
function getProfOfficeLoc(index){
	return officeLoc[index];
}
function getProfDepartment(index){
	return department[index];
}
function getProfMailStop(index){
	return mailStop[index];
}
function getCsciProfImages(index){
	return csciProfImages[index];
}


//Return all info on a professor
function getAllDataOfOneProf(index){
	let singleProfData = [getProfName(index), getProfRole(index), getProfDeskPhone(index), getProfDepartMentPhone(index),
						  getProfEmail(index), getProfOfficeLoc(index), getProfDepartment(index), getProfMailStop(index),
						  getCsciProfImages(index)]
	return singleProfData;
}