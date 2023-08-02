import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public title?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private screenStrategy: ScreenStrategy) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id") ?? undefined;
    this.screenStrategy.loadUser(id)
    .then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }

  private populateForm(user: User): void {
    this.form.patchValue(user);
  }

  public refresh(): void {
    window.location.reload();
  }

  public form: FormGroup = new FormGroup ({
    id: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    uf: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  public alert(): void {
    window.alert("Usuário criado com sucesso!")
  }

  public Submit():void {
    this.screenStrategy.saveUser(this.form.value)
    this.alert();
  }





  



}
