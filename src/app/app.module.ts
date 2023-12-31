import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component'
import { PostsComponent } from './posts/posts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent,
    RoutingComponent,
    NavbarComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
