import React, { useState, useEffect } from 'react';
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Select = ({ data, placeholder, icon }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);

    const [listData, setListData] = useState([]);
    const [listData2, setListData2] = useState([]);

    // Update listData and listData2 whenever data prop changes
    useEffect(() => {
        setListData(data);
        setListData2(data);
    }, [data]);

    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    };

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setIsOpenSelect(false);
        setSelectedItem(name);
    };

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredList = listData2.filter((item) => item.toLowerCase().includes(keyword));
        setListData(filteredList);
    };

    return (
        <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
            <div className='selectDropWrapper cursor position-relative'>
                {icon}
                <span className='openSelect' onClick={openSelect}>
                    {selectedItem.length>14 ? selectedItem.substr(0,14) + '...' : selectedItem} <KeyboardArrowDownIcon className='arrow' />
                </span>
                {isOpenSelect && (
                    <div className='selectDrop'>
                        <div className='SearchField'>
                            <input type='text' placeholder='Explore...' onChange={filterList} />
                        </div>
                        <ul className='searchResults'>
                            <li
                                key={0}
                                onClick={() => closeSelect(0, placeholder)}
                                className={`${selectedIndex === 0 ? 'active' : ''}`}
                            >
                                {placeholder}
                            </li>
                            {listData.map((item, index) => (
                                <li
                                    key={index + 1}
                                    onClick={() => closeSelect(index + 1, item)}
                                    className={`${selectedIndex === index + 1 ? 'active' : ''}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default Select;
