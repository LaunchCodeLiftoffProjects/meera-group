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

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },
  {
      path: 'results',
      pathMatch: 'full',
      component: ResultsComponent
    },
  {
    path: 'createpost',
    pathMatch: 'full',
    component: CreatepostComponent
  },

  {
    path: 'forum',
    pathMatch: 'full',
    component: ForumComponent,
  },
  {
    path: 'editpost/:id',
    pathMatch: 'prefix',
    component: EditpostComponent
  },
  {
      path: 'forum/edm',
      pathMatch: 'prefix',
      component: EdmComponent
    },
  {
      path: 'forum/rock',
      pathMatch: 'prefix',
      component: RockComponent
    },
  {
      path: 'forum/jazz',
      pathMatch: 'prefix',
      component: JazzComponent
    },
  {
      path: 'forum/rap',
      pathMatch: 'prefix',
      component: RapComponent
    },
  {
      path: 'forum/misc',
      pathMatch: 'prefix',
      component: MiscComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
