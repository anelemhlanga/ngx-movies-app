import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ShowsComponent } from './components/shows/shows.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GenresComponent } from './components/genres/genres.component';
import { MoviesComponent } from './components/movies/movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowsComponent,
    CategoriesComponent,
    GenresComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
