import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RiParentFill } from 'react-icons/ri';

import kgeclogo from '../assets/kgec-logo-dark.jpeg';
import style from './style.module.scss';

const links = [
  {
    label: 'Parent Feedback',
    href: '/form/parents',
  },
  {
    label: 'Student Feedback',
    href: '/form/student',
  },
  {
    label: 'Teacher Feedback',
    href: '/form/teachers',
  },
  {
    label: 'Alumni Feedback',
    href: '/form/alumni',
  },
  {
    label: 'Employers Feedback',
    href: '/form/employers',
  },
];
const App = () => {
  return (
    <div
      className={style.main__container}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
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
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: 0,
        }}
      >
        <ul
          style={{
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li
              key={link.label}
              style={{
                listStyleType: 'none',
                padding: '0px',
                border: '0.5px solid grey',
                borderRadius: '5px',
                marginBottom: '1rem',
              }}
              className={style.list}
            >
              <Link
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <RiParentFill />
                </div>
                <p>{link.label}</p>
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <FaArrowRightLong />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
