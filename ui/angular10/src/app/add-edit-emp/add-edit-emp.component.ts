import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

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