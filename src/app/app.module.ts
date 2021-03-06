import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { FeatureComponent } from "./featured/feature.component";
import { SupermanComponent } from "./superman/superman.component";
import { SuperwomanComponent } from "./superwoman/superwoman.component";
import { TwitterComponent } from "./featured/twitter/twitter.component";
import {RatingComponent} from "./featured/twitter/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    SupermanComponent,
    SuperwomanComponent,
    TwitterComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
