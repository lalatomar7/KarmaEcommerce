import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  listdata : any;
  myform!: FormGroup;
  showform:boolean = false;
  addbtn: boolean = true;
  updateid:any;
  constructor(private _stuservice: StudentsService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.getstudents();
    this.myformnew();
  }
  myformnew(){
    this.myform = this._fb.group({
      name:[''],
      email:[''],
      number:[''],
      address:['']
    })
  }
  addstudent(){
  
    this._stuservice.createstu(this.myform.value).subscribe((data) =>{
      this.getstudents();
      this.myform.reset();
      this.showform = false;
    })
  }
  getstudents(){
    this._stuservice.getstudents().subscribe((res:any) => {
        this.listdata = res.data;
        console.log(this.listdata);
    });
  }
  updatebtn(item:any){
    this.updateid = item._id
    this.showform = true;
    this.addbtn = false
    this.myform.patchValue({
      name: item.name,
      email: item.email,
      number: item.number,
      address: item.address
    });
  
  }
  deletestu(id:any){
    if (confirm('Delete Students')) {
      this._stuservice.deletedata(id).subscribe((data:any) => {
        this.getstudents();
      }); 
    }
  }

  addstudents(){
    this.showform = true;
  }
  cancel(){
    this.myform.reset()
    this.showform = false;
  }
  
  Updatestudent(){
    if (this.updateid) {
      this._stuservice.updatedata(this.updateid, this.myform.value).subscribe((data:any) =>{
        this.getstudents();
        this.addbtn = true;
        this.showform = false;
        this.updateid =  null
        this.myform.reset();
      })
    }
  }
}
