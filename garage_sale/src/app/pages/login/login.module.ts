import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports:[
        CommonModule,
        LoginRoutingModule,
        HttpClientModule
    ]
})
export class LoginModule {}