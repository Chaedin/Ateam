import { React, useState } from 'react';
import Topimg from '../topimg/topimg';
import style from '../itemmain/itemmain.module.css';
import Category from '../items/categoryList';
import ItemSlide from '../items/productSlide'
import Items from '../items/productsItems'


const Itemmain = () => {
    const [selectedCategory, setSelectedCategory] = useState();

    return (
        <>
            <Topimg />
            <div className={style.middle_big_container}>
                <div className={style.middle_big_container_textbox}>
                    <div className={`${style.middle_left_box_child1} ${style.middle_slide_up1}`}>BEST ITEMS</div>
                    <div className={`${style.middle_left_box_child2} ${style.middle_slide_up2}`}>"sale for this season"</div>
                </div>
                <div className={style.slide_box_container}>
                    <ItemSlide />
                </div>
            </div>
            <div className={style.slide_horizon}></div>

            <div className={style.bottom_big_container}>
                <div className={style.menubox_container}>
                    <Category selected={selectedCategory}
                        onFilterChage={(selectedCategory) => setSelectedCategory(selectedCategory)} />
                </div>
            </div>
            <div className={style.menubox_horizon}></div>
            <Items selected={selectedCategory} />

        </>
    );
};

export default Itemmain;