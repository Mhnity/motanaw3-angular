
import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {Content} from '../../interfaces/content'
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';
import { DelatIdeaComponent } from '../delat-idea/delat-idea.component';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.scss']
})
export class GetStudentsComponent implements OnInit {
  offers:Content[]=[]
  constructor(private fire_store:StorageService, private shard:ShardService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.fire_store.get_student_content().subscribe(data=>{
      this.offers=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          name:ele.payload.doc.data()['name'],
          section:ele.payload.doc.data()['section'],
          level:ele.payload.doc.data()['level'],
          area:ele.payload.doc.data()['area'],
        }
      })
    })
  }

 

  delate(name){  // لما اضغط عليه ابعت اسمه للشارد وافتح الكمبوننت اللي هتحذفة
    this.shard.set_student_name(name.innerText)
    this.dialog.open(DelatIdeaComponent);
    const dillogs=new MatDialogConfig();
    dillogs.disableClose=true;
    dillogs.autoFocus=true;  
    dillogs.hasBackdrop=false
  }

}
