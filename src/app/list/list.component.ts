import { Component, Input, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SaveService } from 'src/app/Services/save.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
//  @Input() form:FormGroup

formData:any;
save:SaveService = inject(SaveService)
Name:string
Value : string
length :number
ngOnInit() {
  this.formData = this.save.loadData()
  this.Name = this.formData.AName || this.formData.BName||this.formData.CName
  this.Value = this.formData.AValue|| this.formData.BValue||this.formData.CValue
  this.length = this.formData.addresses.length;
  if (this.formData) {
    console.log(this.formData.GSTNo); 
  }
}
}
