import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewGarageComponent } from './new-garage/new-garage.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        NewGarageComponent,
        NewProductComponent
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        HttpClientModule
    ]
})
export class AdminModule {}