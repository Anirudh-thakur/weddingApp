import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDocumentComponent } from './component/add-document/add-document.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FrontPageComponent } from './component/front-page/front-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'add-document', component: AddDocumentComponent },
  { path: 'add-event-details', component: EventDetailsComponent },
  { path: 'upload-images', component: GallaryComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AddDocumentComponent,
    GallaryComponent,
    EventDetailsComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
