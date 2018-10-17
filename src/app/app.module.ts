import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


const appRoutes: Routes =
  [
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: '**', component: AComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
