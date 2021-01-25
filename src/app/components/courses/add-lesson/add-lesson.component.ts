import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ShardService } from 'src/app/services/shard.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  section:string;
  level:string;
  term:string;
  subject:string;

  constructor(private ser_store:StorageService, private shard:ShardService, private daialog:MatDialog) { }

  ngOnInit(): void {
    const get_card_info=this.shard.get_card_info();
    this.section = get_card_info.section;
    this.level   = get_card_info.level;
    this.term    = get_card_info.term;
    this.subject = get_card_info.subject;   // كان ممكن اعملهم ف الاد وخلاص بس من باب التنظيم
  }
  add(form){
    let section = this.section;
    let term    = this.term;
    let level   = this.level;
    let subject = this.subject;
    let student_name=(form.value).student_name;
    let lesson_name=(form.value).lesson_name;
    let link=(form.value).link;
  this.ser_store.addlesson(section,level,term,subject,student_name,lesson_name,link).then(msg => alert(msg)).then(()=> this.daialog.closeAll());
  }

  cancel(){
    this.daialog.closeAll()

  }


}
