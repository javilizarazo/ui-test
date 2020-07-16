import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from '../pages/layout/applayout.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { PastTrialsComponent } from '../pages/past-trials/past-trials.component';
import { VotesComponent } from '../components/votes/votes.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppLayoutComponent,
    NavigationComponent,
    FooterComponent,
    AppComponent,
    HomeComponent,
    PastTrialsComponent,
    VotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
