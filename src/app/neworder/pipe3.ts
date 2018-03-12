import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe3',
})
export class FilterPipe3 implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.externalcode.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}