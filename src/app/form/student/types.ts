export const Departments = {
  COMPUTER_SCIENCE_AND_ENGINEERING: 'Computer Science and Engineering',
  ELECTRONICS_AND_COMMUNICATION_ENGINEERING:
    'Electronics and Communication Engineering',
  ELECTRICAL_ENGINEERING: 'Electrical Engineering',
  MECHANICAL_ENGINEERING: 'Mechanical Engineering',
  INFORMATION_TECHNOLOGY: 'Information Technology',
  MASTERS_OF_COMPUTER_APPLICATION : "Masters of Computer Applications"
} as const;

export const YearOfStudy = {
  FIRST: 'First',
  SECOND: 'Second',
  THIRD: 'Third',
  FOURTH: 'Fourth',
} as const;

export enum GraduationLevel {
  "UnderGraduate" ="Undergraduate",
  "PostGraduate" ="Postgraduate"
}