import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../noter';
import { NotesService } from '../notes.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noter',
  templateUrl: './noter.component.html',
  styleUrls: ['./noter.component.css']
})

export class NoterComponent implements OnInit {
  note:Note[];
  favNote:Note[];

  constructor(private noteService:NotesService) {
     this.note = noteService.getNotes();
     this.favNote=noteService.getfavNotes();
   }

  ngOnInit(): void {
  }
  NoteDown(title:string,body:string){
    const id = this.note.length + 1;
    if(title && body){
    this.note.push({id,title,body});
    alert("Successfully added notes");

    }
    else{
      alert("Enter Notes");
    }

  }
  DeleteNote(myNote:Note){
    this.noteService.DeleteNote(myNote);
  }
  addFav(myNote:Note){
    this.noteService.addFav(myNote);
  }
  RemoveFav(myNote:Note):void{
    this.noteService.RemoveFav(myNote);
  }
}
