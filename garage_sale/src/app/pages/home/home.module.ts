import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "src/app/components/carousel/carousel.module";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        NgbCarouselModule,
        CarouselModule
    ]
})
export class HomeModule{ }