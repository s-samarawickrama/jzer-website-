import React from 'react';

const Cursor = () => {
  return (
    <div id="cursor" style={{ left: 0, top: 0 }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#d8d9db" strokeWidth="4" fill="none" strokeLinecap="round">
          <circle cx="22" cy="70" r="12" />
          <circle cx="22" cy="22" r="12" />
          <line x1="30" y1="62" x2="85" y2="15" />
          <line x1="30" y1="30" x2="85" y2="78" />
        </g>
      </svg>
    </div>
  );
};

export default Cursor;
