import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUsers:any = FormGroup;
  constructor(private formGroup:FormBuilder) { }

  ngOnInit(): void {
    this.registerUsers = this.formGroup.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })
  }
  register(data:any){
    console.log(data);
  }
}
