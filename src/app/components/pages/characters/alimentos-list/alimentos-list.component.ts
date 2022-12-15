
import { Alimento } from '@shared/interfaces/alimento.interface';
import { TrackHttpError } from '@app/shared/models/trackHttpError';
import { AlimentosService } from '@app/shared/services/alimentos.service';
import { DOCUMENT } from '@angular/common';

import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, ParamMap, Router,
} from '@angular/router';

import { take } from 'rxjs/operators';


type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-alimentos-list',
  templateUrl: './alimentos-list.component.html',
  styleUrls: ['./alimentos-list.component.scss']
})
export class AlimentosListComponent implements OnInit {

  alimento: Alimento[] = [];

  info: RequestInfo = {
    next: null,
  };

  showGoUpButton = false;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;
  query: any;

  constructor(@Inject(DOCUMENT) private document: Document,
    private AlimentoSvc: AlimentosService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getCharactersByQuery();
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
    if (this.info.next) {
      this.getDataFromService();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.AlimentoSvc
      .searchAlimentos()
      .subscribe((res: any) => {
        console.log(res);
        this.alimento = res;
        console.log('alimento' + this.alimento)

      }, (error: TrackHttpError) => console.log((error.friendlyMessage)));
  }


}
