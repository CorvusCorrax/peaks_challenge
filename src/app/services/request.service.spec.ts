import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { Hero } from '../classes/hero';
import { request } from 'request';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });

  it('should return first data set of heroes', () => {
    const service: RequestService = TestBed.get(RequestService);
    service.getHeroesList(0, (error, heroes) => {
      expect(error).not.toBeTruthy();
      expect(heroes).toBeTruthy();
      expect(heroes.length).toEqual(7); // Should be 20 with a working API

      expect(heroes[0].id).toEqual(1);
      expect(heroes[0].name).toEqual('Ironman');
      expect(heroes[0].image).toEqual('https://speckyboy.com/wp-content/uploads/2014/06/ironman.jpg');
      expect(heroes[0].description).toEqual('Because money cannot buy happiness, but it can buy a super-powered exosuit, which is the same.');

      expect(heroes[2].id).toEqual(3);
      expect(heroes[2].name).toEqual('Red Skull');
      expect(heroes[2].image).toEqual('https://i.pinimg.com/originals/4f/92/f9/4f92f9f6d7ee2a0c4252094bc0fe6f1b.jpg');
      expect(heroes[2].description).toEqual('Guide others to a screentime that he cannot possess.');

      expect(heroes[6].id).toEqual(7);
      expect(heroes[6].name).toEqual('Captain America');
      expect(heroes[6].image).toEqual('https://i0.wp.com/www.geek-art.net/wp-content/uploads/2014/04/Mike-Mitchell-Marvel-Portraits-Time-capt-america.jpg?ssl=1');
      expect(heroes[6].description).toEqual('An american icon that rejects most of modern american values.');
    });
  });

  it('should return second data set of heroes', () => {
    const service: RequestService = TestBed.get(RequestService);
    service.getHeroesList(20, (error, heroes) => {
      expect(error).not.toBeTruthy();
      expect(heroes).toBeTruthy();
      expect(heroes.length).toEqual(7); // Should be 20 with a working API

      expect(heroes[0].id).toEqual(8);
      expect(heroes[0].name).toEqual('Mondo');
      expect(heroes[0].image).toEqual('http://cdn.collider.com/wp-content/uploads/Bishop-Mike-Mitchell-Mondo-Marvel.jpg');
      expect(heroes[0].description).toEqual('Apparently he has his own cinematic universe now ?');

      expect(heroes[2].id).toEqual(10);
      expect(heroes[2].name).toEqual('Ant-man');
      expect(heroes[2].image).toEqual('https://pimpfdm.files.wordpress.com/2015/03/mitchell-x-marvel-x-mondo-1.jpg?w=364');
      expect(heroes[2].description).toEqual('Victimised by fan theories.');

      expect(heroes[6].id).toEqual(14);
      expect(heroes[6].name).toEqual('The Punisher');
      expect(heroes[6].image).toEqual('http://cdn.collider.com/wp-content/uploads/Punisher-Mike-Mitchell-Mondo-Marvel.jpg');
      expect(heroes[6].description).toEqual('The inspiration for Roberto Duterte\' war on drugs');
    });
  });

  it('should return correct comics', () => {
    const service: RequestService = TestBed.get(RequestService);
    service.getHeroComics(1, (error, comics) => {
      expect(error).not.toBeTruthy();
      expect(comics).toBeTruthy();
      expect(comics.comicApparitions).toEqual(100);
      expect(comics.firstComics.length).toEqual(3);
      expect(comics.firstComics[0]).toEqual('1');
      expect(comics.firstComics[1]).toEqual('2');
      expect(comics.firstComics[2]).toEqual('3');

      service.getHeroComics(4, (error, comics) => {
        expect(error).not.toBeTruthy();
        expect(comics).toBeTruthy();
        expect(comics.comicApparitions).toEqual(103);
        expect(comics.firstComics.length).toEqual(3);
        expect(comics.firstComics[0]).toEqual('10');
        expect(comics.firstComics[1]).toEqual('11');
        expect(comics.firstComics[2]).toEqual('12');
      });
    });
  });
});
