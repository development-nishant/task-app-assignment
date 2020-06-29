import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastCreateNewDialogComponent } from './tast-create-new-dialog.component';

describe('TastCreateNewDialogComponent', () => {
  let component: TastCreateNewDialogComponent;
  let fixture: ComponentFixture<TastCreateNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastCreateNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastCreateNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
