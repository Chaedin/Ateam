import React from 'react';
import useProducts from '../../hooks/best_product_hooks';
import style from '../main/main.module.css';

export default function ProductsList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ul className={style.best_seller_items}>
        {products.map((product) => (
          <li key={product.no} className={style.best_seller_item} datatype='2'>
            <a href=''>
              <div className={style.item_thumbnail}>
            <img src={require("../../image/pexels-karolina-grabowska-8361484.jpg")}/>
              <div className={style.discription_detail}>
                <h2>{product.name}</h2>
                <p>{product.discription}</p>
              </div>
              </div>
            </a>
              <div className={style.discription_item}>
              <div className={style.discription_item_name}>{product.name}</div>
              <div className={style.discription_item_price}>{product.price}</div>
            </div>      
          </li>
        ))}
      </ul>
    </>
  );
}
