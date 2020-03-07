import { Pipe, PipeTransform } from '@angular/core';
import { Movement } from '@app/models/movement.model';

@Pipe({
  name: 'movementsOrder'
})
export class MovementsOrderPipe implements PipeTransform {

  transform(movements: Movement[], ...args: any[]): any {
    return movements.sort( (a,b)  => a.type === 'ingress' ? -1 : 1);
  }

}
