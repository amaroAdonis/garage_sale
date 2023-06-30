import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public constructor (){}

  public form: FormGroup = new FormGroup({
    email: new FormControl (null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  public login():void {}
}
