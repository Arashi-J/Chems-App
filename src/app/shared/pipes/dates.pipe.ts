import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(date: Date): number | string {
    const dateUtc = moment.utc(date);
    return moment(dateUtc).local().format('DD/MM/YYYY hh:mm:ss a');
  }

}
