import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosListComponent } from './alimentos-list.component';

describe('AlimentosListComponent', () => {
  let component: AlimentosListComponent;
  let fixture: ComponentFixture<AlimentosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
