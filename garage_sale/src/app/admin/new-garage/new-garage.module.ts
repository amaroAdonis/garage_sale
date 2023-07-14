import { NgModule } from "@angular/core";
import { NewGarageComponent } from "./new-garage.component";
import { CommonModule } from "@angular/common";
import { NewGarageRoutingModule } from "./new-garage-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [NewGarageComponent],
    imports: [
        CommonModule,
        NewGarageRoutingModule,
        HttpClientModule
    ]
})
export class NewGarageModule {}