import Image from 'next/image';
import Link from 'next/link';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdPerson4 } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { RiParentFill } from 'react-icons/ri';

import kgeclogo from '../assets/kgec-logo-dark.jpeg';
import style from './style.module.scss';

const App = () => {
  return (
    <div className={style.main__container}>
      <div className={style.kgec__logo__container}>
        <Image src={kgeclogo} alt="KGEC Logo" />
      </div>
      <div>
        <p className={style.main__container__heading__sub}>
          Kalyani Government Engineering College
        </p>
      </div>
      <div className={style.main__container__heading}>
        <p>Feedback Portal</p>
      </div>
      <div className={style.main__flex__container}>
        <div>
          <Link href="/form/parents">
            <div>
              <RiParentFill />
            </div>
            <p>Parent Feedback</p>
          </Link>
        </div>
        <div>
          <Link href="/form/student">
            <div>
              <PiStudentBold />
            </div>
            Student Feedback
          </Link>
        </div>
        <div>
          <Link href="/form/teachers">
            <div>
              <FaChalkboardTeacher />
            </div>
            Teacher Feedback
          </Link>
        </div>
        <div>
          <Link href="/form/alumni">
            <div>
              <MdPerson4 />
            </div>
            Alumni Feedback
          </Link>
        </div>
        <div>
          <Link href="/form/employers">
            <div>
              <BsFileEarmarkPersonFill />
            </div>
            Employers Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
