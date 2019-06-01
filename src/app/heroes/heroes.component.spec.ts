import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material';

import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';

import { ModalService } from '../services/modal.service';
import { RequestService } from '../services/request.service';
import { Hero } from '../classes/hero';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 heroes', () => {
    expect(component.heroes.length).toEqual(7);
  });

  it('should favor 3 heroes, unfavor the second one and then refavor him', () => {
    let heroes = [
      {
        id: 2, name: 'Thor',
        image: 'https://speckyboy.com/wp-content/uploads/2014/06/thor.jpg',
        description: 'Currently in a lawsuit with Pikachu.'
      },
      {
        id: 4, name: 'Spider-man',
        image: 'https://cdn11.bigcommerce.com/s-6zp1m7t9y2/images/stencil/1280x1280/products/139/483/mondo-spiderman-mike-mitchell-portrait-site__33948.1490637954.jpg?c=2&imbypass=on',
        description: 'A teenager that shoots a lot of white sticky thing and somehow manages to be PG+12.'
      },
      {
        id: 6, name: 'Venom',
        image: 'https://i.pinimg.com/originals/be/19/aa/be19aac54d73e73ea050225da6bf8c00.jpg',
        description: 'Is pretty awesome, as long as he doesn\'t dance.'
      },
    ];
    expect(component.favoriteHeroes.length).toEqual(0);
    component.favorHero(heroes[0]);
    expect(component.favoriteHeroes.length).toEqual(1);
    expect(component.favoriteHeroes[0].id).toEqual(heroes[0].id);
    expect(component.favoriteHeroes[0].name).toEqual(heroes[0].name);
    expect(component.favoriteHeroes[0].image).toEqual(heroes[0].image);
    expect(component.favoriteHeroes[0].description).toEqual(heroes[0].description);
    expect(component.favoriteHeroes[0].favorite).toEqual(true);

    component.favorHero(heroes[1]);
    expect(component.favoriteHeroes.length).toEqual(2);
    expect(component.favoriteHeroes[1].id).toEqual(heroes[1].id);
    expect(component.favoriteHeroes[1].name).toEqual(heroes[1].name);
    expect(component.favoriteHeroes[1].image).toEqual(heroes[1].image);
    expect(component.favoriteHeroes[1].description).toEqual(heroes[1].description);
    expect(component.favoriteHeroes[1].favorite).toEqual(true);

    component.favorHero(heroes[2]);
    expect(component.favoriteHeroes.length).toEqual(3);
    expect(component.favoriteHeroes[2].id).toEqual(heroes[2].id);
    expect(component.favoriteHeroes[2].name).toEqual(heroes[2].name);
    expect(component.favoriteHeroes[2].image).toEqual(heroes[2].image);
    expect(component.favoriteHeroes[2].description).toEqual(heroes[2].description);
    expect(component.favoriteHeroes[2].favorite).toEqual(true);

    component.favorHero(heroes[1]);
    expect(component.favoriteHeroes.length).toEqual(2);

    component.favorHero(heroes[1]);
    expect(component.favoriteHeroes.length).toEqual(3);
    expect(component.favoriteHeroes[2].id).toEqual(heroes[1].id);
    expect(component.favoriteHeroes[2].name).toEqual(heroes[1].name);
    expect(component.favoriteHeroes[2].image).toEqual(heroes[1].image);
    expect(component.favoriteHeroes[2].description).toEqual(heroes[1].description);
    expect(component.favoriteHeroes[2].favorite).toEqual(true);
  });
});
