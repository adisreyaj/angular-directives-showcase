import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardComponent } from './section-card.component';

describe('SectionCardComponent', () => {
  let component: SectionCardComponent;
  let fixture: ComponentFixture<SectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
