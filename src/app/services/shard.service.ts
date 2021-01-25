import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShardService {
  
  //card info
  section:string;
  level:string;
  term:string;
  subject:string;
  index:string;
  //lesson name
  lesson_name:string; //lesson name for delate lesson component

 //studen name
 studen_name:string






 
  constructor() { }
  
  //set card info from all of levels home Especially card
  setinfo(section,level,term,material,index){
    this.section=section;
    this.level=level;
    this.term=term;
    this.subject=material;
    this.index=index;
   }
   get_card_info(){
     return{
       section:this.section,
       level:this.level,
       term:this.term,
       subject:this.subject
     }
   }
 
  // set lesson name form show lesson component from delate function
  setlesson(lesson_name){
    this.lesson_name=lesson_name
  }
  get_lesson_name(){//to delate lesson component 
    return this.lesson_name
  }


//set get student name for add content 
  set_student_name(name){//from get studnt component
    this.studen_name=name
  }

  get_student_name(){//sent to delate idea component 
    return this.studen_name
    }






  // مش ليهم اي ستين لازمه
  // احطياطي بس محطوتين ف اول كل home component.ts
  // لازم اروح لكل هوم واشيلهم من هناك عشان اعرف احذفهم 
   getsection(){
    return this.section;
  }
  getlevel(){
    return this.level;
  }
  getTerm(){
   return this.term
   }
   getMaterial(){
     return this.subject
   }
   getindex(){
     return this.index
   }
}
