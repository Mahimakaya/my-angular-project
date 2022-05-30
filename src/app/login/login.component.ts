import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser:any=FormGroup;
  constructor(private formBuild:FormBuilder) { }
  ngOnInit(): void {
    this.loginUser=this.formBuild.group({
      email:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required]
    })
  }
  login(data:any){
    console.log(data);
  }
}
