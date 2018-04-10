console.log("Notes.js required");
const fs = require('fs');
let addNotes = (title, body) =>{
    //console.log(title, body);
    let notes=[];
    let note = {
        title,
        body
    };
    
    try{
        //let readNote = fs.readFileSync('notes.json');
        notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);

    } catch(e){}

    let sameNotes=[];
    notes.forEach(item => {
        if(item.title===title)
        {
            sameNotes.push(item);
        }
    });

    if(sameNotes.length===0){
    notes.push(note);
    fs.writeFileSync('notes.json',JSON.stringify(notes));
    console.log("Note successfully added");
    } else {
        console.log("cannot add, same note exists\n\n");
    }


}

let updateNote = (title, body) =>{
    try {
        let notes = fs.readFileSync('notes.json');
         notes = JSON.parse(notes);

        for(let i=0;i<notes.length;i++){
            if(notes[i].title===title){
                notes[i].body = body;
                console.log(`The body of title \"${notes[i].title}\" was changed to \"${body} \" `);
                fs.writeFileSync('notes.json',JSON.stringify(notes));
                return;
            }
              
        }
        console.log("Sorry, the note was not found");
    } catch(e){
        console.log("Notes database is empty, please create one!!");
    }
    
    
}

let readNote = (title) =>{
    try{
        //let readNote = fs.readFileSync('notes.json');
        let notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);
        let noteFound = notes.filter(item=>{
            return item.title===title;
        });
        if(noteFound.length>0){
            logNote(noteFound[0]);
        }
        else{
            console.log(`Note of title ${title} was not found`);
        }

    } catch(e){
        console.log("No notes database was found");
    }

}


let logNote = (note) => {
    console.log("\n----");
    console.log(`Title is ${note.title}`);
    console.log(`Body is ${note.body}`);
    console.log("---\n");
}

let readAll = () =>{
    try {
        let notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);
        if(notes.length>0){
        notes.forEach(item =>{
            logNote(item);
        });
    }
    else {
        errorNote();
    }
    } catch(e){
        console.log("Notes Not found");
        
    }
}

let removeNote = (title) =>{
    try {
        let notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);
        let newNotes = notes.filter(item=>{return item.title!==title});
        if(newNotes.length<notes.length)
        {
            console.log(`Note of title ${title} was removed`);
            fs.writeFileSync('notes.json',JSON.stringify(newNotes));
        }
        else {
            console.log("Note was not found");
        }
    } catch(e){
        console.log("Notes file was not found");
    }
}


let errorNote = ()=>{
    console.log(`No notes found`);
}

module.exports = {
    addNotes,
    updateNote,
    readNote,
    readAll,
    removeNote
}

