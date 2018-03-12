import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe4',
})
export class FilterPipe4 implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.label.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}