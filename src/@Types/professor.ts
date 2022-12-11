export interface Thesis {
  thesisAuthor: string;
  thesisTitle: string;
  thesisBook: string;
  thesisPublicationYear: string;
}

export interface Book {
  bookAuthor: string;
  bookTitle: string;
  bookWritingPage: string;
  bookPublicationYear: string;
}

export interface Other {
  otherType: string;
  otherApplicant: string;
  otherTitle: string;
  otherNumber: string;
  otherApplicationYear: string;
}

export interface ProfessorType {
  professorId: string;
  profile: string;
  professorName: string;
  email: string;
  officeRoom: string;
  education: string[];
  thesis: Array<Thesis>;
  book: Array<Book>;
  other: Array<Other>;
  homePageUrl: string;
}
