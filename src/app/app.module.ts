import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';
import { MoviesService } from './core/services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ModulesModule,
    CoreModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
