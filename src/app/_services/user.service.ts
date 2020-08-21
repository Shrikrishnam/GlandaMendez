import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Fitness } from './../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { Contact } from '../contact-us/contact-us.component';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {
    public static BaseUrl1 = "http://localhost:4444/";
    public static BaseUrl = "http://localhost:6565/";

    currentFitness:Fitness = {      
    inr: null,
    paisa: null,
    streetaddress: '',
    city: '',
    state: '',
    country: '',
    pincode: null,
    phonenumber: null,
    email: '',
    firstname:'',
    lastname: '',
    age:null,
    trainerpreference: '',
    physiotherapist: '',
    packages: '',
    id:null
    }
    cont1:Contact = {
      firstname: '',
      lastname: '',
      phonenumber: null,
      email: '',
      message: ''
    }

    constructor(private http: Http) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    postcontactdata(data){
      return this.http.post(UserService.BaseUrl+'contacts',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
    }
    deleteFitness(id:number){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+id, httpOptions).pipe(map((response: Response) => response.json()));
    }
    putfitnessdata(data){
      return this.http.put(UserService.BaseUrl+'allfriends/'+ data.id,data,httpOptions).pipe(map((response: Response) => response.json()));
    }
}