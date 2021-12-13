import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component'
import { EdmComponent } from './forum/edm/edm.component';
import { JazzComponent } from './forum/jazz/jazz.component';
import { RockComponent } from './forum/rock/rock.component';
import { RapComponent } from './forum/rap/rap.component';
import { MiscComponent } from './forum/misc/misc.component';
 
const routes: Routes = [

  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path: 'createpost',
    pathMatch: 'full',
    component: CreatepostComponent
  },

  {
    path: 'forum/edm',
    pathMatch: 'full',
    component: EdmComponent
  },

  {
    path: 'forum/jazz',
    pathMatch: 'full',
    component: JazzComponent
  },

  {
    path: 'forum/rock',
    pathMatch: 'full',
    component: RockComponent
  },

  {
    path: 'forum/rap',
    pathMatch: 'full',
    component: RapComponent
  },

  {
    path: 'forum/misc',
    pathMatch: 'full',
    component: MiscComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
