import { Component, OnInit } from '@angular/core';
import { startWith, scan,  } from 'rxjs/operators';
import { of ,interval} from 'rxjs';
import {} from 'rxjs/operators';
@Component({
  selector: 'with-material-app',
  templateUrl: './withmaterial.component.html',
  styleUrls: [ './withmaterial.component.css' ]
})
export class WithMaterialComponent implements OnInit  {
  interests = [];

  ngOnInit() {
    this.interests = [
      {value:'reading', viewValue:'Reading'},
      {value:'swimming', viewValue:'Swimming'},
      {value:'cycling', viewValue:'Cycling'}
    ];

    //emit ('World!', 'Goodbye', 'World!')
const source = of('World!', 'Goodbye', 'World!');
//start with 'Hello', concat current string to previous
const example = source.pipe(
  startWith('Hello'),
  scan((acc, curr) => `${acc} 2 ${curr}`),
 );
example.subscribe(x=> console.log(x));


interval(2000).pipe(startWith(3444)).subscribe(x=>console.log(x))



  }

}