let studentID: number = 12345
let studentName: string = 'Dongyeong Kim';
let age: number = 24;
let gender: string = 'male';
let subject: string = 'Javascript';
let courseCompleted: boolean = false;

interface Student {
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
   // addComment (comment: string): string;
    addComment?: (comment: string) => string;
}

function getStudentDetails(studentID: number): Student
{
    return {
        studentID: 12345,
        studentName: 'Kim',
        age: 24,
        gender : 'male',
        subject: 'TypeScript',
        courseCompleted: true
    };
}

function saveStudentDetails(student: Student): void {
}

saveStudentDetails({
    studentID: 12345,
    studentName: 'Kim',
    age: 24,
    gender : 'male',
    subject: 'TypeScript',
    courseCompleted: true
})