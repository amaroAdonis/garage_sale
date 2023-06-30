import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        NgbCarouselModule
    ]
})
export class HomeModule{ }