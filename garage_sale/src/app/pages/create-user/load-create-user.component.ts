import { Component } from "@angular/core";
import { ScreenStrategy } from "./strategies/screen-strategy";
import { CreateUserStrategy } from "./strategies/create-user-strategy";

@Component({
    selector: 'createuserroute',
    template: `
    <app-create-user/>`,
    providers: [
        {provide: ScreenStrategy, useClass: CreateUserStrategy}
    ]
})
export class LoadCreateUserComponent{}