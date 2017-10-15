import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class DataService {

    constructor(private http: Http) {
        
    }

    public data: string[];

    public loadData() {
        return this.http.get("/api/data").map(this.extractData).catch(this.handleError);
    }

    public addItem(item: string) {
        return this.http.post("/api/data", { item: item}).map(this.extractData).catch(this.handleError)
    }

    public removeItem(item: string) {
        
        return this.http.delete("/api/data/?item=" + item).map(this.extractData).catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        this.data = body;
    }

    private handleError(error: Response | any, caught: Observable<Response | any>) {
        console.log(error);
        return Observable.throw(error);
    }
}
