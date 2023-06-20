import React from 'react';
import useProducts from '../../hooks/product_hooks';
import style from '../itemmain/itemmain.module.css';
import axios from "axios";

export default function ProductsItmes() {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <ul className={style.bottom_list_big_container}>
                {products.map((product) => (
                    <li key={product.product_no} className={style.bottom_list_small_container} datatype='2'>
                        <div className={style.bottom_list_img}>
                            <a href=''>
                                <img src={`http://localhost:8080/${product.product_mainimg}`} alt={product.product_name} />
                                {/*{<img src={`http://localhost:8080/static/image/001_01.jpg`}/>}*/}
                            </a>
                        </div>
                        <div className={style.bottom_list_text}>
                            <div className={style.list_text_left}>
                                {product.product_name}
                            </div>
                            <div className={style.list_text_right}>
                                {product.product_price}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
