import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        HttpClientModule
    ]

})
export class DashboardModule {}