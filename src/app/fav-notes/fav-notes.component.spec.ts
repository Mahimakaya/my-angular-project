import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavNotesComponent } from './fav-notes.component';

describe('FavNotesComponent', () => {
  let component: FavNotesComponent;
  let fixture: ComponentFixture<FavNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
