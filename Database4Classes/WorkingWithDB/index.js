const { userInfo } = require('os');

// This will be for import sqlite module
var sqlite3 = require('sqlite3').verbose();

// This will store the database in the following file and allow for access to database
const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err)=> {
    if (err) return console.error(err.message);

    console.log("connection successfull");
});


const users = ["Sara", "Mike", "James", "David", "Emily"];


// The following is how to INSERT into a database
function insertData(){
    // This will use the function 'prepare' to insert values into the table
    // The sql code follows INSERT INTO TABLENAME VALUES (_,_)
    var insertQuery = db.prepare("INSERT INTO mytable VALUES (?,?)");

    // Loops through to insert the users into the database
    for (var i = 0; i < users.length; i++)
    {
        insertQuery.run(i, users[i]);
        console.log("Data inserted successfully...");
    }
    // This will finalize the data insertion
    insertQuery.finalize();
}

// This function will grab data from an sqlite database
function accessData(){
    db.each("SELECT * FROM mytable", function(err, row) {
        // This will catch any errors related to accessing databases
        if(err) return console.log(err.message);
        // This will display all id's and names of the row
        console.log(row.id + ": " + row.name);
    });
}

// This function will delete rows from a database
function deleteData(name){
    db.run("DELETE FROM mytable WHERE name=?",name , err =>{
        if (err) return console.log(err.message); // This catches errors related to deleting rows

        console.log(`${name} deleted successfully...`);
    })
}


// The following has information on how to create a database
// This will create the database with the following elements of id and name
db.serialize(function(){
    db.run("CREATE TABLE mytable (id, name)");

    insertData();
    accessData();
    deleteData("James");
});

// Anytime a "run" is called for a database for changes, it must be closed right after
db.close( (err)=> {
    if (err) return console.error(err.message);
});