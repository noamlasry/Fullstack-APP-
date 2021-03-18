import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    DeleteItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
