import { Component, OnInit } from '@angular/core';
import { Note } from '../noter';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {
  note:Note[];
  favNote:Note[];
  constructor(private noteService:NotesService,private route:ActivatedRoute,private location:Location) { 
  }

  ngOnInit(): void {
    this.getNotes();
    this.getfavNotes();
  }

  getNotes(){
    this.note = this.noteService.getNotes();
  }
  getfavNotes(){
    this.favNote = this.noteService.getfavNotes();
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
