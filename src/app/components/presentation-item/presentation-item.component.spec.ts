import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationItemComponent } from './presentation-item.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('PresentationItemComponent', () => {
  let component: PresentationItemComponent;
  let fixture: ComponentFixture<PresentationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationItemComponent, CommonModule ,BrowserModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
