import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';
import { EditComponent } from './components/edit.component';
import { RealtorComponent } from './components/realtor.component';

import { DialogContent } from './components/list.component';

let myRouters: Routes = [
  {path: '', component: ListComponent},
  {path: 'building/:id', component: EditComponent},
  {path: 'new_building', component: EditComponent},
  {path: 'realtor/:id' ,component: RealtorComponent},
  {path: 'new_realtor', component: RealtorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    RealtorComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(myRouters)
  ],
  providers: [],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
