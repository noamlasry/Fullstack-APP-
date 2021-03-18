import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  ItemNumber:number=0;
  ItemName:string="";
  ItemAmount:number = 0;

  ngOnInit(): void {
  }


  
  addItem(){
    var val = {ItemNumber:this.ItemNumber,
                ItemName:this.ItemName,
                ItemAmount:this.ItemAmount};

    this.service.addItem(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
