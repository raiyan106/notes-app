console.log("Starting the notes app");

//Loading the Notes Module
const notes = require('./notes.js');

//Taking argumuments from the terminal
const yargs = require('yargs');
const args = yargs.argv
const operation = args._[0]; //specifying the Note Operation
let TITLE = args.title;
let BODY = args.body;

if(operation==='add')
{
    //console.log(`Adding notes with title ${args.title}`)
    notes.addNotes(TITLE, BODY);

} else if(operation==='update') {
    notes.updateNote(TITLE, BODY);
}

else if(operation==='read') {
    notes.readNote(TITLE);
}

else if(operation==='readAll'){
    notes.readAll();
}
 else if(operation=='remove'){
    //console.log(`Removing note with title ${args.title}`)
    notes.removeNote(TITLE);
} else
{
    console.log(`Invalid Operation`);
}