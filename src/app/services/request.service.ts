import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { request } from 'request';

// mock data set because developer.marvel.com doesn't works
let firstDataSet: Hero[] = [
  {
    id: 1, name: 'Ironman',
    image: 'https://speckyboy.com/wp-content/uploads/2014/06/ironman.jpg',
    description: 'Because money cannot buy happiness, but it can buy a super-powered exosuit, which is the same.'
  },
  {
    id: 2, name: 'Thor',
    image: 'https://speckyboy.com/wp-content/uploads/2014/06/thor.jpg',
    description: 'Currently in a lawsuit with Pikachu.'
  },
  {
    id: 3, name: 'Red Skull',
    image: 'https://i.pinimg.com/originals/4f/92/f9/4f92f9f6d7ee2a0c4252094bc0fe6f1b.jpg',
    description: 'Guide others to a screentime that he cannot possess.'
  },
  {
    id: 4, name: 'Spider-man',
    image: 'https://cdn11.bigcommerce.com/s-6zp1m7t9y2/images/stencil/1280x1280/products/139/483/mondo-spiderman-mike-mitchell-portrait-site__33948.1490637954.jpg?c=2&imbypass=on',
    description: 'A teenager that shoots a lot of white sticky thing and somehow manages to be PG+12.'
  },
  {
    id: 5, name: 'Hulk',
    image: 'https://speckyboy.com/wp-content/uploads/2014/06/hulk.jpg',
    description: 'Slightly less on steroids than an average Tour de France competitor.'
  },
  {
    id: 6, name: 'Venom',
    image: 'https://i.pinimg.com/originals/be/19/aa/be19aac54d73e73ea050225da6bf8c00.jpg',
    description: 'Is pretty awesome, as long as he doesn\'t dance.'
  },
  {
    id: 7, name: 'Captain America',
    image: 'https://i0.wp.com/www.geek-art.net/wp-content/uploads/2014/04/Mike-Mitchell-Marvel-Portraits-Time-capt-america.jpg?ssl=1',
    description: 'An american icon that rejects most of modern american values.'
  }
];

let secondDataSet: Hero[] = [
  {
    id: 8, name: 'Mondo',
    image: 'http://cdn.collider.com/wp-content/uploads/Bishop-Mike-Mitchell-Mondo-Marvel.jpg',
    description: 'Apparently he has his own cinematic universe now ?'
  },
  {
    id: 9, name: 'Deadpool',
    image: 'https://i.imgur.com/QYeo4C0.gif',
    description: 'The bane of the fourth wall.'
  },
  {
    id: 10, name: 'Ant-man',
    image: 'https://pimpfdm.files.wordpress.com/2015/03/mitchell-x-marvel-x-mondo-1.jpg?w=364' ,
    description: 'Victimised by fan theories.'
  },
  {
    id: 11, name: 'Ghost Rider',
    image: 'https://speckyboy.com/wp-content/uploads/2014/06/ghostrider.jpg',
    description: 'Scary guy. Still less scary than Nicolas Cage.'
  },
  {
    id: 12, name: 'Loki',
    image: 'http://66.media.tumblr.com/a9c0c6ca380648feed4980064176be8b/tumblr_mvvauwyA631qzlfumo1_500.gif',
    description: 'Schrödinger\'s cat of the Marvel Cinematic Universe.'
  },
  {
    id: 13, name: 'Doctor Strange',
    image: 'http://cdn.collider.com/wp-content/uploads/DrStrange-Mike-Mitchell-Mondo-Marvel.jpg',
    description: 'Wong\'s living wallet'
  },
  {
    id: 14, name: 'The Punisher',
    image: 'http://cdn.collider.com/wp-content/uploads/Punisher-Mike-Mitchell-Mondo-Marvel.jpg',
    description: 'The inspiration for Roberto Duterte\' war on drugs'
  }
];

let heroComics = [
  {
    comicApparitions: 100,
    firstComics: [1,2,3]
  },
  {
    comicApparitions: 101,
    firstComics: [4,5,6]
  },
  {
    comicApparitions: 102,
    firstComics: [7,8,9]
  },
  {
    comicApparitions: 103,
    firstComics: [10,11,12]
  },
  {
    comicApparitions: 104,
    firstComics: [13,14,15]
  },
  {
    comicApparitions: 105,
    firstComics: [16,17,18]
  },
  {
    comicApparitions: 106,
    firstComics: [19,20,21]
  },
  {
    comicApparitions: 107,
    firstComics: [22,23,24]
  },
  {
    comicApparitions: 108,
    firstComics: [25,26,27]
  },
  {
    comicApparitions: 109,
    firstComics: [28,29,30]
  },
  {
    comicApparitions: 110,
    firstComics: [31,32,33]
  },
  {
    comicApparitions: 111,
    firstComics: [34,35,36]
  },
  {
    comicApparitions: 112,
    firstComics: [37,38,39]
  },
  {
    comicApparitions: 113,
    firstComics: [40,41,42]
  }
]

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getHeroesList(offset, callback) {
    offset += 100;
    const requestParams = {
      "url": "https://developer.marvel.com/v1/public/characters?limit=20&offset=" + offset,
      "headers": {
        "API-Key": "That's where i'd put my API key, IF I HAD ONE !"
      }
    };
    // request(requestParams, function (error, response, body) {
    //   if (error) {
    //     return callback(error);
    //   }
    //   if (!response) {
    //     return callback(new Error('no response'));
    //   }
    //   if (response.statusCode !== 200) {
    //     return callback(new Error('statusCode: ' + response.statusCode + ', body: ' + body));
    //   }
    //
    //   const parsedBody = JSON.parse(body);
    //   return callback(null, parsedBody);
    // });

    // use mock dataset until the api works again
    if (offset >= 120) {
      return callback(null, secondDataSet);
    } else {
      return callback(null, firstDataSet);
    }
  }

  getHeroComics(id, callback) {
    const requestParams = {
      "url": "https://developer.marvel.com/v1/public/characters/" + id + "/comics?orderBy=focDate",
      "headers": {
        "API-Key": "That's where i'd put my API key, IF I HAD ONE !"
      }
    };
    // request(requestParams, function (error, response, body) {
    //   if (error) {
    //     return callback(error);
    //   }
    //   if (!response) {
    //     return callback(new Error('no response'));
    //   }
    //   if (response.statusCode !== 200) {
    //     return callback(new Error('statusCode: ' + response.statusCode + ', body: ' + body));
    //   }
    //
    //   const parsedBody = JSON.parse(body);
    //   return callback(null, parsedBody);
    // });

    // use mock dataset until the api works again
    if (heroComics[id - 1]) {
      return callback(null, heroComics[id - 1]);
    } else {
      return callback(new Error('Unknown hero'));
    }
  }
}
