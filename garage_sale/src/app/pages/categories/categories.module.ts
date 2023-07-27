import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./categories.component";
import { CommonModule } from "@angular/common";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports:[
        CommonModule,
        CategoriesRoutingModule,
        HttpClientModule
    ]
})
export class CategoriesModule {}