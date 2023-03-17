import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactDetailsService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data 
    getContactDetails() {
        return this.http.get('http://localhost:8000/contactDetails');
    }
    //Uses http.post() to post data 
addcontactDetails(obj:any) {
    return this.http.post('http://localhost:8000/contactDetails',obj)
        
    }
}