import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {User, IUserResponse} from '../user.class';

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
  options: User[] = [
    {name: 'Mary', email:'Mary@gmail.com'},
    {name: 'Shelley', email:'shelley@gmail.com'},
    {name: 'Igor',email:'Igor@gmail.com'}
  ];
  programfilteredOptions: Observable<User[]>;
  worhipFilteredOptions: Observable<User[]>;
  pianistFilteredOptions: Observable<User[]>;
  dinnerfilteredOptions: Observable<User[]>;
  cleanOneFilteredOptions: Observable<User[]>;
  cleanTwoFilteredOptions: Observable<User[]>;




  ngOnInit() {
    this.programfilteredOptions = this.programLeaderControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.worhipFilteredOptions= this.worshipLeaderControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.pianistFilteredOptions= this.pianistControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.dinnerfilteredOptions = this.dinnerLeaderControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.cleanOneFilteredOptions= this.cleanOneControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.cleanTwoFilteredOptions= this.cleanTwoControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );



  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
