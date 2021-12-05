import React, { Component } from 'react'
import austinhealey from '../files/austin-healey.png'
import jaguar from '../files/jaguar.png'
import mg from '../files/mg.png'
import triumph from '../files/triumph.png'
import body from '../files/body.jpg'
import brakesystem from '../files/brake-system.jpg'
import cables from '../files/cables.jpg'
import carcare from '../files/car-care.jpg'
import competitionparts from "../files/competition-parts.jpg"
import tops from "../files/tops-covers.jpg"
import cooling from "../files/cooling.jpg"
import electricalcomponenets from"../files/electrical-components.jpg"
import enginedriveline from "../files/engine-driveline.jpg"
import exhaust from "../files/exhaust-emission.jpg"
import exterior from "../files/exterior.jpg"
import fuelsystem from "../files/fuel-system.jpg"
import interior from "../files/interior.jpg"
import maintenance from "../files/maintenance.jpg"
import oil from "../files/oil-system.jpg"
import handling from "../files/performance-handling.jpg"
import suspension from "../files/suspension.jpg"
import transmission from "../files/transmission.jpg"



export class ContentWrapper extends Component {
  render() {
    return (
            <div id="contentWrapper">
              <div className id="contentDiv" role="main">
                <div id="Content_PageBody_heroJumbotron" className="jumbotron dealer">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 jumbotronElementContainer">
                        <div id="Content_PageBody_CarouselTextPlacement" className="panel heroPlacementContainer">
                          <div className="panel-heading">
                            <h2 className="panel-title">
                              Premium Austin Healey, Jaguar, MG, and Triumph Parts
                            </h2>
                          </div>
                          <div className="panel-body">
                            <span className="defaultHeroBodyText">
                              <span className="bodyTextSpan">
                                Unmistakable style. That's what you love about your Austin Healey, Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large selection of premium repair, maintenance and restoration parts for classic British cars. You know you can count on us because we're located in Kalamazoo, MI. Finding the right premium repair parts has always been our first priority. Our state of the art premium parts diagrams ensure that you're getting the perfect part the first time. Our experienced team knows these cars inside and out, and is here to help. Excellence. The first time, every time.				
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Content_PageBody_RefineVehicleLinksUpdatePanel">
                  <div id="Content_PageBody_VehicleSelector" className="selectVehicle">
                    <div id="Content_PageBody_div_seoLinks" className="container">
                      <div id="Content_PageBody_seoContainerDiv" className="seoContainer">
                        <div id="Content_PageBody_seoTitle" className="seoTitle lead text-center">
                          <h2>
                            Select a  Make
                          </h2>
                        </div>
                        <div id="Content_PageBody_RefineResultsDefaultContainer" className="row refineResults">
                          <a className="seoLinkItem Make" href="#" title="Shop OEM Austin Healey Parts">
                            <img src={austinhealey} alt="" />
                            <div>Austin Healey</div>
                          </a>
                          <a className="seoLinkItem Make" href="#" title="Shop OEM Jaguar Parts">
                            <img src={jaguar} alt="" />
                            <div>Jaguar</div>
                          </a>
                          <a className="seoLinkItem Make" href="#" title="Shop OEM MG Parts">
                            <img src={mg} alt="" />
                            <div>MG</div>
                          </a>
                          <a className="seoLinkItem Make" href="#" title="Shop OEM Triumph Parts">
                            <img src={triumph} alt="" />
                            <div>Triumph</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Content_PageBody_QuickStartControl_QuickStartUpdatePanel" className="quick-start-update-panel">
                  <div id="Content_PageBody_QuickStartControl_categoriesSelector" className="QuickStartLinksControl">
                    <div id="Content_PageBody_QuickStartControl_div_quickStartLinks" className="quickStart-Categories">
                      <div id="Content_PageBody_QuickStartControl_QuickStartPlacementAlternative" className="quickStartContentWrap qsLinksContainer">
                        <div className="quickStartAltTitle">
                          <h2>
                            Select a Category
                          </h2>
                        </div>
                        <div className="quickStartAltText">
                        </div>
                      </div>
                      <div className="qsLinksContainer">
                        <div id="Content_PageBody_QuickStartControl_CategoryList" className="category-panel">
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Body Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={body} aria-hidden="true" alt="Shop OEM Body Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Body</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Brake System Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={brakesystem} aria-hidden="true" alt="Shop OEM Brake System Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Brake System</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Cables">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={cables} aria-hidden="true" alt="Shop OEM Cables" />
                              </div>
                              <div className="qsdisplayStringDiv">Cables</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Car Care, Tools and Shop Supplies">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={carcare} aria-hidden="true" alt="Shop OEM Car Care, Tools and Shop Supplies" />
                              </div>
                              <div className="qsdisplayStringDiv">Car Care, Tools and Shop Supplies</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Competition Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={competitionparts} aria-hidden="true" alt="Shop OEM Competition Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Competition Parts</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={tops} aria-hidden="true" alt="Shop OEM Convertible Tops, Hard Tops and Tonneau Covers" />
                              </div>
                              <div className="qsdisplayStringDiv">Convertible Tops, Hard Tops and Tonneau Covers</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Cooling System Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={cooling} aria-hidden="true" alt="Shop OEM Cooling System Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Cooling System</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Electrical Components">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={electricalcomponenets} aria-hidden="true" alt="Shop OEM Electrical Components" />
                              </div>
                              <div className="qsdisplayStringDiv">Electrical Components</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Engine and Driveline Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={enginedriveline} aria-hidden="true" alt="Shop OEM Engine and Driveline Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Engine and Driveline</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Exhaust and Emissions">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={exhaust} aria-hidden="true" alt="Shop OEM Exhaust and Emissions" />
                              </div>
                              <div className="qsdisplayStringDiv">Exhaust and Emissions</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Exterior Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={exterior} aria-hidden="true" alt="Shop OEM Exterior Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Exterior</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Fuel Systems">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={fuelsystem} aria-hidden="true" alt="Shop OEM Fuel Systems" />
                              </div>
                              <div className="qsdisplayStringDiv">Fuel Systems</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Interior Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={interior} aria-hidden="true" alt="Shop OEM Interior Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Interior</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Maintenance Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={maintenance} aria-hidden="true" alt="Shop OEM Maintenance Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Maintenance</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Oil System Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={oil} aria-hidden="true" alt="Shop OEM Oil System Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Oil System</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Performance & Handling">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={handling} aria-hidden="true" alt="Shop OEM Performance & Handling" />
                              </div>
                              <div className="qsdisplayStringDiv">Performance &amp; Handling</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Suspension Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={suspension} aria-hidden="true" alt="Shop OEM Suspension Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Suspension</div>
                            </div>
                          </a>
                          <a className="qsCategoryLinkItem" href="#" title="Shop OEM Transmission, Gearbox and Clutch Parts">
                            <div className="qsCategoryWrapper">
                              <div className="qsImgWrapper">
                                <img src={transmission} aria-hidden="true" alt="Shop OEM Transmission, Gearbox and Clutch Parts" />
                              </div>
                              <div className="qsdisplayStringDiv">Transmission, Gearbox and Clutch</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
};
    
  


export default ContentWrapper
