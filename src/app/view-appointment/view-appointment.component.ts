import { Component, OnInit } from '@angular/core';
import { UserService } from './../_services/user.service';
import { Fitness } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {
  Fitness: Fitness[]
  constructor(private UserService : UserService) { 
    console.log(Fitness)
  }

  
  ngOnInit() {
    this.getfitness()
  }
  
  getfitness() {
    this.UserService.getfitnessdata().subscribe(
      (data:Fitness[]) => {
        this.Fitness = data;
      }
    )
  }
  deleteFitness(id:number){
    console.log('Deleted ID: ',id);
    this.UserService.deleteFitness(id).subscribe(
      (data:Fitness[]) =>{
        this.getfitness();
      }
    )
    
  }
  edit(i){
//re route
    //this.UserService.currentFitness = Object.assign({},i)
  }
}
