import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NoterComponent } from './noter/noter.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { FavNotesComponent } from './fav-notes/fav-notes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';

const route:Routes=[
  {path:'',redirectTo:'/noter',pathMatch:'full'},
  {path:'noter',component:NoterComponent},
  {path:'myNotes',component:MyNotesComponent},
  {path:'favNotes',component:FavNotesComponent},
  {path:'noteDetails/:id',component:NoteDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'welcome',component:SearchComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
