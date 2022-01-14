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
import { FooterComponent } from './footer/footer.component';
import { MiscComponent } from './forum/misc/misc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { EditpostComponent } from './editpost/editpost.component';
import { ResultsComponent } from './forum/results/results.component';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> users

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
    FooterComponent,
    MiscComponent,
<<<<<<< HEAD
    EditpostComponent,
    ResultsComponent,
=======
    LoginComponent,
    RegisterComponent
>>>>>>> users
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
