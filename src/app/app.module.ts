import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VarDirective } from './var.directive';
import { FolderEntry } from './directory-entry/folder-entry.component';
import { ComboCounterComponent } from './combo-counter/combo-counter.component';
import { RangeEntryComponent } from './directory-entry/range-entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VarDirective,
    FolderEntry,
    ComboCounterComponent,
    RangeEntryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
