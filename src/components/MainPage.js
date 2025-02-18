import cn from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [targetDivId, setTargetDivId] = useState(null);

  const handleMouseHover = (e) => {
    setTargetDivId(e.target.parentNode.id);
  };
  const handleMouseLeave = () => {
    setTargetDivId('');
  };

  return (
    <div className='mainPageDiv'>
      <div className='logom-white-icon' />

      <div
        id='mainSec1'
        className={cn('secDefault1', {
          hoveredSec1: targetDivId === 'mainSec1',
        })}
      >
        <Link
          to='/faq'
          className='insteadOfSpan'
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          백문백답
        </Link>
      </div>

      <div
        id='mainSec2'
        className={cn('secDefault2', {
          hoveredSec2: targetDivId === 'mainSec2',
        })}
      >
        <Link
          to='/counsel'
          className='insteadOfSpan'
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          온라인상담
        </Link>
      </div>

      <div
        id='mainSec3'
        className={cn('secDefault3', {
          hoveredSec3: targetDivId === 'mainSec3',
        })}
      >
        <Link
          to='/free'
          className='insteadOfSpan'
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          고민나누기
        </Link>
      </div>
      <div className='mainJoinLogin'>
        {/* <span className="mainJoinBtn">회원가입</span> */}
        {/* <div className="mainBtnBar" /> */}
        {/* <span className="mainLoginBtn">로그인</span> */}
        <Link
          to='/join'
          className='mainJoinBtn'
        >
          회원가입
        </Link>
        <div className='mainBtnBar' />
        <Link
          to='/login'
          className='mainLoginBtn'
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
