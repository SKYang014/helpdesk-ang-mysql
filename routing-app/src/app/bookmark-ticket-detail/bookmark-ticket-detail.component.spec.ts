import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTicketDetailComponent } from './bookmark-ticket-detail.component';

describe('BookmarkTicketDetailComponent', () => {
  let component: BookmarkTicketDetailComponent;
  let fixture: ComponentFixture<BookmarkTicketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkTicketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
