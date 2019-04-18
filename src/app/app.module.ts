import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './pages/team/team.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ProjectsComponent,
    FeedComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
