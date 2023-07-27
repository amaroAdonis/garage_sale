import { NgModule } from "@angular/core";
import { GarageCardComponent } from "./garage-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [GarageCardComponent],
    imports:[CommonModule],
    exports: [GarageCardComponent]
}) export class GarageCardModule{}