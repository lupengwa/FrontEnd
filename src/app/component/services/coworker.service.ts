import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {Coworker} from "../model/coworker.model";
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../core/rest-api-path";
import {catchError, map} from "rxjs/operators";


export class Coworkers {
  results: Coworker[];
}
@Injectable()
export class CoworkerService {
  coworkerUrl = 'assets/coworkers.json';
  uri = 'http://localhost:8090';
  private coworkers : Observable<Coworkers>;
  private coWorkerListSubject: BehaviorSubject<Coworker[]>  = new BehaviorSubject<Coworker[]>([]);

  constructor(private http: HttpClient) { }

  public get coworkerList() : Coworker[] {return this.coWorkerListSubject.getValue()};

  public getCoworkerObservable(): Observable<Coworker[]> {
    this.fetchAllCoworkers();
    return this.coWorkerListSubject.asObservable();
  }


  getList() : Observable<Coworkers>{
    if(!this.coworkers) {
      this.coworkers = this.http.get<Coworkers>(this.coworkerUrl);
    }
    return this.coworkers;
  }

  public fetchAllCoworkers() {

    this.http.get(API_PATH.Coworker).pipe(
      map(res => res as Coworker[]),


    ).subscribe(data => {
      this.coWorkerListSubject.next(data)
    });
  }

}
