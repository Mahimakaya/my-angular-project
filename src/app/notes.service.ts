import { Injectable } from '@angular/core';
import { Note } from './noter';
import { FormGroup,FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  note:Note[]=[
    {
      id:1,
      title:"Mahima",
      body:"this is Mahima!"
    },
    {
      id:2,
      title:"Surya",
      body:"this is Surya!"
    }
  ];
  favNote:Note[]=[];
  register:any = FormGroup;
  login:any = FormGroup;
  getRegisteredUsers(){
    return this.register;
  }
  getLoginUser(){
    return this.login;
  }
  getNotes(){
    return this.note;
  }
  getfavNotes(){
    return this.favNote;
  }
  DeleteNote(n:Note):void{
    let id = this.note.indexOf(n);
    let id2 = this.favNote.indexOf(n);
    console.log(id);
    this.note.splice(id,1);
    this.favNote.splice(id2,1);
  }
  addFav(myNote:Note):void{
    this.favNote.push(myNote);
    alert("Note is added to favorites");
  }
  RemoveFav(myNote:Note):void{
    let id = this.favNote.indexOf(myNote);
    console.log(id);
    this.favNote.splice(id,1);
    alert("Note is Remove from favorites");
  }
  updateNote(note:Note,title:string,body:string){
    const id = this.note.indexOf(note);
    this.note[id].title=title;
    this.note[id].body=body;
  }
  constructor() { }
}
