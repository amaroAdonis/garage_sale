import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';
import { Garage } from 'src/app/types/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-garage',
  templateUrl: './new-garage.component.html',
  styleUrls: ['./new-garage.component.scss']
})
export class NewGarageComponent implements OnInit {

  public title?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private screenStrategy: ScreenStrategy){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id") ?? undefined;
    this.screenStrategy.loadGarage(id).then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }

  private populateForm(garage: Garage): void {
    this.form.patchValue(garage);
  }

  public form: FormGroup = new FormGroup ({
    id: new FormControl(null),
    user_id: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [Validators.required]),
    profile_image: new FormControl(null, [Validators.required]),
    background_image: new FormControl(null, [Validators.required]),
  })

  submit():void {
    this.screenStrategy.saveGarage(this.form.value)
    this.alert();
  }
  public alert():void {
    window.alert("Garagem criada com sucesso!")
  }


}
