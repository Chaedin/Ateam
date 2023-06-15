import React from 'react';
import useCategory from '../../hooks/category_hooks';
import style from '../itemmain/itemmain.module.css';

export default function CategoryList({ selected, onFilterChage }) {
    const { category, loading, error } = useCategory();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (

        <div className={style.menu__btn__container}>
            {category.map((list) => (
                <button key={list.tag_no} className={`${style.menu_button} ${selected === list && style.selected}`} onClick={() => onFilterChage(list)}>
                    <span >{list.name}</span>
                </button>
            ))}
        </div>
    );
}