import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-your-self',
  templateUrl: './add-your-self.component.html',
  styleUrls: ['./add-your-self.component.scss']
})
export class AddYourSelfComponent implements OnInit {
  show:boolean=false;
  error_msg:string;


  constructor(private store_service:StorageService, private rout:Router) { }

  ngOnInit(): void {
  }

  addOffer(form:NgForm,textarea){  
    this.show=true;
    let area=textarea;
    let name=(form.value).name,
        section=(form.value).section,      
        level=(form.value).level;
  
        this.store_service.add_content(name,section,level,area).then(()=>{
          this.rout.navigate(['']).then(()=>alert(  'مرحبا'+ '  ' + `${name}` + '  ' + " تم ارسال افكارك واضافاتك بنجاج وفي انتظار الفلتره والعرض شكرا لك  ")).catch(err=>this.error_msg=err)
        });
  }
}
