import { Component } from '@angular/core';
import { Bus } from './model/Bus';
import { BusService } from './bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent {
  title = 'BusManagement';
  bus : Bus;
  result : string;
  busArr : Bus[];
  flag : boolean;

  constructor(private service : BusService){
    this.bus=new Bus();
    this.result="";
    this.busArr = [];
    this.flag=false;
  }

  insertBus(data : any)
  {
    this.bus.id=data.busId;
    this.bus.busStop=data.busStop;
    this.bus.busTime=data.busTime;
    this.result=this.service.insertBus(this.bus);
  }
  updateBus(data:any){
    this.bus.id=data.busId;
    this.bus.busStop=data.busStop;
    this.bus.busTime=data.busTime;
  
    this.result=this.service.updateBus(this.bus);
    //alert(data.empId+" "+data.empName+" "+data.empSalary);
  }
  deleteBus(data : any){
    this.result = this.service.deleteBus(data.busId);
  }
  findBus(data : any){
    this.bus=this.service.findBus(data.busId);
    this.result=this.bus.id+" "+this.bus.busStop+" "+this.bus.busTime;
  }
  findAllBus(){
    this.busArr = this.service.findAllBus();
    this.flag=true;
  }
}
