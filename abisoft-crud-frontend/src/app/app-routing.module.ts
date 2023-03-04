import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlatosComponent} from "./pages/platos/platos.component";

const routes: Routes = [
  {
    path: '',
    component: PlatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
