import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmailFormComponent } from './email-form/email-form.component';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoworkerService} from "./component/services/coworker.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule, MatNativeDateModule} from "@angular/material";
import {CustomizedDatepicker} from "./common/customized-datepicker";




@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    CustomizedDatepicker
  ],
  entryComponents: [CustomizedDatepicker],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [CoworkerService,HttpClient],
  bootstrap: [AppComponent, CustomizedDatepicker],
  exports: [MatDatepickerModule, MatNativeDateModule]

})
export class AppModule { }
