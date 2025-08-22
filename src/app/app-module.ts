import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // <-- importante
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';


import { VinosComponent } from './components/vinos/vinos.component';
import { NavBar } from './shared/components/nav-bar/nav-bar';
import { Footer } from './shared/components/footer/footer';
import { VinoDetail } from './components/vino-detail/vino-detail';

@NgModule({
  declarations: [
    AppComponent,
    VinosComponent,
    NavBar,
    Footer,
    VinoDetail
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
