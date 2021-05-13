import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Foodie } from '@bba/api-interfaces';
import { MaterialModule } from '@bba/material';
import { FoodieDetailsComponent } from './foodie-details.component';
import { mockFoodie } from '@bba/testing';

describe('FoodieDetailsComponent', () => {
  let component: FoodieDetailsComponent;
  let fixture: ComponentFixture<FoodieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodieDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodieDetailsComponent);
    component = fixture.componentInstance;
    component.foodie = mockFoodie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
