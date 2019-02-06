import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MorseComponent} from "./morse/morse.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path:'', component:MorseComponent},
  {path:'adduser', component:UserComponent}
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
