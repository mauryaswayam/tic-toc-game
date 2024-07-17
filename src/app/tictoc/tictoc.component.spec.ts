import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictocComponent } from './tictoc.component';

describe('TictocComponent', () => {
  let component: TictocComponent;
  let fixture: ComponentFixture<TictocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TictocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
