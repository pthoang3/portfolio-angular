import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavbarComponent } from './containers/header/navbar/navbar.component';
import { HomeComponent } from './containers/header/home/home.component';
import { AboutMeComponent } from './containers/about-me/about-me.component';
import { WorksComponent } from './containers/works/works.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ContactComponent } from './containers/contact/contact.component';
import { SkillsComponent } from './containers/skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    WorksComponent,
    FooterComponent,
    ContactComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
