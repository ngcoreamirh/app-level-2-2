import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/cource.interface';
import { IScore } from 'src/app/models/score.interface';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.scss']
})
export class AddScoreComponent implements OnInit {

  // چون میخواهیم نمره هارو به یه لیست اضافه کنیم یک آرایه از نوع اینترفیسی که ساختیم لازم داریم
  scoreList: IScore[] = []; // بهتره همینجا آرایه هارو مساوی خالی قرار بدیم که بعدا گیر نده بهمون
  courseList: ICourse[] = [];
  alertMessage: string = ""; // برا پیغامی که میخواهیم نشون بدیم
  studentName: string = ""; // twoWayBinding برای استفاده از روش 
  // templateRefrence استفاده کردیم هم از روش twoWay برای بایندیگ، هم از روش 

  constructor() { }

  ngOnInit(): void {
    this.courseList = [
      {courceId: 101, courseTitle: "مهندسی نرم افزار"},
      {courceId: 102, courseTitle: "هوش مصنوعی"},
      {courceId: 103, courseTitle: "معماری کامپیوتر"},
      {courceId: 104, courseTitle: "ریاضی گسسته"},
      {courceId: 105, courseTitle: "کارآموزی"}
    ];

    this.scoreList = [
      {studentName:"مهنّا ابراهیمی",course:{courceId:102,courseTitle:"هوش مصنوعی"},courseScore:10},
      {studentName:"هانیه امینی",course:{courceId:104,courseTitle:"ریاضی گسسته"},courseScore:2},
      {studentName:"علیرضا محمدی",course:{courceId:104,courseTitle:"ریاضی گسسته"},courseScore:18},
      {studentName:"سجاد میرزایی",course:{courceId:105,courseTitle:"کارآموزی"},courseScore:19},
      {studentName:"عبدالله عامری",course:{courceId:104,courseTitle:"ریاضی گسسته"},courseScore:20},
    ];
   
  }

  onAddScore(selectedCourse: HTMLSelectElement,courseScore: string) {
    if(!this.isEmpty(this.studentName) && selectedCourse.value != "0" && !this.isEmpty(courseScore)) {
      this.alertMessage = "";
      // یه شی از نوع اینترفیسمون ساختیم تا با مقادیری که تو اینپوت ها وارد میکنیم پرش کنیم
      // و در نهایت به لیست اصلیمون اضافه کنیم
      let score:IScore = {
        studentName: this.studentName,
        course: {
          courceId: +selectedCourse.options[selectedCourse.selectedIndex].value, // به علاوه رشته رو به عدد تبدیل میکنه
          courseTitle: selectedCourse.options[selectedCourse.selectedIndex].innerText
        },
        courseScore: +courseScore 
      };
      this.scoreList.push(score);
    }
    else {

        window.scrollTo(0, 0);
        this.alertMessage = "لطفا اطلاعات را به طور کامل وارد کنید 🙄";
        let width = 0;
        let interval = setInterval(() => {
          if (width >= 100) {
            clearInterval(interval);
          } else {
            document.getElementById("progress").style.width = width++ + "%";
          }
        },40)
        setTimeout(() => {
          this.alertMessage = "";
        }, 4000);
     
    }
  }

  onDeleteScore(score) {
     this.scoreList.splice(this.scoreList.indexOf(score),1);
  }








  // این متد چک میکنه که رشته خالی وارد نشده باشه
  // 😉 برداشتم کدشو  stackOverflow از
   isEmpty(text: string): boolean {
    return text === null || text.match(/^ *$/) !== null;
  };

}
