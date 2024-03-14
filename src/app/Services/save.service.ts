import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  session: any;
  saveData(data) {
    console.log("data saved");
    
  localStorage.setItem('session', JSON.stringify(data));
  }
  
  loadData() {
  let data: any = localStorage.getItem('session')
  return JSON.parse(data)  
  }
}
