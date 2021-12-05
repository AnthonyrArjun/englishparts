import React, { Component } from 'react'

export class ProductExtras extends Component {
    render() {
        return (
            <div>
                <div className="modal-light-box" id="ModalLightBox" style={{display: 'none'}} />
                <div className="product-toast" style={{display: 'none'}} aria-live="polite" />
            </div>
        )
    }
}

export default ProductExtras
