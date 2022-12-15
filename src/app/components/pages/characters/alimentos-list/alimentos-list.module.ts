import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosListRoutingModule } from './alimentos-list-routing.module';
import { AlimentosListComponent } from './alimentos-list.component';
import { Alimento } from '@app/shared/interfaces/alimento.interface';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AlimentosListRoutingModule
  ]
})
export class AlimentosListModule { 
  @Input() alimento:Alimento;
}
