import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  constructor(private dataSrv: DataFetchService) { }

  transform(id: string | undefined): string | null {

    if (!(!!id)) {
      return null;
    }

    let approverName: string = 'Hola';

    this.dataSrv.get_item<User>(`users/${ id }`)
      .pipe(
        map(user => approverName = `${ user.firstname } ${ user.lastname }`)
      );


    return approverName;
  }

}
