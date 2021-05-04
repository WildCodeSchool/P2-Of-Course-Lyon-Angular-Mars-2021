export class ContinentCard {
  public title: string;
  public descs: string[];
  public images: string[];
  constructor(title: string, descs: string[], images: string[]) {
    this.title = title;
    this.descs = descs;
    this.images = images;
  }
}
