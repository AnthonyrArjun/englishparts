import React, { Component } from 'react'
import logo from '../files/logo.png'

export class HeaderNavigationContainer extends Component {
    render() {
        return (
            <div className="header-navigation sp-nav dealer" id="HeaderNavigationContainer">
                <div className="navbar navbar-default header-nav-default">
                    <nav className="navbar navbar-default headerNav">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="nav-links" />
                                <div className="navbar-header header-logo">
                                    <a className="navbar-brand business-logo" href="#">
                                        <img alt="" src= {logo} />
                                    </a>
                                </div>
                                <div className="navbar-text business-information">
                                    <div className="business-information__name heading-2" href="/">EnglishParts.com</div>
                                <div className="business-contact-details">
                                    <div className="contact-detail business-contact-details__location">5850 Stadium Dr, Kalamazoo, MI 49009</div>
                                    <div className="contact-detail business-contact-details__phone">866.467.1776</div>
                                    <div className="contact-detail business-contact-details__email"><a tabIndex={0} className="small" href="#">sales@englishparts.com</a></div>
                                </div>
                            </div>
                            <button type="button" className="navbar-toggle collapsed header-mobile-toggle" data-toggle="collapse" aria-expanded="false" id="MobileNavToggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <ul className="nav navbar-nav navbar-right navigation-link-group" id="HeaderNavigationLinks">
                                <li id="PartsDropdown" className="dropdown navigation-list-item">
                                    <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle navigation-link category-links-button">Parts</a> 
                                    <ul className="dropdown-menu navlink-dropdown-menu">{/**/} </ul>
                                </li>
                                <li>
                                    <a className="about-us-link navigation-links heading-4">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default HeaderNavigationContainer
