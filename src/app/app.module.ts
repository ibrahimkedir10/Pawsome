// Import HttpClientModule for making HTTP requests
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { BreedImageComponent } from './breed-image/breed-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsListComponent,
    BreedImageComponent,
  ],
  imports: [
    BrowserModule, // Import BrowserModule for basic app functionality
    HttpClientModule, // Import HttpClientModule to make HTTP requests
  ],
  providers: [], // No additional providers specified
  bootstrap: [AppComponent] // Specify the root component for bootstrapping the application
})
export class AppModule { }
