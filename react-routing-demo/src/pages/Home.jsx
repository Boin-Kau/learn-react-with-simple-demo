import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [word, setWord] = useState('');


  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  }

  return (
    <div className="page-container" style={{ fontSize: "32px" }}>
      홈화면입니다.
      <input value={word} onChange={(e) => setWord(e.target.value)}/>
      <button onClick={onClickWord}>확인</button>
    </div>
  );
}
