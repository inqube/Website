import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
 { path: 'team', component: TeamComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'feed', component: FeedComponent },
 { path: 'projects', component: ProjectsComponent },
 { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
