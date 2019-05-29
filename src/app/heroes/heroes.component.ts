import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ModalService } from '../services/modal.service';
import { RequestService } from '../services/request.service';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  constructor(private modalService: ModalService, private requestService: RequestService) { }

  offset:number = 0;
  loading:boolean = false;
  heroes:Hero[];
  favoriteHeroes:Hero[] = [];
  favoredImage:string = "https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/198_star_favorite_vote_achievement-512.png";
  unfavoredImage:string = "https://cdn3.iconfinder.com/data/icons/multi-media-set-2/66/94-512.png";

  ngOnInit() {
    this.loading = true;
    this.requestService.getHeroesList(0, (error, heroes) => {
      if (error) {
        this.loading = false;
        return console.log(error);
      }
      this.heroes = heroes;
      this.loading = false;
    });
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.loading = true;
    this.modalService.openHeroModal(hero, (error) => {
      if (error) {
        console.log(error);
      }
      this.loading = false;
    });
  }

  previousHeroes(): void {
    if (!this.offset) {
      return;
    }
    this.offset = this.offset - 20;
    this.loading = true;
    this.requestService.getHeroesList(this.offset, (error, heroes) => {
      if (error) {
        this.loading = false;
        return console.log(error);
      }
      this.loading = false;
      this.heroes = heroes;
    });
  }

  nextHeroes(): void {
    this.offset = this.offset + 20;
    this.loading = true;
    this.requestService.getHeroesList(this.offset, (error, heroes) => {
      if (error) {
        this.loading = false;
        return console.log(error);
      }
      this.loading = false;
      this.heroes = heroes;
    });
  }

  favorHero(hero): void {
    if (hero.favorite) {
      hero.favorite = false;
      const heroIndex = this.findHeroIndex(hero, this.favoriteHeroes);
      this.favoriteHeroes.splice(heroIndex, 1);
    } else {
      hero.favorite = true;
      this.favoriteHeroes.push(hero);
      // Workaround to refresh view
      this.favoriteHeroes = this.favoriteHeroes.slice();
    }
  }

  findHeroIndex(wantedHero, heroList): number {
    let resultIndex = null;
    heroList.forEach((hero, index) => {
      if (hero.id === wantedHero.id) {
        resultIndex = index;
      }
    });
    return resultIndex;
  }

}
