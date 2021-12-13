import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HeaderComponent } from './header/header.component';
import { ForumComponent } from './forum/forum.component';
import { RockComponent } from './forum/rock/rock.component';
import { EdmComponent } from './forum/edm/edm.component';
import { RapComponent } from './forum/rap/rap.component';
import { JazzComponent } from './forum/jazz/jazz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatepostComponent,
    HeaderComponent,
    ForumComponent,
    RockComponent,
    EdmComponent,
    RapComponent,
    JazzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
