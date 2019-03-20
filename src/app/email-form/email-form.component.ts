import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Coworker} from "../component/model/coworker.model";
import {CoworkerService} from "../component/services/coworker.service";
import * as _ from "lodash";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  constructor(private coworkerService: CoworkerService) {}

  programLeaderControl = new FormControl();
  worshipLeaderControl = new FormControl();
  pianistControl = new FormControl();
  dinnerControl = new FormControl();
  cleanOneControl = new FormControl();
  cleanTwoControl = new FormControl();
  // options: Coworker[] = [
  //   {id:1, name: 'Mary', email:'Mary@gmail.com'},
  //   {id:2, name: 'Shelley', email:'shelley@gmail.com'},
  //   {id:3, name: 'Igor',email:'Igor@gmail.com'}
  // ];
  options: Coworker[] = [];

  programfilteredOptions: Observable<Coworker[]>;
  worhipFilteredOptions: Observable<Coworker[]>;
  pianistFilteredOptions: Observable<Coworker[]>;
  dinnerfilteredOptions: Observable<Coworker[]>;
  cleanOneFilteredOptions: Observable<Coworker[]>;
  cleanTwoFilteredOptions: Observable<Coworker[]>;


  ngOnInit() {
    this.coworkerService.getCoworkerObservable().subscribe(data => {this.options = _.cloneDeep(data)
    console.log("input");
    console.log(data)}
    );
    this.coworkerService.getList().subscribe(result => {
      this.programfilteredOptions = this.programLeaderControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );

      this.worhipFilteredOptions= this.worshipLeaderControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );
      //
      this.pianistFilteredOptions= this.pianistControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );
      this.dinnerfilteredOptions = this.dinnerControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );

      this.cleanOneFilteredOptions= this.cleanOneControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );

      this.cleanTwoFilteredOptions= this.cleanTwoControl.valueChanges
        .pipe(
          startWith<string | Coworker>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name  => name ? this._filter(name):this.options.slice())
        );
    })




  }

  displayFn(user?: Coworker): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Coworker[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
