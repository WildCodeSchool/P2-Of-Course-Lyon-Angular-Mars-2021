export class Voyage {
  private _id: number ;
  private _continent: string ;
  private _pays: string ;
  private _name: string ;
  private _description: string ;
  private _photo: string ;
  
  

  constructor(
    continent: string,
    pays: string,
    name: string,
    description: string,
    photo: string,
  ) {
    this._id;
    this._continent = continent;
    this._pays = pays;
    this._name = name;
    this._description = description;
    this._photo = photo;
  }

  public get id() {
    return this._id = Math.floor(Math.random()*1000000);
  }
  public get continent() {
    return this._continent;
  }
  public get name() {
    return this._name;
  }
  public get pays() {
    return this._pays;
  }
  public get description() {
    return this._description;
  }

  public get photo() {
    return this._photo;
  }
  
}
