import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private angular_store:AngularFirestore, private angular_storage:AngularFireStorage, private auth:AuthService) { }
  
/************************** start  course ***************************/ 
//add courses
  addcourse(title_one:string, title_two:string, title_three:string, D_name:string, subject:string,  date:Date, img:File){
    return new Promise((resolv,rejec)=>{
      let ref=this.angular_storage.ref('courses/'+img.name);
      ref.put(img).then(()=>{
          ref.getDownloadURL().subscribe(photo =>{
            this.angular_store.doc(`${title_one}/`+`${title_two}/`+ `${title_three}/`+ subject).set({
             subject,
              D_name,
              date,
              photo,
              title_one,
              title_two,
              title_three,
            }).then(()=>resolv('تم اضافة الماده بنجاح !'))
          })
      })
    })
  }

// delate courses 
  delatecours(section,level,term,course){
    return this.angular_store.doc(section+'/'+level+'/'+term+'/'+course).delete();
  }

/************************** end course  ***************************/ 



/************************** start lesson ***************************/ 
//add lessone
  addlesson(section:string, level:string, term:string, subject:string, student_name:string, lesson_name:string, link:string){
    return new Promise((res,rejec)=>{
      this.angular_store.doc(section+'/'+level+'/'+term+'/'+subject+'/'+'محتويات خارجية'+'/'+lesson_name).set({
        subject,
        student_name, 
        lesson_name,
        link
      }).then(()=>res('تم اضافة المحاضره بنجاح !')).catch(()=>rejec('هناك خطا ما '))
    })
  }

//show lesson 
  show_lessons(section,level,term,subject){// to show lesson component
    return this.angular_store.collection(section+'/'+level+'/'+term+'/'+subject+'/'+'محتويات خارجية').snapshotChanges();
  }  
  
//delate lesson
delatelesson(section, level, term, subject, lesson_name){
  return this.angular_store.doc(section+'/'+level+'/'+term+'/'+subject+'/'+'محتويات خارجية'+'/'+lesson_name).delete()
}
/************************** end lesson ***************************/



/************************** start  user  ***************************/ 
  adduser(id,name,email,password){
    this.angular_store.doc('UsersData/'+id).set({
      name,
      email,
      password
    })
  }

  ////////is user and is adimin
  userdata(){
    return this.angular_store.doc('UsersData/'+this.auth.userid).valueChanges();
  }
/************************** end  user  ***************************/ 




/************************** start content   ***************************/ 
add_content(name:string,section:string,level:string,area){
    return new Promise ((resolv,reject)=>{
                this.angular_store.doc('idea'+'/'+name).set({
                  name,
                  section,
                  level,
                  area
                }).then(()=>resolv('تم الاضافة بنجاح وفي انتظار موافقة المسؤل شكرا'))
             })
  }

//get content for addmin only
get_student_content(){
return this.angular_store.collection('idea').snapshotChanges();//لازم عشان هتتغير
}

//delate student content
delate_student_content(name){
return this.angular_store.doc('idea'+'/'+name).delete()
}
/************************** end  content   ***************************/ 

}   

