import { Component, OnInit,EventEmitter,Output, ElementRef} from '@angular/core';
import { FormGroup } from "@angular/forms";
import { UserService } from './../_services/user.service';
import { FormBuilder, Validators } from "@angular/forms";
//import { ToastrService } from 'ngx-toastr';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public id:number
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {  
 // @Output() fitnessdata = new EventEmitter<Fitness>();
  fitnessForm: FormGroup;
  //public obj: any = {};
  log(x){
    console.log(x);
  }
  constructor( 
    private UserService: UserService,
    private fb: FormBuilder,
    private el:ElementRef
    //private toastrService: ToastrService
    ) { }
  
   
  ngOnInit() {
    this.fitnessForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      age: ["", [Validators.required,Validators.min(18),Validators.max(60)]],
      streetaddress: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      pincode: ["", [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      paisa: ["", [Validators.required]],
      inr: ["", [Validators.required]],
      trainerpreference:  ["", [Validators.required]],
      physiotherapist:["", [Validators.required]],
      packages: ["", [Validators.required]]
    });
    
  }
  //createAndUpdate(UserService.currentFitness){  }
  onSubmit(currentFitness:Fitness) {
    const invalidControl = this.el.nativeElement.querySelector('ng-invalid');//.ng-invalid
    if(invalidControl){
      console.log('Invalid data')
      invalidControl.focus()
    }else{
      console.log(currentFitness);
      if(currentFitness.id!=null){
        console.log('updated');
        this.updateFitness(currentFitness);
      }else{
        console.log('Data created');

        this.createFitness(currentFitness);
        /*
        if (this.fitnessForm.valid) {
          this.fitnessdata.emit(
            new <Fitness>(
              this.fitnessForm.value.firstname,
              this.fitnessForm.value.lastname,
              this.fitnessForm.value.phonenumber,
              this.fitnessForm.value.email
            
            )
          );
        }*/
      }
    }
  }
  createFitness(i:Fitness){
    this.UserService.postfitnessdata(i).subscribe();
    //this.toastrService.success('Data Created Successfully..! ', '')
    this.clear()
  }
  updateFitness(i:Fitness){
    this.UserService.putfitnessdata(i).subscribe();
    //this.toastrService.info('Data Updated Successfully..! ', '')
    this.clear()
  }
  clear(){
    this.UserService.currentFitness = {           
    inr: null,
    paisa: null,
    streetaddress: '',
    city: '',
    state: '',
    country: '',
    pincode: null,
    phonenumber: null,
    email: '',
    firstname:'',
    lastname: '',
    age:null,
    trainerpreference: '',
    physiotherapist: '',
    packages: '',
    id:null
    }
  }
   
  
}
