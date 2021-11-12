import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
