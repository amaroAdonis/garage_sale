import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewProductStrategy } from "./strategies/new-product-strategy";

@Component({
    selector: 'newproductroute',
    template: `
    <app-new-product></app-new-product>`,
    providers:[
        {provide: ScreenStrategy, useClass: NewProductStrategy}
    ]
})
export class LoadNewProductComponent{}