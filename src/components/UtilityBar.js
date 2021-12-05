import React, { Component } from 'react';

export class UtilityBar extends Component {
    render() {
        return (
            <div class="utility-bar cf" id="UtilityBar">
                <div class="utility-bar-top">
                    <div class="container utility-bar-container">
                        <div class="utility-bar__section utility-bar__search" id="SmartSearch" role="search" aria-labelledby="header-search">
                            <div id="utilitySmartSearch" class="input-group utility-bar__element">
                                <span class="input-group-addon utility-bar__search-icon icon-magnifier"></span>
                                <label for="SearchInput" class="sr-only">Search</label>
                                <input id="SearchInput" type="text" title="Click here to search" class="form-control utility-bar__search-input" placeholder="Search by Keywords, Part Numbers or VIN" autocomplete="off"></input>
                                <span class="input-group-btn" title="Search Button">
                                    <button type="button" class="btn btn-default utility-bar__search-button" id="searchBtn">Go </button>
                                </span>
                            </div>
                            <div id="MyGarage" class="utility-bar__section utility-bar__select-vehicle">
                                <div id="selectVehicle" class="utility-bar__element">
                                    <div id="selectVehicleText" title="My Garage" class="utility-bar__select-vehicle-text">
                                        Select Your Vehicle
                                    </div> 
                                    <button type="button" id="UtilityBarToggleButton" title="Select Vehicle Button" aria-label="Select Vehicle Button" class="utility-bar__select-vehicle-button">
                                        <span class="icon-arrow-down select-vehicle-icon"></span>
                                    </button>
                                </div> 
                                <div class="boxTriangle" >
                                    <span class="top-bot my-garage-top"></span>
                                </div> 
                                <div class="garage__container" >
                                    <div id="garageContainer" class="garage garage-vehicles">
                                        <div class="garage__header">
                                             My Garage
                                            <button type="button" aria-label="close" class="close my-garage__close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="garage__content no-garage-content">
                                            <div class="garage__selection" >
                                                <span aria-hidden="true" class="icon-partman"></span> 
                                                <div class="garage__help">
                                                    You can edit the name of your vehicle by clicking the pencil icon on the right.
                                                </div> 
                                                <div class="garage-vehicles"></div> 
                                                <div class="garage__additions no-vehicles">
                                                    <div class="vehicle-selection-addition">
                                                        <button type="button" class="garage__select-vehicle">
                                                             + Add New Vehicle
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="utility-bar__section" id="CartWidgetUtility" title="Cart">
                            <button type="button" id="CartWidgetHeaderButton" class="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button"><span class="cart-widget-button__icon icon-basket"></span> <span id="NumCartItems" aria-label="0 in Cart. Click to view Cart" class="cart-widget-button__number badge-normal">0</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UtilityBar;
