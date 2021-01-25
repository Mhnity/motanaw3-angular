import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { StorageService } from 'src/app/services/storage.service';
import Typed from 'typed.js';
declare var $:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private corses_ser:StorageService) {}

    ngOnInit(): void {
  /************** start typeit   *******************/
        const options = {
            strings: ['مرحبا بكم في متنوع '],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: true,
            cursorChar: '|',
            loop:false
       };
       const typed = new Typed('.typed', options);
  /************** end typeit  *******************/
    $(function (){
      /************** start header  *******************/
        $('.form_button').on('click',function(){
            $('body,html').animate({
                scrollTop:$($(this).data('form')).offset().top-120
            },1000)
        })
      /**************  end header  *******************/
      }); // end page 
    }
}
