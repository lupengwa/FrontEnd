import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {User, IUserResponse} from '../user.class';
import {WeeklyDuty} from "../component/model/weekly-duty.model";
import {Coworker} from "../component/model/coworker.model";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  programLeaderControl = new FormControl();
  worshipLeaderControl = new FormControl();
  pianistControl = new FormControl();
  dinnerLeaderControl = new FormControl();
  cleanOneControl = new FormControl();
  cleanTwoControl = new FormControl();
  options: Coworker[] = [
    {id:1, name: 'Mary', email:'Mary@gmail.com'},
    {id:2, name: 'Shelley', email:'shelley@gmail.com'},
    {id:3, name: 'Igor',email:'Igor@gmail.com'}
  ];

  programfilteredOptions: Observable<Coworker[]>;
  worhipFilteredOptions: Observable<Coworker[]>;
  pianistFilteredOptions: Observable<Coworker[]>;
  dinnerfilteredOptions: Observable<Coworker[]>;
  cleanOneFilteredOptions: Observable<Coworker[]>;
  cleanTwoFilteredOptions: Observable<Coworker[]>;

  public weeklyDuty : WeeklyDuty;
  public coWorker : Coworker;







  ngOnInit() {
    this.programfilteredOptions = this.programLeaderControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );

    this.worhipFilteredOptions= this.worshipLeaderControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );

    this.pianistFilteredOptions= this.pianistControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );
    this.dinnerfilteredOptions = this.dinnerLeaderControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );

    this.cleanOneFilteredOptions= this.cleanOneControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );

    this.cleanTwoFilteredOptions= this.cleanTwoControl.valueChanges
      .pipe(
        startWith<string | Coworker>(""),
        map(value => typeof value === 'string'?value:value.name),
        map(name => this._filter(name))
      );



  }

  displayFn(user?: Coworker): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Coworker[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
