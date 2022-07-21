import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'baseUrl'
})
export class BaseUrlPipe implements PipeTransform {

  baseUrl = environment.baseUrl

  transform(value: string): string {
    return this.baseUrl + value;
  }

}
