import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';

import { take } from 'rxjs/operators';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';
import { TrackHttpError } from '@shared/models/trackHttpError';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})

export class CharacterListComponent implements OnInit {
  characters: Character[]=[];

  showGoUpButton = false;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharacterService,
    private rutaActiva: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    
    this.getDataFromService();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    this.getDataFromService();
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private getDataFromService(): void {
    this.characterSvc
      .getDetails(this.rutaActiva.snapshot.params.id)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.characters = res;
      }
        , (error: TrackHttpError) => console.log((error.friendlyMessage)));
  }
}
