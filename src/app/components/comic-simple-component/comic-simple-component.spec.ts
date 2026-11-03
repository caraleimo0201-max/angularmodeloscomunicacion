import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicSimpleComponent } from './comic-simple-component';

describe('ComicSimpleComponent', () => {
  let component: ComicSimpleComponent;
  let fixture: ComponentFixture<ComicSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
