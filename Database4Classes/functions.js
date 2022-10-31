alert(data[0]["rows"][3][4]); //data[everything]["rows"][index][data on class]

// This will be for gathering the names from the data file
function getName(index){
    let bod = document.getElementById("container"); // Grabs body container from index.html
    let h1 = document.createElement("h1"); // Creates an h1 document
    let name = document.createTextNode(data[0]["rows"][index][0]); // Allows us to create text =)
    h1.appendChild(name); // Holds the name
    bod.appendChild(h1); // Holds h1
    return data[0]["rows"][index][0];
}
getName(0);

// Gathers units from data file
function getUnits(index){
    return data[0]["rows"][index][1];
}

// Gathers the semester they are usually offered in
function getOfferedIn(index){
    return data[0]["rows"][index][2];
}

// Gathers any additional information related to the course
function getAdditionalInfo(index){
    return data[0]["rows"][index][3];
}

// Gathers the description of the class
function getDescription(index){
    return data[0]["rows"][index][4];
}