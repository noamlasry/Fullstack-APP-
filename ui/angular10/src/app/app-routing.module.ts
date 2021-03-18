import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:ParentcomponentComponent},
  {path:'parent',component:ParentcomponentComponent},
  {path:'child/:id/:name/:amount',component:ChildcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
