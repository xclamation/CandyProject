import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsListComponent } from './props-list.component';

describe('PropsListComponent', () => {
  let component: PropsListComponent;
  let fixture: ComponentFixture<PropsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
