import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LargeCard } from './large-card';

describe('LargeCard', () => {
  let component: LargeCard;
  let fixture: ComponentFixture<LargeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LargeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
