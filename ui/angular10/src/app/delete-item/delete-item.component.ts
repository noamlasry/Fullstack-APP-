import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  ItemNumber:number=0;
  ItemName:string="";
  ItemAmount:number = 0;

  ItemList:any=[];
  ActivateAddEditEmpComp:boolean=false;
  

  ngOnInit(): void {
    this.refreshItemList();
    
  }

  deleteItem(){
 

    var val = {ItemNumber:this.ItemNumber,
      ItemName:this.ItemName,
      ItemAmount:this.ItemAmount};

      if(confirm('Are you sure??')){
        this.service.deleteItem(val.ItemNumber).subscribe(data=>{
          alert(data.toString());
          this.refreshItemList();
        })
      }


  }


  refreshItemList(){
    this.service.getItemList().subscribe(data=>{
      this.ItemList=data;
    });
  }

}
