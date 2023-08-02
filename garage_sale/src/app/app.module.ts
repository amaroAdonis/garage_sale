import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderTemplateModule } from './components/header-template/header-template.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderTemplateModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
