import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44342/api";
  readonly PhotoUrl = "https://localhost:44342/Photos/";

  constructor(private http:HttpClient) { }

  getItemList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Item');
  }

  addItem(val:any){
    return this.http.post(this.APIUrl+'/Item',val)
  }

  deleteItem(val:any){
    return this.http.delete(this.APIUrl+'/Item/'+val,val)
  }


}
