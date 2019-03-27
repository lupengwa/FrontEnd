import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {Coworker} from "../model/coworker.model";
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../core/rest-api-path";
import {catchError, map} from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import {WeeklyDuty} from "../model/weekly-duty.model";
import {WeeklyDutyTmp} from "../model/WeeklyDutyTmp.modle";


export class Coworkers {
  results: Coworker[];
}
@Injectable()
export class CoworkerService {
  coworkerUrl = 'assets/coworkers.json';
  uri = 'http://localhost:8090';
  private coworkers : Observable<Coworkers>;
  private coWorkerListSubject: BehaviorSubject<Coworker[]>  = new BehaviorSubject<Coworker[]>([]);
  private weeklyDutyTmp : WeeklyDutyTmp;

  constructor(private http: HttpClient) { }

  public get coworkerList() : Coworker[] {return this.coWorkerListSubject.getValue()};

  public getCoworkerObservable(): Observable<Coworker[]> {
    this.fetchAllCoworkers();
    return this.coWorkerListSubject.asObservable();
  }

  public fetchAllCoworkers() {

    this.http.get(API_PATH.Coworker).pipe(
      map(res => res as Coworker[]),


    ).subscribe(data => {
      this.coWorkerListSubject.next(data)
    });
  }

  public addWeeklyDuty(weeklyDuty: WeeklyDuty) {
    this.weeklyDutyTmp = new WeeklyDutyTmp(weeklyDuty.programLeader.id, weeklyDuty.worshipLeader.id, weeklyDuty.pianist.id, weeklyDuty.chef.id, weeklyDuty.cleaning1.id, weeklyDuty.cleaning2.id);


  }

}
