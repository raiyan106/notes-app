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
    } else {
        console.log("cannot add, same note exists\n\n");
    }


}

let updateNote = (title, body) =>{
    try {
        let notes = fs.readFileSync('notes.json');
         notes = JSON.parse(notes);
    /*notes.forEach(item=>{
        if(item.title===title){
            item.body = body;
            console.log(`The body of title \"${item.title}\" was changed to \"${body} \" `);
            //notes.push(note);
            fs.writeFileSync('notes.json',JSON.stringify(notes));
            return;
        }*/
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
        })

    } catch(e){}

}

let removeNote = (title) =>{
    console.log(`Removing Note ${title}`);
}

module.exports = {
    addNotes,
    updateNote,
    //readNote,
    //getAllNotes,
    removeNote
}

