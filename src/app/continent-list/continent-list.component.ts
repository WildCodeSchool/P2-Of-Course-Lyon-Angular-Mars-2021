import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css']
})
export class ContinentListComponent implements OnInit {

  
  categories: any[] = [
    {
      title: 'America',
      descs: {
        one: 'Go to the United States',
        two: 'Visit beautiful Canada',
        three: 'Travel to Mexico'
      },
      images: {
        one: 'https://s1.1zoom.me/b5050/36/USA_Houses_Skyscrapers_Evening_Manhattan_New_York_562768_1920x1080.jpg',
        two: 'https://eskipaper.com/images/free-canada-wallpaper-1.jpg',
        three: 'https://www.wallpapertip.com/wmimgs/15-155022_el-arco-de-cabo-san-lucas.jpg'
      }
    },
    {
      title: 'Europe',
      descs: {
        one: 'Go to Paris',
        two: 'Visit beautiful London',
        three: 'Travel to Spain'
      },
      images: {
        one: 'https://wallpaperaccess.com/full/203323.jpg',
        two: 'https://i.pinimg.com/originals/1c/37/57/1c37571f530ad9bfd048036ec19dae90.jpg',
        three: 'https://www.teetravel.com/voyages-golf/espagne/assets/images/espagne-girona-1-1920x1080.jpg'
      }
    },
    {
      title: 'Asia',
      descs: {
        one: 'Go to Bumbay',
        two: 'Visit beautiful Russia',
        three: 'Travel to Egypt'
      },
      images: {
        one: 'https://cdn.wallpapersafari.com/65/61/qga0Cf.jpg',
        two: 'https://wallpaperaccess.com/full/493923.jpg',
        three: 'https://w.wallha.com/ws/5/iAzkwJaQ.jpg'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
