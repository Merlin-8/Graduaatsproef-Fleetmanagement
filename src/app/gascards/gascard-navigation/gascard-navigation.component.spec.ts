import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GascardNavigationComponent } from './gascard-navigation.component';

describe('GascardNavigationComponent', () => {
  let component: GascardNavigationComponent;
  let fixture: ComponentFixture<GascardNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GascardNavigationComponent]
    });
    fixture = TestBed.createComponent(GascardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
