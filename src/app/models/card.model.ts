import {Activity} from './activity.model';

export class Card {
    public title : string ;
    public picture : any ;
    public id : any ;
    public description : string ;
    public activities: Activity [] ;
  constructor(title:string, picture:any, id:any, description:string) {
      this.title = title;
      this.picture = picture;
      this.id =id;
      this.description = description;
      this.activities = new Array<Activity> ();
  }
  addActivity(activity : Activity) {
    this.activities.push(activity);
}
getActivities(): Activity[] {
    return this.activities;
}
}