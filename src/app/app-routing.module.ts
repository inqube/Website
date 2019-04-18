import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
 { path: 'team', component: TeamComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'feed', component: FeedComponent },
 { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
