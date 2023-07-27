import { Component } from "@angular/core";


@Component({
    selector: "header-template",
    templateUrl: "./header-template.component.html",
    styleUrls: ["./header-template-styling.scss"]
})
export class HeaderTemplateComponent {

    public menuActive:boolean = false;

    constructor(){}


    clickMenu() {

        this.menuActive = true;

        
    }

}