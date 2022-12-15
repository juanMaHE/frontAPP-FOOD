import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control-lg"
      placeholder="Buscar..."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width:100%; border-color:#fff;}'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    console.log("🚀 ~ file: form-search.component.ts ~ line 24 ~ FormSearchComponent ~ onSearch ~ value", value)
    if (value && value.length > 3) {
      this.router.navigate(['/obtenerAlimentos'], {
        queryParams: { q: value },
      });
    }
  }
}
