import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsnackbarComponent } from './materialsnackbar.component';

describe('MaterialsnackbarComponent', () => {
  let component: MaterialsnackbarComponent;
  let fixture: ComponentFixture<MaterialsnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsnackbarComponent]
    });
    fixture = TestBed.createComponent(MaterialsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
