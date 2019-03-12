import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {Coworker} from "../model/coworker.model";
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../core/rest-api-path";
import {catchError, map} from "rxjs/operators";

interface Coworkers {
  result: Coworker[];
}
@Injectable()
export class CoworkerService {
  coworkerUrl = 'assets/coworkers.json';
  private coWorkerListSubject: BehaviorSubject<Coworker[]>  = new BehaviorSubject<Coworker[]>([]);

  constructor(private http: HttpClient) { }

  public get coworkerList() : Coworker[] {return this.coWorkerListSubject.getValue()};

  public getCoworkerObservable(): Observable<Coworker[]> {
    return this.coWorkerListSubject.asObservable();
  }


  getList() : Observable<Coworker[]>{
    return this.http.get<Coworkers>(this.coworkerUrl).pipe(map ( res => res.result || []));
  }

  public fetchAllCoworkers() {
    this.http.get(API_PATH.Coworker).pipe(
      map(res => res as Coworker[]),

    ).subscribe(data => {
      this.coWorkerListSubject.next(data)
    });
  }

}
