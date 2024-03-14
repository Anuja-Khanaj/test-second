import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NavbarMiniComponent } from './navbar-mini/navbar-mini.component';
import { NavHomeComponent } from './navbar-mini/nav-home/nav-home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TopTrendingComponent } from './home/top-trending/top-trending.component';
import { FooterComponent } from './home/footer/footer.component';
import { NextDirective } from './Directives/next.directive';
import { PrevDirective } from './Directives/prev.directive';
import { HoverDirective } from './Directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OnboardingComponent,
    ListComponent,
    HomeComponent,
    NavbarMiniComponent,
    NavHomeComponent,
    CarouselComponent,
    TopTrendingComponent,
    FooterComponent,
    NextDirective,
    PrevDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
