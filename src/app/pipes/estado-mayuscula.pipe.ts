import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoMayuscula'
})
export class EstadoMayusculaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    const  resultPost:any = [];
    for(let i = 0; i<value.length;i++)
    {
      value[i].estado = value[i].estado.toUpperCase();
      resultPost.push(value[i]);
    }
    return resultPost;
  }

}
