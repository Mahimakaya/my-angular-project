import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './noter';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  note: Note[];
  favNote: Note[];
  checkNote: Note[];
  href: any = '';

  constructor(private noteService: NotesService, private router: Router, private location: Location) { }

  Search(term: string):any {
    if(!this.note){
      return [];
    }
    if(!term.trim()){
      return [];
    }
    term = term.toLocaleLowerCase();
    this.checkNote = this.note.filter(ans =>{
      return ans.title.toLocaleLowerCase().includes(term);
    });
  }
  ngOnInit(): void {
    this.note = this.noteService.getNotes();
    this.favNote = this.noteService.getfavNotes();
  }
}
