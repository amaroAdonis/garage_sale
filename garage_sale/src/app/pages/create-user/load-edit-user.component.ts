import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { EditUserStrategy } from "./strategies/edit-user-strategy";

@Component({
    selector: "edituserroute",
    template: `
    <app-create-user/>`,
    providers: [
        {provide: ScreenStrategy, useClass: EditUserStrategy}
    ]
})
export class LoadEditUserComponent{}