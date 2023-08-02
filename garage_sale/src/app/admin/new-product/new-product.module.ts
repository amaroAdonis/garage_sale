import { NgModule } from "@angular/core";
import { NewProductComponent } from "./new-product.component";
import { CommonModule } from "@angular/common";
import { NewProductRoutingModule } from "./new-product-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadNewProductComponent } from "./load-new-product.component";
import { LoadEditProductComponent } from "./load-edit-product.component";
import { NewProductRootComponent } from "./new-product-root.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [NewProductComponent, LoadNewProductComponent, LoadEditProductComponent, NewProductRootComponent],
    imports: [
        CommonModule,
        NewProductRoutingModule,
        NgbDropdownModule,
        HttpClientModule,
        ReactiveFormsModule

    
    ],
    exports:[NewProductComponent]
})
export class NewProductModule {}