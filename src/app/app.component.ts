import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddScoreComponent } from './add-score/add-score.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  
  // ******************** این سورس، ترکیبی از مفاهیم انگولار رو شامل میشه ********************
  // ***************** تو لول های بعدی ادامه این اپ رو پیش میریم و قابلیت های بیشتری اضافه میکنیم *****************
  //==================================================================================================================

  // یکی از راه های دسترسی به متغیرهای کامپوننت فرزند داخل کامپوننت پدر استفاده از ویوچایلد هست
  @ViewChild(AddScoreComponent) scoreComponent : AddScoreComponent;

  constructor() {
   
  }

  ngAfterViewInit() {
    this.scoreComponent.courseList.push({courceId:106,courseTitle:"پروژه (افزوده شده از کامپوننت App)"})
  }

    
  openModal() {
    document.getElementById('a').style.display = "block";
    document.getElementById('b').style.display = "block";
  }

  
  closeModal() {
    document.getElementById('a').style.display = "none";
    document.getElementById('b').style.display = "none";
  }
  
//===========================================================================
}
