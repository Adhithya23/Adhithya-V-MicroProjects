import { Injectable } from '@angular/core';
import { Bus } from './model/Bus';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusService {
 url: string ;
 bus : Bus;
 busArr : Bus[];

 constructor(private http : HttpClient)
 {
  this.url="http://localhost:3004/busd"
  this.bus=new Bus();
  this.busArr=[];
 }

 insertBus(bus : Bus)
 {
    this.http.post<Bus>(this.url,bus).subscribe();
    return "Bus Details Inserted";
 }
 updateBus(bus : Bus){
  this.http.put<Bus>(this.url+"/"+bus.id,bus).subscribe();
  return "Bus Details Updated";
}
deleteBus(busId : number){
  this.http.delete<Bus>(this.url+"/"+busId).subscribe();
  return "Bus Details Deleted";
}
findBus(busId : number){
  this.http.get<Bus>(this.url+"/"+busId).subscribe(data => this.bus = data);
  return this.bus;
}
findAllBus(){
  this.http.get<Bus[]>(this.url).subscribe(data => this.busArr = data);
  return this.busArr;
}
}
