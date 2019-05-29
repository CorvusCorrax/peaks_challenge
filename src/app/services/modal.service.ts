import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { HeroComponent } from '../component/modal/hero/hero.component';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    public dialog: MatDialog,
    private requestService: RequestService
  ) { }

  openHeroModal(hero, callback) {
    const promise = new Promise((resolve, reject) => {
      if (!hero.comicApparitions && !hero.firstComics) {
        this.requestService.getHeroComics(hero.id, (error, comics) => {
          if (error) {
            return reject(error);
          }
          hero.comicApparitions = comics.comicApparitions;
          hero.firstComics = comics.firstComics;
          resolve();
        });
      } else {
        resolve();
      }
    });

    promise.then(() => {
      this.dialog.open(HeroComponent, {
        width: '400px',
        data: {
          hero: hero
        }
      });
      callback();
    });

    promise.catch((error) => {
      callback(error);
    });
  }
}
