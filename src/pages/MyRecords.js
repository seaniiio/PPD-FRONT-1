import React from 'react';
import Square from '../components/Square';
import personIcon from '../images/icon_person.png';
import Top from '../components/Top'


const MyRecords = () => {
  return (
    <div>
        <Top state='visible' text='보행기록'></Top>
        <div className="square-container">
        <Square color="#cce5ff" imageUrl={personIcon} buttonText="보행기록 1" />
        <Square color="#cce5ff" imageUrl={personIcon} buttonText="보행기록 2" />
        <Square color="#cce5ff" imageUrl={personIcon} buttonText="보행기록 3" />
        <Square color="#ffd6e5" imageUrl={personIcon} buttonText="보행기록 4" />
        </div>
    </div>
  );
};

export default MyRecords;
