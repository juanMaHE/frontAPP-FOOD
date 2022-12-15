import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosListComponent } from './alimentos-list.component';

const routes: Routes = [{ path: '', component: AlimentosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentosListRoutingModule { }
