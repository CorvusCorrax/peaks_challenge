import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

import { HeroComponent } from './hero.component';

import { Hero } from '../../../classes/hero';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ HeroComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;

    component.data = {
      hero: {
        id: 1,
        name: 'Ironman',
        image: 'https://speckyboy.com/wp-content/uploads/2014/06/ironman.jpg',
        description: 'Because money cannot buy happiness, but it can buy a super-powered exosuit, which is the same.',
        comicApparitions: 100,
        firstComics: ['1','2','3'],
        favorite: false
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
