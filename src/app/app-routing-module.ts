import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinosComponent } from './components/vinos/vinos.component';
import { VinoDetail } from './components/vino-detail/vino-detail';
import { Home } from './components/home/home';
import { Scanner } from './components/scanner/scanner';



const routes: Routes = [
  { path: '', component: Home },
  { path: 'scanner', component: Scanner },
  { path: 'vinos', component: VinosComponent },
  { path: 'vinos/:documentId', component: VinoDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
