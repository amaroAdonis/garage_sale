import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:"", component:ProductsComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}