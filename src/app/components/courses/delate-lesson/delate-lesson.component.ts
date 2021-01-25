import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-delate-lesson',
  templateUrl: './delate-lesson.component.html',
  styleUrls: ['./delate-lesson.component.scss']
})
export class DelateLessonComponent implements OnInit {
  section:string;
  level:string;
  term:string;
  subject:string;
  lesson_name:string;
  constructor(private dialog:MatDialog, private storge_ser:StorageService, private shard:ShardService) { }

  ngOnInit(): void {
    const get_card_info=this.shard.get_card_info();
    this.section = get_card_info.section;
    this.level   = get_card_info.level;
    this.term    = get_card_info.term;
    this.subject = get_card_info.subject;
    this.lesson_name=this.shard.get_lesson_name();
  }
  
  
  delate(){
    this.storge_ser.delatelesson(this.section, this.level, this.term, this.subject, this.lesson_name);
    this.dialog.closeAll()
  }
 
  cancel(){
    this.dialog.closeAll()
  }
  
}
