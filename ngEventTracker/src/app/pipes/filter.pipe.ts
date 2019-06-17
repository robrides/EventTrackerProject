import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from '../models/ride';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // transform(items: any[], searchText: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLowerCase();
  //   return items.filter( item => {
  //     item.toLowerCase().includes(searchText);
  //   });
  //  }

  transform(rides: Ride[], searchTerm: string): Ride[] {
  if (!rides || !searchTerm) {
      return rides;
  }

  return rides.filter(ride =>
      ride.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}
}
