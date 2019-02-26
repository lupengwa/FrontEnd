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

  // options2: string[] = ['One', 'Two', 'Three'];
  // programfilteredOptions2: Observable<string[]>;
  programfilteredOptions: Observable<Coworker[]>;
  worhipFilteredOptions: Observable<User[]>;
  pianistFilteredOptions: Observable<User[]>;
  dinnerfilteredOptions: Observable<User[]>;
  cleanOneFilteredOptions: Observable<User[]>;
  cleanTwoFilteredOptions: Observable<User[]>;

  public weeklyDuty : WeeklyDuty;
  public coWorker : Coworker;







  ngOnInit() {
    this.weeklyDuty = new WeeklyDuty();
    this.coWorker = new Coworker();


    this.programfilteredOptions = this.programLeaderControl.valueChanges
      .pipe(
        startWith<string | Coworker>(''),
        
        map(value => value.name ?this._filter(value.name))
      );

    // this.worhipFilteredOptions= this.worshipLeaderControl.valueChanges
    //   .pipe(
    //     startWith<string | User>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    //
    // this.pianistFilteredOptions= this.pianistControl.valueChanges
    //   .pipe(
    //     startWith<string | User>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    // this.dinnerfilteredOptions = this.dinnerLeaderControl.valueChanges
    //   .pipe(
    //     startWith<string | User>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    //
    // this.cleanOneFilteredOptions= this.cleanOneControl.valueChanges
    //   .pipe(
    //     startWith<string | User>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    //
    // this.cleanTwoFilteredOptions= this.cleanTwoControl.valueChanges
    //   .pipe(
    //     startWith<string | User>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );



  }

  displayFn(user?: Coworker): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
