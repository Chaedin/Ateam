import React from 'react';
import useProducts from '../../hooks/product_hooks';
import style from '../itemmain/itemmain.module.css';

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
                    <li key={product.no} className={style.bottom_list_small_container} datatype='2'>
                        <div className={style.bottom_list_img}>
                            <a href=''>
                                <img src={require("../../image/pexels-karolina-grabowska-8361484.jpg")} />
                            </a>
                        </div>
                        <div className={style.bottom_list_text}>
                            <div className={style.list_text_left}>
                                {product.name}
                            </div>
                            <div className={style.list_text_right}>
                                {product.price}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
