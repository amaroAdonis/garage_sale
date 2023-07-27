import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router ) {}
  ngOnInit(): void {}

  
  public Submit():void {}

  public refresh(): void {
    window.location.reload();
  }

  public form: FormGroup = new FormGroup ({
    name: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })



}
