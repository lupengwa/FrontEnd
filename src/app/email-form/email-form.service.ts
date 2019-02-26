import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmailFormService {
  constructor(private http:HttpClient) {
  }

  getEmailLists() {
    return this.http.get('/api/email-list');
  }


}
