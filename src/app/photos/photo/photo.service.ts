import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL_BASE = 'http://localhost:3000';

@Injectable({providedIn:"root"})
export class PhotoService{

    constructor(private http: HttpClient){

    }

    listFromUser(user: string){
        return this.http.get<any[]>(URL_BASE + '/' + user + '/photos' );
    }
}