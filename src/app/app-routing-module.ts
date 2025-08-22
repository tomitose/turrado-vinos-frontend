// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinosComponent } from './components/vinos/vinos.component';
import { VinoDetail } from './components/vino-detail/vino-detail';

const routes: Routes = [
  { path: 'vinos', component: VinosComponent },
  { path: 'vinos/:documentId', component: VinoDetail }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
