import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ministring'})
export class MinistringPipe implements PipeTransform {
  // Transforme la "value" par le pipe grace au paramètre nbCut
  // nbCut est la taille maxi du string a laquelle il doit être découpé.
 transform(value: string, nbCut: number): string {
   return value.slice(0,nbCut)+"...";
 }
}