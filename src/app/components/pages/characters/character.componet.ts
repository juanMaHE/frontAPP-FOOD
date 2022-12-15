import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Component({
    selector:'app-character',
    template:`
    <div class="card"  >
      <div class="image" style="margin: 25px 50px 75px">
        <a [routerLink]="['/character-details', character.id]">
          <img
            [src]="character.alimento.imagen"
            [alt]="character.alimento.nombre"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-body">
    <!-- <h5 class="card-title">Card title</h5> -->
    <p class="card-text">{{ character.descripcion }}</p>
    <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/character-details', character.id]">
            <h2>{{ character.alimento.nombre | slice: 0:15}}</h2>
          </a>
         
          <!-- <h4 class="text-muted">{{ character.descripcion }}</h4> -->
          <small class="text-muted">{{ character.alimento.categoria.nombre }}</small>
        </div>
      </div>
  </div>
   
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input() character:Character;
}