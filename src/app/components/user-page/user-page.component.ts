import {Component, Input, OnInit} from '@angular/core';
import {TourMap} from '../../interfaces/tour-map';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  active = 1;
  tourMaps: TourMap[];

  constructor() {
    this.tourMaps = [{
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 1,
      isFavorite: false,
      title:  'A Prisank (Prisojnik) csúcs meghódítása',
      imgUrl: 'https://static.wixstatic.com/media/f98a72_1e0a0c6ed2ca4e0b813da43b14b9b2de~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/f98a72_1e0a0c6ed2ca4e0b813da43b14b9b2de~mv2_d_5472_3648_s_4_2.webp'
    }, {
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      id: 1,
      isFavorite: false,
      title: 'A Szakadás-árok felfedezése',
      imgUrl: 'https://static.wixstatic.com/media/f98a72_f4322daac0a9449a821e892557ef6e7c~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/f98a72_f4322daac0a9449a821e892557ef6e7c~mv2_d_5472_3648_s_4_2.webp'
    }];
  }

  get favoriteMaps(): TourMap[] {
    return this.tourMaps.filter(tourMap => tourMap.isFavorite);
  }

  ngOnInit(): void {
    // backend call
  }

}
