import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { SaveService } from '../Services/save.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  reactiveForm: FormGroup;
  dis :string = null
  isdisplayA:boolean  = false
  isdisplayB:boolean = false
  isdisplayC:boolean =  false
  subs: Subscription[] = [];
  // @Output() dataEvent = new EventEmitter<any>();
  saveData:SaveService = inject(SaveService)

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      AName: [''],
      AValue: [''],
      BName: [''],
      BValue: [''],
      CName: [''],
      CValue: [''],
      MobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      GSTNo: ['', Validators.required],
      PAN: [''],
      addresses: this.fb.array([
       this.createAddress()
      ])
    });
    this.subs.push(this.reactiveForm.get('GSTNo').valueChanges.subscribe(() => {
      this.getPANfromGST();
    }));
  }
  
  
  createAddress(){
    return this.fb.group({
      lane1: ['', Validators.required],
      lane2: [''],
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
   
  }

  addAddress(){

    (<FormArray>this.reactiveForm.get('addresses')).push(this.createAddress())
  }
  removeAddress(index){
    (<FormArray>this.reactiveForm.get('addresses')).removeAt(index)
  }
  
    clikedA(){
      this.isdisplayA = true
      this.isdisplayB = false
      this.isdisplayC = false
      this.addAValidation();
      this.removeCValidation
      this.removeBValidation();
    }
    clikedB(){
    
   this.isdisplayB = true
   this.isdisplayA = false
    this.isdisplayC = false
    this.addBValidation();
    this.removeAValidation();
    this.removeCValidation()
    }
    clikedC(){
      this.isdisplayA  = false
      this.isdisplayB = false
      this.isdisplayC = true
      this.addCValidation();
      this.removeAValidation();
      this.removeBValidation();
    }

    get controlA(): AbstractControl {
      return this.reactiveForm.get('AName') && this.reactiveForm.get('AValue');
    }

    addAValidation() {
      this.controlA.setValidators([Validators.required]);
      this.controlA.updateValueAndValidity();
    }

    removeAValidation() {
      this.controlA.setValidators(null);
      this.controlA.updateValueAndValidity();
    }
    get controlB(): AbstractControl {
      return this.reactiveForm.get('BName') && this.reactiveForm.get('BValue');
    }

    addBValidation() {
      this.controlB.setValidators([Validators.required]);
      this.controlB.updateValueAndValidity();
    }

    removeBValidation() {
      this.controlB.setValidators(null);
      this.controlB.updateValueAndValidity();
    }
    get controlC(): AbstractControl {
      return this.reactiveForm.get('CName') && this.reactiveForm.get('AValue');
    }

    addCValidation() {
      this.controlC.setValidators([Validators.required]);
      this.controlC.updateValueAndValidity();
    }

    removeCValidation() {
      this.controlC.setValidators(null);
      this.controlC.updateValueAndValidity();
    }
  

    getPANfromGST(): void { 
      const gstNo = this.reactiveForm.get('GSTNo').value;
      const pan = gstNo.substring(2, 12);
      this.reactiveForm.patchValue({ PAN: pan });
    }



    onSubmit(){
      console.log(this.reactiveForm.value);
      this.saveData.saveData(this.reactiveForm.value);
      this.reactiveForm.reset();
      
      }
    
}

