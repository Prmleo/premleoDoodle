import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycsvProjectComponent } from './mycsv-project.component';

describe('MycsvProjectComponent', () => {
  let component: MycsvProjectComponent;
  let fixture: ComponentFixture<MycsvProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycsvProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycsvProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
