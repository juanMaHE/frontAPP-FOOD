import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterComponent } from '@characters/character.componet';
import { AlimentosListComponent } from '@characters/alimentos-list/alimentos-list.component';
import { CarruselComponent } from '../carrusel/carrusel/carrusel.component';


const myComponents = [
  CharacterDetailsComponent, 
  CharacterListComponent, 
  CharacterComponent,
  AlimentosListComponent,CarruselComponent
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...myComponents],
})
export class CharactersModule {}
