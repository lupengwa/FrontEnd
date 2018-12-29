import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {User} from "./user.class";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary', email: 'mary@gmail.com'},
    {name: 'Shelley', email: 'mary@gmail.com'},
    {name: 'Igor', email: 'mary@gmail.com'}
  ];
  filteredOptions: Observable<User[]>;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
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
