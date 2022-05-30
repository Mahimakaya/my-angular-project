import { Component, OnInit } from '@angular/core';
import { Note } from '../noter';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fav-notes',
  templateUrl: './fav-notes.component.html',
  styleUrls: ['./fav-notes.component.css']
})
export class FavNotesComponent implements OnInit {
  favNote:Note[];
  constructor(private noteService:NotesService,private route:ActivatedRoute,private location:Location) { }
  getfavNotes(){
    this.favNote = this.noteService.getfavNotes();
  }
  addFav(myNote:Note){
    this.noteService.addFav(myNote);
  }
  RemoveFav(myNote:Note):void{
    this.noteService.RemoveFav(myNote);
  }
  ngOnInit(): void {
    this.favNote = this.noteService.getfavNotes();
  }
}
