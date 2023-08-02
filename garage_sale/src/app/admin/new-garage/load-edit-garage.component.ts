import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditGarageStrategy } from "./strategies/edit-garage-strategy";

@Component({
    selector: 'editgarageroute',
    template: `<app-new-garage></app-new-garage>`,
    providers:[{provide: ScreenStrategy, useClass: EditGarageStrategy}]
})
export class LoadEditGarageComponent {}