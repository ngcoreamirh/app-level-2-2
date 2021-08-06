import { ICourse } from "./cource.interface";

// یه قرارداد وجود داره که قبل از اسم اینترفیس یه آی بزاریم
export interface IScore {
    studentName: string;
    course: ICourse; // از نوع اینترفیسی که پایین ساختیم
    courseScore: number;
}
