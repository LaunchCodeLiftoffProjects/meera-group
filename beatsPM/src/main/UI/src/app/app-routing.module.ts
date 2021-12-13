import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component'
import { ForumComponent } from './forum/forum.component';
 
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
    path: 'forum',
    pathMatch: 'full',
    component: ForumComponent
  },

  {
    path: 'forum/edm',
    pathMatch: 'full',
    component: ForumComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
