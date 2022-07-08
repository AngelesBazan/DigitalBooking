import React from 'react';
import '../styles/title.css';


const Title = (props) => {
  const{text}=props;


  return (
    <div className='title-container'>
      <label className='title-label'> {text} </label>

    </div>
  )
}

export default Title