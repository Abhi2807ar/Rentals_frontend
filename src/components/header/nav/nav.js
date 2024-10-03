import React from "react";
import {Link} from 'react-router-dom';
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
const Nav =()=>{
    return(
        <div className='nav d-flex align items-center'>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-sm-2 part1 d-flex align items-center'>
                    <Button className='bg-g text-white catTab'><GridViewOutlinedIcon/>Browse All categories<KeyboardArrowDownIcon/></Button>
                    </div>
                    <div className='col-sm-8 part2'>
                        <nav>
                           <ul className='list list-inline mb-0 '>
                           <li className='list-inline-item'>
                            <Button><Link>Cameras<KeyboardArrowDownIcon/> </Link>
                            </Button>
                            <div className='dropdown_menu'>
                                <ul>
                                    <li><Button><Link to="/about">Nikon Z50 Mirrorless</Link></Button></li>
                                    <li><Button><Link to="/about">Nikon D850 DSLR</Link></Button></li>
                                    <li><Button><Link to="/about">Nikon D7500 DSLR</Link></Button></li>
                                    <li><Button><Link to="/about">Canon EOS 1DX Mark III</Link></Button></li>
                                    <li><Button><Link to="/about">Sony ZV-1</Link></Button></li>
                                    <li><Button><Link to="/about">Canon EOS Rebel T7 DSL</Link></Button></li>
                                    <li><Button><Link to="/about">Sony RX100 VII</Link></Button></li>
                                    <li><Button><Link to="/about">Nikon Z50 Mirrorless</Link></Button></li>
                                </ul>
                            </div>
                           </li>
                           <li className='list-inline-item'>
                            <Button><Link>Drones<KeyboardArrowDownIcon/></Link></Button>
                            <div className='dropdown_menu'>
                                <ul>
                                    <li><Button><Link to="/about">DJI Mavic</Link></Button></li>
                                    <li><Button><Link to="/about">DJI Air</Link></Button></li>
                                    <li><Button><Link to="/about">DJI Mini</Link></Button></li>
                                    <li><Button><Link to="/about">DJI Avata</Link></Button></li>
                                    <li><Button><Link to="/about">DJI Inspire</Link></Button></li>
                                    <li><Button><Link to="/about">DJI FPV</Link></Button></li>
                                    <li><Button><Link to="/about">RC</Link></Button></li>
                        
                                </ul>
                            </div>
                           </li>
                           <li className='list-inline-item'>
                            <Button><Link>HandHeld<KeyboardArrowDownIcon/></Link></Button>
                            <div className='dropdown_menu'>
                                <ul>
                                    <li><Button><Link to="/about"></Link></Button></li>
                                    <li><Button><Link to="/about">Osmo Pocket 3</Link></Button></li>
                                    <li><Button><Link to="/about">Osmo Action 5 Pro</Link></Button></li>
                                    <li><Button><Link to="/about">DJI RS 4</Link></Button></li>
                                    <li><Button><Link to="/about">DJI RS 3 Mini</Link></Button></li>
                                    <li><Button><Link to="/about">Osmo Mobile 6</Link></Button></li>
                                    <li><Button><Link to="/about">Rode GO 2</Link></Button></li>
                                    <li><Button><Link to="/about">Ronin 2</Link></Button></li>
                                </ul>
                            </div>
                           </li>
                           <li className='list-inline-item'>
                            <Button><Link>Riding essentials<KeyboardArrowDownIcon/></Link></Button>
                            <div className='dropdown_menu'>
                                <ul>
                                    <li><Button><Link to="/about"> Riding Jackets</Link></Button></li>
                                    <li><Button><Link to="/about">Binoculars</Link></Button></li>
                                    <li><Button><Link to="/about">Riding Boots</Link></Button></li>
                                    <li><Button><Link to="/about">Riding Luggage</Link></Button></li>
                                    <li><Button><Link to="/about">Riding Essentials</Link></Button></li>
                                    <li><Button><Link to="/about">Sleeping Bags & Mats</Link></Button></li>
                                    <li><Button><Link to="/about">Camping Tents</Link></Button></li>
                                    <li><Button><Link to="/about">Trekking Jackets</Link></Button></li>
                                    <li><Button><Link to="/about">Trekking Accesories</Link></Button></li>
                                </ul>
                            </div>
                           </li>
                           <li className='list-inline-item'>
                            <Button><Link>Accessories<KeyboardArrowDownIcon/></Link></Button>
                            <div className='dropdown_menu'>
                                <ul>
                                    <li><Button><Link to="/about">Mounts</Link></Button></li>
                                    <li><Button><Link to="/about">Batteries</Link></Button></li>
                                    <li><Button><Link to="/about">Caese</Link></Button></li>
                                    <li><Button><Link to="/about">Mods</Link></Button></li>
                                    <li><Button><Link to="/about">Protection</Link></Button></li>
                                    <li><Button><Link to="/about">Lighting</Link></Button></li>
                                   
                                </ul>
                            </div>
                           </li>
                           <li className='list-inline-item'>
                            <Button><Link>Contact us</Link></Button>
                           </li>
                           
                           </ul>
                        </nav>
                    </div>
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNo d-flex align-items-center ml-auto'>
                      <span><SupportAgentOutlinedIcon/></span>
                      <div className='info ml-3'>
                        <h3 className='text-g mb-0'><a href="http://example.com?name=str">1900-888</a></h3>
                        <p className='mb-0'>24/7 Support center</p>
                      </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;