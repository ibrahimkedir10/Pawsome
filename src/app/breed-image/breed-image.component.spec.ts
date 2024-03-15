import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedImageComponent } from './breed-image.component';

describe('BreedImageComponent', () => {
  let component: BreedImageComponent;
  let fixture: ComponentFixture<BreedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
