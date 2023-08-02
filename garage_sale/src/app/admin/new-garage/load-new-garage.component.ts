import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { NewGarageStrategy } from "./strategies/new-garage-strategy";

@Component({
    selector: 'newgarageroute',
    template: `
    <app-new-garage></app-new-garage>`,
    providers: [
        {provide: ScreenStrategy, useClass: NewGarageStrategy}
    ]
})
export class LoadNewGarageComponent {}