import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  ItemList:any=[];
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshItemList();
  }

  addClick(){
    this.emp={
      ItemNumber:0,
      ItemName:"",
      ItemAmount:0,
    }
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteItem(item.ItemNumber).subscribe(data=>{
        alert(data.toString());
        this.refreshItemList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshItemList();
  }

  refreshItemList(){
    this.service.getItemList().subscribe(data=>{
      this.ItemList=data;
    });
  }


}
