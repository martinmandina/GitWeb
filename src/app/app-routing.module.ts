import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
    { path: 'web', component: WebComponent},
    { path: 'Repository', component: FormComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
