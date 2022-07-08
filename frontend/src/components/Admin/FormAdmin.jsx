import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddImg from './AddImg';
import SelectCities from './SelectCities';
import styles from '../../styles/admin/admin.module.css';
import SelectCategory from './SelectCategory';
import SelectCheckIn from './SelectCheckIn';
import { fetchAll } from '../../helpers/get';
import { postProduct } from '../../helpers/postProduct';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ProductContext } from '../../contexts/ProductContext';

const FormAdmin = ({ selectedCity, setSelectedCity, selectedCategory, setSelectedCategory, urlBase, showNotification }) => {

  const [ inputValue, setInputValue ] = useState('');
  const [ images, setImages ] = useState([]);
  const [ icons, setIcons] = useState([]);
  const [ successProduct, setSuccessProduct ] = useState(false);
  const [ selectedCheckin, setSelectedCheckin] = useState([]);
  const [ categoryId, setCategoryId ] = useState('');
  const [ cityId, setCityId ] = useState('');
  const [ caracteristicas, setCaracteristicas] = useState([]);
  const [ errorImg, setErrorImg ] = useState(false);
  
  const { user } = useContext(UserContext);
  const { lastProduct } = useContext(ProductContext);

  useEffect(() => {
    fetchAll(urlBase, "characteristics", setIcons);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
      if(images.length<5){
        setErrorImg(true);
    } else{
        setErrorImg(false);
    }
    // eslint-disable-next-line
  }, [images]);

  const deleteImg = (i) => {
    setImages(images.splice( 0, i ));
  }

  const handleClickIcon = () => {
      setCaracteristicas([...caracteristicas, icons.id]);
  }

  return (
    <>
        <h2 className={styles.title}>Crear propiedad</h2>
        <div className={styles.container}>

            <Formik
                initialValues={{
                    productName: "",
                    description: "",
                    address: "",
                    latitude: "",
                    longitude: "",
                    checkinStart: "",
                    checkinEnd: "",
                    houseRules: "",
                    healthAndSafety: "",
                    cancellationPolicy: "",
                    category: { id: '' },
                    characteristics: [ { id: '' } ],
                    city: { id: '' },
                    images: [],
                    bookings: [],
                    user: { id: '' }
                }}

                validate={(valores) => {
                    let errores = {};
                    if(!valores.productName.trim()){
                        errores.productName = "Este campo es requerido";
                    }
                    if(!valores.category.value==={ id: 1 } ){
                        errores.category = "Este campo es requerido";
                    } 
                    if(!valores.address.trim()){
                        errores.address = "Este campo es requerido";
                    }
                    if(!valores.latitude.trim()){
                        errores.latitude = "Este campo es requerido";
                    }
                    if(!valores.longitude.trim()){
                        errores.longitude = "Este campo es requerido";
                    }
                    if(!valores.description.trim()){
                        errores.description = "Este campo es requerido";
                    }
                    if(!valores.houseRules.trim()){
                        errores.houseRules = "Este campo es requerido";
                    }
                    if(!valores.healthAndSafety.trim()){
                        errores.healthAndSafety = "Este campo es requerido";
                    }
                    if(!valores.cancellationPolicy.trim()){
                        errores.cancellationPolicy = "Este campo es requerido";
                    }
                    return errores;
                }}

                onSubmit={(valores, { resetForm }) => {
                  const nuevoProducto = {
                    name: valores.productName,
                    description: valores.description,
                    address: valores.address,
                    latitude: valores.latitude,
                    longitude: valores.longitude,
                    checkinStart: selectedCheckin[0],
                    checkinEnd: selectedCheckin[1],
                    houseRules: valores.houseRules,
                    healthAndSafety: valores.healthAndSafety,
                    cancellationPolicy: valores.cancellationPolicy,
                    category: { id: categoryId },
                    characteristics: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ],
                    city: { id: cityId },
                    images: [],
                    bookings: [],
                    user: { id: user[3] }
                  }
                  
                  if(images.length>4){
                    postProduct(urlBase, "products", nuevoProducto, setSuccessProduct, images);
                  } else{
                    setErrorImg(true);
                    console.log("Debe agregar 5 imágenes como mínimo");
                  }
              
                  /* resetForm(); */
                }}
            >
                {({errors}) => (
                    <Form>
                    <div className={styles.productData}>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="productName">
                                Nombre de la propiedad
                            </label>
                            <ErrorMessage name='productName' component={() => (
                                <div className={styles.error}>{errors.productName}</div>
                            )} />
                            <Field type="text" id="productName" name="productName" placeholder="Ejemplo: Hermitage Hotel" className={styles.input}/>
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="category">
                                Categoría
                            </label>
                            <ErrorMessage name='category' component={() => (
                                <div className={styles.error}>{errors.category}</div>
                            )} />
                            <SelectCategory id='category' selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setCategoryId={setCategoryId} urlBase={urlBase} />
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="address">
                                Dirección
                            </label>
                            <ErrorMessage name='address' component={() => (
                                <div className={styles.error}>{errors.address}</div>
                            )} />
                            <Field type="text" id="address" name="address" placeholder="Ejemplo: San Juan 1298" className={styles.input}/>    
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="city">
                                Ciudad
                            </label>
                            <ErrorMessage name='city' component={() => (
                                <div className={styles.error}>{errors.city}</div>
                            )} />
                            <SelectCities id='city' selectedCity={selectedCity} setSelectedCity={setSelectedCity} setCityId={setCityId} urlBase={urlBase} />
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="latitude">
                                Latitud
                            </label>
                            <ErrorMessage name='latitude' component={() => (
                                <div className={styles.error}>{errors.latitude}</div>
                            )} />
                            <Field type="text" id="latitude" name="latitude" placeholder="Ejemplo: -41.1336557" className={styles.input}/>
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="longitude">
                                Longitud
                            </label>
                            <ErrorMessage name='longitude' component={() => (
                                <div className={styles.error}>{errors.longitude}</div>
                            )} />
                            <Field type="text" id="longitude" name="longitude" placeholder="Ejemplo: -71.3211229" className={styles.input}/>
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="checkinStart">
                                Check in desde
                            </label>
                            <ErrorMessage name='checkinStart' component={() => (
                                <div className={styles.error}>{errors.checkinStart}</div>
                            )} />
                            <SelectCheckIn id="checkinStart" name="checkinStart" title='Check in desde' setSelectedCheckin={setSelectedCheckin} selectedCheckin={selectedCheckin} />
                        </div>
                        <div className={styles.section}>
                            <label className={styles.label} htmlFor="checkinEnd">
                                Check in hasta
                            </label>
                            <ErrorMessage name='checkinEnd' component={() => (
                                <div className={styles.error}>{errors.checkinEnd}</div>
                            )} />
                            <SelectCheckIn id="checkinEnd" name="checkinEnd" title='Check in hasta' setSelectedCheckin={setSelectedCheckin} selectedCheckin={selectedCheckin}/>
                        </div>

                        <div className={styles.area}>
                            <label className={styles.label} htmlFor="description">
                                Descripción
                            </label>
                            <ErrorMessage name='description' component={() => (
                                <div className={styles.error}>{errors.description}</div>
                            )} />
                            <Field as="textarea" type="text" id="description" name="description" placeholder="Escriba aquí" className={styles.input}/>    
                        </div>

                        <div className={styles.attribute}>
                            <h3 className={styles.subtitle}>Agregar características</h3>
                            <div className={styles.attributeBg}>
                                <div className={styles.caracteristicas} role="group" aria-labelledby="checkbox-group" >
                                    {
                                        icons.map( e =>
                                            <label key={e.icon} onClick={handleClickIcon}>
                                                <Field type="checkbox" name="characteristics" value={e.icon}/>  <FontAwesomeIcon icon={e.icon} className='icon-card2' /> {e.name}
                                            </label>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <h3 className={styles.subtitle}>Políticas del producto</h3>
                            <div className={styles.policiesBg}>
                                <div className={styles.blockDescription}>
                                    <h4>Normas de la casa</h4>
                                    <label className={styles.label} htmlFor="houseRules">
                                        Descripción
                                    </label>
                                    <ErrorMessage name='houseRules' component={() => (
                                        <div className={styles.error}>{errors.houseRules}</div>
                                    )} />
                                    <Field as="textarea" type="text" id="houseRules" name="houseRules" placeholder="Escriba aquí" className={styles.input}/>
                                </div>
                                <div className={styles.blockDescription}>
                                    <h4>Salud y Seguridad</h4>
                                    <label className={styles.label} htmlFor="healthAndSafety">
                                        Descripción
                                    </label>
                                    <ErrorMessage name='healthAndSafety' component={() => (
                                        <div className={styles.error}>{errors.healthAndSafety}</div>
                                    )} />
                                    <Field as="textarea" type="text" id="healthAndSafety" name="healthAndSafety" placeholder="Escriba aquí" className={styles.input}/>
                                </div>
                                <div className={styles.blockDescription}>
                                    <h4>Políticas de cancelación</h4>
                                    <label className={styles.label} htmlFor="cancellationPolicy">
                                        Descripción
                                    </label>
                                    <ErrorMessage name='cancellationPolicy' component={() => (
                                        <div className={styles.error}>{errors.cancellationPolicy}</div>
                                    )} />
                                    <Field as="textarea" type="text" id="cancellationPolicy" name="cancellationPolicy" placeholder="Escriba aquí" className={styles.input}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.attribute}>
                            <h3 className={styles.subtitle}>Cargar imágenes</h3>
                            <div style={{color: errorImg? 'block' : 'none'}} className={styles.errorImg}>Debe agregar 5 imágenes como mínimo</div>
                            <div className={styles.imagesBg}>
                                <AddImg images={images} setImages={setImages} inputValue={inputValue} setInputValue={setInputValue} lastProduct={lastProduct}/>
                            </div>

                            <div className={styles.imgsList}>
                                <ol>
                                    {
                                        images.map((e, index) => (
                                            <li key={index} id={index}>
                                                <div className={styles.inputImgPost}>
                                                    {index+1} - {e.urlImage}
                                                </div>
                                                <FontAwesomeIcon
                                                    icon="fa-solid fa-xmark"
                                                    onClick={ () => deleteImg(index) }
                                                    className={styles.delete}
                                                    /> </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        
                        <div className={styles.submitContainer}>
                            <button className={styles.submit} type='submit'>
                                Crear
                            </button>
                        </div>
                    </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormAdmin;
