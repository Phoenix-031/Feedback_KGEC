
import style from './style.module.scss'

import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPerson4 } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

import Link from 'next/link'
import Image from 'next/image';

import { Card } from 'antd';

import kgeclogo from '../assets/kgec-logo-dark.jpeg'

const App = () => {

  
  return (
    <div className={style.main__container}>
      <div className={style.kgec__logo__container}>
        <Image src={kgeclogo} alt="KGEC Logo" />
      </div>
      <div>
        <p className={style.main__container__heading__sub}>Kalyani Government Engineering College</p>
      </div>
      <div className={style.main__container__heading}>
        <p>Feedback Portal</p>
      </div>
      <div className={style.main__flex__container}>
        <div>
          <Link href='/parents' >
            <div><RiParentFill /></div>
            Parent Feedback
          </Link>
        </div>
        <div>
          <Link href='/student'>
            <div><PiStudentBold /></div>
            Student Feedback
          </Link>
        </div>
        <div>
        <Link href='/teachers'>
          <div><FaChalkboardTeacher /></div>
          Teacher Feedback
        </Link>
        </div>
        <div>
        <Link href='/alumni'>
          <div><MdPerson4 /></div>
          Alumni Feedback
        </Link>
        </div>
        <div>
        <Link href='/employers'>
          <div><BsFileEarmarkPersonFill /></div>
          Employers Feedback
        </Link>
        </div>
      </div>
    </div>
  )
}

export default App