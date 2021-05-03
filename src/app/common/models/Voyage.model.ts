export class Voyage {
  public _id: number ;
  public _continent: string ;
  public _pays: string ;
  public _name: string ;
  public _description: string ;
  public _photo: string ;
  public _date: string;
  
  

  constructor(
    continent: string,
    pays: string,
    name: string,
    description: string,
    photo: string,
    date: string
  ) {
    this._id;
    this._continent = continent;
    this._pays = pays;
    this._name = name;
    this._description = description;
    this._photo = photo;
    this._date = date;
  }
  
}
