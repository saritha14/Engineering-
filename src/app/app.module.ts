import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatSortModule
    
  ],
  providers: [],

  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule { }
