import React, {useState, useEffect} from 'react';
import '../header/header.css';
import Logo from '../../assets/images/company logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import iconWhishlist from '../../assets/images/wishlist.svg';
import bagicon from '../../assets/images/bag.svg';
import accounticon from '../../assets/images/account.svg';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import  Nav from './nav/nav';
const Header =()=>{

    const [isOpenDropDown,setisOpenDropDown]=useState(false);

    const [categories,setcategories] = useState([
        'Trekking Gear',
        'Riding Gear',
        'Action Cameras',
        'Drones',
        'Cameras',
        'Gaming Console',
        'Winter Wear',
        'Camping Gear',
        'Creator Gear'
    ]);

    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        getCities('https://countriesnow.space/api/v0.1/countries/cities');
    }, []);
    const getCities = async (url) => {
        try {
            const response = await axios.post(url, { country: "India" });
            if (response.data && response.data.data) {
                setCityList(response.data.data);  // Set cities in the state
            }
        } catch (error) {
            console.log(error.message);
        }
    };

   
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src={Logo} alt="Company Logo" />
                        </div>

                        {/* header search start here */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select data={categories} placeholder={'All categories'} icon={false}/>
                                <div className='search'>
                                    <input type='text' placeholder='Search for items....' />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </div>
                        </div>

                        {/* City selection dropdown */}
                        <div className='col-sm-5 d-flex align-items-center'>
                            <div className='ml-auto d-flex align-items-center'>
                            <div className ='countryWrapper'>
                            <Select data={cityList} placeholder={'Select your city...'} icon={<RoomOutlinedIcon style={{opacity:'0.7'}}/>} />
                                
                                </div>
                                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}> 
                                <ul className=' list list-inline mb-0 headerTabs '>
                                    <li className='list-inline-item'>
                                        <span> <img src ={iconWhishlist} />
                                        <span className='badge bg-success rounded-circle'>3</span>


                                        Whishlist


                                        </span>
                                        </li>


                                        <li className='list-inline-item'>
                                        <span> <img src ={bagicon} />
                                        <span className='badge bg-success rounded-circle'>9</span>
                                        Cart
                                        </span>
                                        </li>
                                        <li className='list-inline-item'>
                                          
                                        <span onClick={()=>setisOpenDropDown(!isOpenDropDown)}> <img src ={accounticon} />
                                        <span className='badge bg-success rounded-circle'></span>
                                        Account
                                        </span>
                                        {
                                            isOpenDropDown!=false &&
                                        
                                        <ul className='dropdownMenu'>
                                            <li><Button><PersonOutlineOutlinedIcon/>My Account</Button></li>
                                            <li><Button><LocalShippingOutlinedIcon/>Order Tracking</Button></li>
                                            <li><Button><FavoriteBorderOutlinedIcon/>My Whishlist</Button></li>
                                            <li><Button><SettingsOutlinedIcon/>Settings</Button></li>
                                            <li><Button><LogoutOutlinedIcon/>Logout</Button></li>
                                           
                                        </ul>
                                       } 
                                        </li>
                                    </ul>
                                    </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Nav/>
        </>
    );
}

export default Header;
