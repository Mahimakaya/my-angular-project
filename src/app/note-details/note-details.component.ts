import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../noter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  @Input() note?:Note;

  constructor(private noteServic:NotesService,private route:ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    this.getNote();
  }
  getNote():void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.noteServic.getNotes()[id - 1];
  }
  goBack():void{
    this.location.back();
  }
  Save(note:Note,title:string,body:string){
    this.noteServic.updateNote(note,title,body);
    alert("Changes Made!");
    this.location.back();
  }
}
