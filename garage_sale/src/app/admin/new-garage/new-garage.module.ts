import { NgModule } from "@angular/core";
import { NewGarageComponent } from "./new-garage.component";
import { CommonModule } from "@angular/common";
import { NewGarageRoutingModule } from "./new-garage-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { LoadNewGarageComponent } from "./load-new-garage.component";
import { LoadEditGarageComponent } from "./load-edit-garage.component";
import { NewGarageRootComponent } from "./new-garage-root.component";

@NgModule({
    declarations: [NewGarageRootComponent,NewGarageComponent, LoadNewGarageComponent, LoadEditGarageComponent],
    imports: [
        CommonModule,
        NewGarageRoutingModule,
        HttpClientModule
    ]
})
export class NewGarageModule {}