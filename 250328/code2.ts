interface IExam {
  kor: number;
  eng: number;
}

type User = {
  name: string;
  age: number;
};

const exam1: IExam = { kor: 100, eng: 90 };
const exam2: IExam = { kor: 100, eng: 90 };

const total1 = exam1.kor + exam2.eng;
