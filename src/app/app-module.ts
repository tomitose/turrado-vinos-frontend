import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



import { VinosComponent } from './components/vinos/vinos.component';
import { NavBar } from './shared/components/nav-bar/nav-bar';
import { Footer } from './shared/components/footer/footer';
import { VinoDetail } from './components/vino-detail/vino-detail';
import { Home } from './components/home/home';
import { Scanner } from './components/scanner/scanner';

@NgModule({
  declarations: [
    AppComponent,
    VinosComponent,
    NavBar,
    Footer,
    VinoDetail,
    Home,
    Scanner
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GraphQLModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
