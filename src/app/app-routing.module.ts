import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from  './app.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
    { path: 'web', component: WebComponent},
    { path: 'Repository', component: AppComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
