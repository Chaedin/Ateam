import { React, useState } from 'react';
import { MainpageItem1, MainpageItem2, MainpageItem3 } from '../itemmain/mainpageitem';
import Itemmainbutton from '../itemmain/itemmainbutton';
import buttondata from '../itemmain/buttondata';
import Topimg from '../topimg/topimg';
import style from '../itemmain/itemmain.module.css';

const Itemmain = () => {
    const items = [MainpageItem1, MainpageItem2, MainpageItem3, MainpageItem1, MainpageItem2, MainpageItem3, MainpageItem1, MainpageItem2, MainpageItem3];
    const [selectedCategory, setSelectedCategory] = useState(null);

    const itembtnclick = (event) => {
        const datafilter = event.target.dataset.data_category;
        setSelectedCategory(datafilter);
    };

    return (
        <>
            <Topimg/>
            <div className={style.middle_big_container}>
                <div className={style.middle_big_container_textbox}>
                    <div className={`${style.middle_left_box_child1} ${style.middle_slide_up1}`}>BEST ITEMS</div>
                    <div className={`${style.middle_left_box_child2} ${style.middle_slide_up2}`}>"sale for this season"</div>
                </div>
                <div className={style.slide_box_container}>
                    <ul className={style.slide_box}>
                        {items.map((Item, index) => (
                            <div className={style.slide_boximg} key={index}>
                                <Item />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.slide_horizon}></div>

            <div className={style.bottom_big_container}>
                <div className={style.menubox_container}>
                    <div className={style.menu__btn__container}>
                        {buttondata.map((button, index) => (
                            <Itemmainbutton
                                key={index}
                                name={button.name}
                                count={button.count}
                                data_category={button.data_category}
                                className={`${style.menu_button} ${selectedCategory === button.data_category ? 'selected' : ''}`}
                                onClick={itembtnclick}
                            />
                        ))}
                    </div>
                </div>
                <div className={style.menubox_horizon}></div>
                <ul className={style.bottom_list_big_container}>
                    {items.map((Item, index) => {
                        const itemCategory = buttondata[index % buttondata.length].data_category;
                        const isVisible = selectedCategory === null || selectedCategory === itemCategory;
                        const itemClasses = `${style.bottom_list_small_container} ${isVisible ? '' : 'item__invisible'}`;

                        return (
                            <div
                                key={index}
                                className={itemClasses}
                                data-category={itemCategory}
                            >
                                <Item />
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Itemmain;
