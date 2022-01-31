import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component'
import { EditpostComponent } from './editpost/editpost.component'
import { EdmComponent } from './forum/edm/edm.component';
import { JazzComponent } from './forum/jazz/jazz.component';
import { RockComponent } from './forum/rock/rock.component';
import { RapComponent } from './forum/rap/rap.component';
import { MiscComponent } from './forum/misc/misc.component';
import { ForumComponent } from './forum/forum.component';
import { ResultsComponent } from './forum/results/results.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { AuthGuard } from './shared/auth/auth.guard';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },
  {
      path: 'results',
      pathMatch: 'full',
      component: ResultsComponent,
      canActivate: [AuthGuard]
    },
  {
    path: 'createpost',
    pathMatch: 'full',
    component: CreatepostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'forum',
    pathMatch: 'full',
    component: ForumComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editpost/:id',
    pathMatch: 'prefix',
    component: EditpostComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'forum/edm',
      pathMatch: 'prefix',
      component: EdmComponent,
      canActivate: [AuthGuard]
    },
  {
      path: 'forum/rock',
      pathMatch: 'prefix',
      component: RockComponent,
      canActivate: [AuthGuard]
    },
  {
      path: 'forum/jazz',
      pathMatch: 'prefix',
      component: JazzComponent,
      canActivate: [AuthGuard]
    },
  {
      path: 'forum/rap',
      pathMatch: 'prefix',
      component: RapComponent,
      canActivate: [AuthGuard]
    },
  {
      path: 'forum/misc',
      pathMatch: 'prefix',
      component: MiscComponent,
      canActivate: [AuthGuard]
    },
   {
       path: 'viewpost/:id',
       pathMatch: 'prefix',
       component: ViewpostComponent,
       canActivate: [AuthGuard]
     },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
