import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-contraintes',
  templateUrl: './contraintes.component.html',
  styleUrls: ['./contraintes.component.css']
})

@Pipe({
  name: 'ContraintesComponent',
})
export class ContraintesComponent implements PipeTransform {
  names = ['Prashobh', 'Abraham', 'Anil', 'Sam', 'Natasha', 'Marry', 'Zian', 'karan'];
  transform(value: any, input: string) {
      if (input) {
          input = input.toLowerCase();
          return value.filter(function (el: any) {
              return el.toLowerCase().indexOf(input) > -1;
          });
      }
      return value;
  }
}