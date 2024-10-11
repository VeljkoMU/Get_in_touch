import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchMarqeeComponent } from './get-in-touch-marqee.component';

describe('GetInTouchMarqeeComponent', () => {
  let component: GetInTouchMarqeeComponent;
  let fixture: ComponentFixture<GetInTouchMarqeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInTouchMarqeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInTouchMarqeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
