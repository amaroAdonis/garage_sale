import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AdminComponent
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        HttpClientModule
    ]
})
export class AdminModule {}