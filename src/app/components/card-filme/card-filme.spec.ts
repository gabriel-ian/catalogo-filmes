import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmeComponent } from './card-filme';

describe('CardFilme', () => {
  let component: CardFilmeComponent;
  let fixture: ComponentFixture<CardFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilmeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFilmeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
