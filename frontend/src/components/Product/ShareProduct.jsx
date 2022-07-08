import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from "../../contexts/ProductContext";
import { UrlContext } from '../../contexts/UrlContext';
import axios from "axios";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon } from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import '../../styles/product/shareProducts.css'


const ShareProduct = () => {
  const { idP, productCategoryData, productData, setProductData } = useContext(ProductContext);
  const { urlBase } = useContext(UrlContext);
  const url = "https://doxh45tco5757.cloudfront.net";
  
  useEffect(() => {
    const idProduct = localStorage.getItem('productId')
    const fetchProductData3 = async () => {
      try {
        console.log(`http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com/products/${idProduct}`)
        const resp = await axios.get(`http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com/products/${idProduct}`);
        setProductData(resp.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchProductData3()
  }, [])


  const [urlCompleta, setUrlCompleta] = useState("")
  useEffect(() => {
    if(productData){
      setUrlCompleta(productData.category ? `${url}/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}` : '')
    }
  }, [productData])

  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div style={{ display: "flex" }}>
      <FontAwesomeIcon
        className='share-icon'
        icon={faShareNodes}
        onClick={handleClick}
        style={{ fontSize: "1.5rem" }}

      /> {clicked ? ""

        :
        <div className='icons-container' style={{ display: "flex", flexDirection: "row", margin: "0" }}>
          <FacebookShareButton url={url} >
            <FacebookIcon className='icons-share' />
          </FacebookShareButton>

          <TwitterShareButton url={url}>
            <TwitterIcon className='icons-share' />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon className='icons-share' />
          </WhatsappShareButton>

          <EmailShareButton url={url}>
            <EmailIcon className='icons-share' />
          </EmailShareButton>

        </div>
      }
    </div>
  )
}

export default ShareProduct 