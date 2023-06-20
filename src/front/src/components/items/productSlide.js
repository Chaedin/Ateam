import React from 'react';
import useProducts from '../../hooks/product_hooks';
import style from '../itemmain/itemmain.module.css';

export default function ProductSlide() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ul className={style.slide_box}>
        {products.map((product) => (
          <li key={product.no}  datatype='2'>
            <a href=''>
            <img className={style.slide_boximg} src={require("../../image/pexels-karolina-grabowska-8361484.jpg")}/>
            </a>      
          </li>
        ))}
      </ul>
    </>
  );
}
