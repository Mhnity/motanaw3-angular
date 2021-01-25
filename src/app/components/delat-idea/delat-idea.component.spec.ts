import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelatIdeaComponent } from './delat-idea.component';

describe('DelatIdeaComponent', () => {
  let component: DelatIdeaComponent;
  let fixture: ComponentFixture<DelatIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelatIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelatIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
