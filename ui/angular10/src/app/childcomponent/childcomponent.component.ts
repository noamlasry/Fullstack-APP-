import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  id:any;
  name:any;
  Amount:number = 0;
  Withdrawalquantity:number = 0;
  Depositquantity:number = 0;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name;
    this.Amount = this.route.snapshot.params.amount;

  }

}
