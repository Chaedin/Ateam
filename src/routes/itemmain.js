import { React, useState } from 'react';
import { MainpageItem1, MainpageItem2, MainpageItem3 } from '../elements/mainpageitem';
import Itemmainbutton from '../elements/itemmainbutton';
import mainimg1 from '../image/temp_main_img_tonedown.jpg';
import buttondata from '../elements/buttondata';
import Topimg from '../elements/topimg';
import style from '../css/itemmain.module.css';

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
            <div className='middle_big_container'>
                <div className='middle_big_container_textbox'>
                    <div className='middle_left_box_child1 middle_slide_up1'>BEST ITEMS</div>
                    <div className='middle_left_box_child2 middle_slide_up2'>"sale for this season"</div>
                </div>
                <div className='slide_box_container'>
                    <ul className='slide_box'>
                        {items.map((Item, index) => (
                            <div className='slide_boximg' key={index}>
                                <Item />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='slide_horizon'></div>

            <div className='bottom_big_container'>
                <div className='menubox_container'>
                    <div className='menu__btn__container'>
                        {buttondata.map((button, index) => (
                            <Itemmainbutton
                                key={index}
                                name={button.name}
                                count={button.count}
                                data_category={button.data_category}
                                className={`menu_button ${selectedCategory === button.data_category ? 'selected' : ''}`}
                                onClick={itembtnclick}
                            />
                        ))}
                    </div>
                </div>
                <div className='menubox_horizon'></div>
                <ul className='bottom_list_big_container'>
                    {items.map((Item, index) => {
                        const itemCategory = buttondata[index % buttondata.length].data_category;
                        const isVisible = selectedCategory === null || selectedCategory === itemCategory;
                        const itemClasses = `bottom_list_small_container ${isVisible ? '' : 'item__invisible'}`;

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
