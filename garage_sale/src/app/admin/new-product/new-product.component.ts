import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';
import { Product } from 'src/app/types/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  
})
export class NewProductComponent implements OnInit {

  title?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private screenStrategy: ScreenStrategy) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id") ?? undefined;
    this.screenStrategy.loadProduct(id)
    .then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }

  private populateForm(product: Product): void {
    this.form.patchValue(product);
  }

  public form: FormGroup = new FormGroup ({
    id: new FormControl(null),
    garage_id: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    image1: new FormControl(null, [Validators.required]),
    image2: new FormControl(null, [Validators.required]),
    image3: new FormControl(null, [Validators.required]),
    image4: new FormControl(null, [Validators.required]),
    delivery: new FormControl(null, [Validators.required]),
    noDelivery: new FormControl(null, [Validators.required]),
    newOne: new FormControl(null, [Validators.required]),
    used: new FormControl(null, [Validators.required]),
    fiscal: new FormControl(null, [Validators.required]), 
    
  })

  submit():void {
    this.screenStrategy.saveProduct(this.form.value)
  }

}
