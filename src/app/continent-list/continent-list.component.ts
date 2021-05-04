import { Component, OnInit } from '@angular/core';
import { ContinentCard } from '../common/models/continent.model';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css'],
})
export class ContinentListComponent implements OnInit {
  // tableau contenant les infos des continents
  categories: ContinentCard[];

  constructor() {}

  ngOnInit(): void {
    // initialiser les catégories
    this.categories = [
      new ContinentCard(
        'America',
        [
          'Go to the United States',
          'Visit beautiful Canada',
          'Travel to Mexico',
        ],
        [
          'https://s1.1zoom.me/b5050/36/USA_Houses_Skyscrapers_Evening_Manhattan_New_York_562768_1920x1080.jpg',
          'https://eskipaper.com/images/free-canada-wallpaper-1.jpg',
          'https://www.wallpapertip.com/wmimgs/15-155022_el-arco-de-cabo-san-lucas.jpg',
        ]
      ),
      new ContinentCard(
        'Europe',
        ['Go to Paris', 'Visit beautiful London', 'Travel to Spain'],
        [
          'https://wallpaperaccess.com/full/203323.jpg',
          'https://i.pinimg.com/originals/1c/37/57/1c37571f530ad9bfd048036ec19dae90.jpg',
          'https://www.teetravel.com/voyages-golf/espagne/assets/images/espagne-girona-1-1920x1080.jpg',
        ]
      ),
      new ContinentCard(
        'Asia',
        ['Go to Bumbay', 'Visit beautiful Russia', 'Travel to Egypt'],
        [
          'https://cdn.wallpapersafari.com/65/61/qga0Cf.jpg',
          'https://wallpaperaccess.com/full/493923.jpg',
          'https://w.wallha.com/ws/5/iAzkwJaQ.jpg',
        ]
      ),
    ];
  }
}
