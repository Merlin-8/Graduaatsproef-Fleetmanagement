import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GascardEditComponent } from './gascard-edit.component';

describe('GascardEditComponent', () => {
  let component: GascardEditComponent;
  let fixture: ComponentFixture<GascardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GascardEditComponent]
    });
    fixture = TestBed.createComponent(GascardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
