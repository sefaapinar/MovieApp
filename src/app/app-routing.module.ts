import { MovieDetailsComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

const routes: Routes= [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'movies', component: MoviesComponent},
  {path:'detail/:id', component: MovieDetailsComponent},
]


@NgModule({
  exports: [RouterModule],
  imports: [
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
