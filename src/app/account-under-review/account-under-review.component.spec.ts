import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUnderReviewComponent } from './account-under-review.component';

describe('AccountUnderReviewComponent', () => {
  let component: AccountUnderReviewComponent;
  let fixture: ComponentFixture<AccountUnderReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountUnderReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountUnderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
