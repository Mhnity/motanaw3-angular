import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delat-idea',
  templateUrl: './delat-idea.component.html',
  styleUrls: ['./delat-idea.component.scss']
})
export class DelatIdeaComponent implements OnInit {
  student_name:string
  constructor(private shard:ShardService, private storage_ser:StorageService, private dialog:MatDialog) { }
  
  ngOnInit(): void {
    this.student_name=this.shard.get_student_name();
    }
  
  delate(){//get from shard service
    this.storage_ser.delate_student_content(this.student_name);
    this.dialog.closeAll()
  }
 
  cancel(){
      this.dialog.closeAll()
  }


}
