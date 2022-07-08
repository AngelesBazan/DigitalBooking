import React from 'react';
import styles from '../../styles/searchbar/searchBar.module.css'

const Title = (props) => {
  const{text}=props;


  return (
    <div className={styles.titleContainer}>
      <label className='title-sb-label'> {text} </label>

    </div>
  )
}

export default Title