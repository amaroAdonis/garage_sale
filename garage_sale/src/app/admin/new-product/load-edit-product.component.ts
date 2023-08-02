import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditProductStrategy } from "./strategies/edit-product-strategy";

@Component({
    selector: 'editproductroute',
    template: `
    <app-new-product></app-new-product>`,
    providers: [
        {provide: ScreenStrategy, useClass: EditProductStrategy}
    ]
})
export class LoadEditProductComponent {}