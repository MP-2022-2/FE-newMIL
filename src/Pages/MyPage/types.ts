export interface MyPageTrackType {
  msg: string;
  status: number;
  majorSubjectList: [
    {
      subject: string;
      gpa: number;
    },
  ];
  nonMajorSubjectList: [
    {
      subject: string;
      gpa: number;
    },
  ];
  majorTotal: number;
  nonMajorTotal: number;
}
