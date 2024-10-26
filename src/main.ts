/// <reference types="@angular/localize" />

// src/main.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core'; // Import pour utiliser des modules additionnels
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, HttpClientModule), // Ajout de BrowserModule et HttpClientModule
    // Ajoutez d'autres providers ou modules si besoin
  ],
}).catch((err) => console.error(err));
