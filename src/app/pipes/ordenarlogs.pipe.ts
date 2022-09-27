import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarlogs'
})
export class OrdenarlogsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    value.sort(this.comparar);
    return value;
  }
  comparar(data1:any,data2:any)
  {
    if(data1.dia > data2.dia )
    {
      return 1;
    }
    else if(data1.dia <data2.dia) 
    {
      return -1;
    }
    else
    {
      if(data1.hora < data2.hora)
      {
        return 1;
      }
      else if(data1.hora > data2.hora)
      {
        return -1
      }
      else
      {
        return 0;
      }
    }
  }

}
