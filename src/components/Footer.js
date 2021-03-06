import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer" role="contentinfo">
                <div className="panel">
                    <div className="panel-body links-panel">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3 contactLinksList">
                            <h2 className="list-header">About</h2>
                            <ul className="list-unstyled links-list">
                                <li className="acceptedPaymentsLink"><a href="#" title="Accepted Payment">Accepted Payment</a></li>
                                <li className="contactLink"><a href="#" title="Contact Us">Contact Us</a></li>
                                <li className="policyLink"><a href="#" title="Policies">Policies</a></li>
                                <li className="refundsLink"><a href="#" title="Refunds">Refunds</a></li>
                                <li className="returnsLink"><a href="#" title="Returns">Returns</a></li>
                            </ul>
                            </div>
                            <div className="col-md-3 legalLinksList">
                            <h2 className="list-header">Legal</h2>
                            <ul className="list-unstyled links-list">
                                <li title="Policies"><a href="#" title="Policies">Policies</a></li>
                                <li />
                            </ul>
                            </div>
                            <div className="col-md-3 miscLinksList">
                            <h2 className="list-header">Links</h2>
                            <ul className="list-unstyled links-list">
                                <li><a href="#" title="My Information">My Information</a></li>
                                <li><a href="#" title="Testimonials">Testimonials</a></li>
                            </ul>
                            <ul className="list-unstyled links-list sites-list">
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="panel-body disclaimer-panel">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div id="disclaimer-icon">
                            </div>
                            <div className="disclaimer-text">
                                While every reasonable effort is made to ensure the accuracy of this data, we are not responsible for any errors or omissions contained on these pages. Please verify any information in question with a sales representative.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="logoCopyrightContainer">
                        <div className="row panel-body copyright-panel">
                        <div className="container">
                            <div className="row copyrightRow">
                            <div className="copyright-column">
                                ?? 2021
                                EnglishParts.com
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="panel-body copyright-panel spLogoPanel">
                        <div className="container">
                            <div className="row spLogoRow">
                            <div className="spLogoColumn">
                                <div className="spLogo">
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
