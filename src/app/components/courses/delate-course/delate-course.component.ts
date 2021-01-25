import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delate-course',
  templateUrl: './delate-course.component.html',
  styleUrls: ['./delate-course.component.scss']
})
export class DelateCourseComponent implements OnInit {
  section:string;
  level:string;
  term:string;
  subject:string;

  constructor(private storage_ser:StorageService, private shard:ShardService, private dialog:MatDialog) { }

  ngOnInit(): void {
    const get_card_info=this.shard.get_card_info();
    this.section = get_card_info.section;
    this.level   = get_card_info.level;
    this.term    = get_card_info.term;
    this.subject = get_card_info.subject;
  }
  
  delate(){//get from shard service to send to storage servise
    this.storage_ser.delatecours(this.section,this.level,this.term,this.subject);
    this.dialog.closeAll()
  }
 
  cancel(){
      this.dialog.closeAll()
  }

}
