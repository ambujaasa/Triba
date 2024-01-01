import React from 'react';
import MapView from './Map';
import { FaPowerOff, FaSearch, FaShoppingCart, FaUndo, FaHome, FaUser, FaFilter } from 'react-icons/fa';

import './index.css';

const MapComponent = function(props) {
    return(
        <div className="map-wrapper">
            <MapView />
            <SearchControl />
            <LinksSection />
            <ShortcutBtnGroup />
        </div>
    )
}

const SearchControl = (props) => {
    return(
        <div className='search-div'>
            <div className='search-section'>
                <div className='title'>
                    GFOKK
                </div>

                <div className='input-div'>
                    <div className='search-icon'>
                        <FaSearch />
                    </div>
                    <input 
                        className='input-search'
                        type={"text"}
                        placeholder='Search for Restuarant'
                    />
                </div>

                <div className='filter-btn'>
                    <FaFilter />
                </div>
            </div>

            <div className='cart-button'>
                <FaShoppingCart />
            </div>
        </div>
    )
}

const LinksSection = () => {
    return(
        <div className='tos-section'>
			<div>
                <a href="#" className='tos-link'>
					Dashboard
				</a>
				<a href='#' className='tos-link'>
					Terms
				</a>
				<a href='' className='tos-link'>
					User Agreement
				</a>
				<a href='' className='tos-link'>
					Help Centre
				</a>

				<a href='#' className='tos-link'>
					Privacy/Terms
				</a>
			</div>
		</div>
    )
}


const ShortcutBtnGroup = (props) => {
    return(
        <div className='btn-aside-section'>
            <div className='btn-group'>
                <div className='btn-item'>
                    <FaUser />
                </div>

                <div className='btn-item'>
                    <FaHome />
                </div>

                <div className='btn-item'>
                    <FaUndo />
                </div>

                <div className='btn-item'>
                    <FaPowerOff />
                </div>
            </div>
        </div>
    )
}
export default MapComponent;