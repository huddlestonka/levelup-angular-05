import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { FoodiesListComponent } from './foodies-list.component';

describe('FoodiesListComponent', () => {
  let component: FoodiesListComponent;
  let fixture: ComponentFixture<FoodiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodiesListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
