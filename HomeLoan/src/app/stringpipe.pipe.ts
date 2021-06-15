import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringpipe'
})
export class StringpipePipe implements PipeTransform {

  transform(value :String){
    if(value.length>10){
        return value[0]+value[1]+value[2]+value[3]+value[4]+value[5]+value[6]+value[7]+value[8]+value[9]+'...';
    }
    return value;
  }

}
