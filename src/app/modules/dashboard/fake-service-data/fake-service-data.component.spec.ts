import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeServiceDataComponent } from './fake-service-data.component';

describe('FakeServiceDataComponent', () => {
  let component: FakeServiceDataComponent;
  let fixture: ComponentFixture<FakeServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
