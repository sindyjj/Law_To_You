import React from 'react';
import './MyPostForm.css';

const MyPostForm = () => {
  return (
    <div className='board'>
      <h1 className='title'>내가 쓴 글</h1>
      <table className='board-table'>
        <thead className=''>
          <tr>
            <th>상담번호</th>
            <th>제목</th>
            <th>작성일자</th>
          </tr>
        </thead>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function () {
          return (
            <tbody>
              <tr>
                <td style={{ width: '80px', textAlign: 'center' }}>0</td>
                <td style={{ paddingLeft: '25px' }}>
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href=''
                  >
                    게시글 제목이 들어갈 공간입니다.
                  </a>
                </td>
                <td style={{ width: '100px', textAlign: 'center' }}>
                  23.12.07
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* 여기가 페이징 공간 */}
    </div>
  );
};

export default MyPostForm;
