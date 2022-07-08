import React from 'react';
import styles from '../../styles/admin/admin.module.css';

const AddImg = ({ images, setImages, inputValue, setInputValue, lastProduct }) => {

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const imgPpal = {
    title: "main",
    urlImage: inputValue,
    product: { id: lastProduct+1 }
  }
  const nuevaImagen = {
    title: "other",
    urlImage: inputValue,
    product: { id: lastProduct+1 }
  }
  const addImgs = () =>{
    if( images.length === 0 ){
      setImages([imgPpal]);
    } else if(( images.length>0 )){
      setImages( imgs => [...imgs, nuevaImagen]);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if( inputValue.trim().length > 2) {
      addImgs();
      setInputValue('');
    }
  }

  return (
    <div className={styles.imgContainer}>
        <input 
          type="text"
          placeholder='Insertar https://'
          value={ inputValue }
          onChange={ handleInputChange }
          className={styles.inputImg}
        />
        <div className={styles.plus} onClick={ handleClick } >
            +
        </div>
    </div>
  )
}

export default AddImg