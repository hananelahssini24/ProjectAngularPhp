import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {AgGridModule} from "ag-grid-angular";
import 'ag-grid-enterprise';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductformComponent } from './Components/productform/productform.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductformComponent,
    ProductdetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    SweetAlert2Module,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
