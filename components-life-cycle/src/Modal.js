import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
    constructor(props) {
        super(props)
    
        this.popUpContainer = document.createElement('div');
        document.body.appendChild(this.popUpContainer);
    }
    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }
    
    
    render() {
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laboriosam asperiores? Minus sed quibusdam ut dolor natus. Doloremque eligendi ut quos magnam quas accusamus voluptas optio id, laborum consequatur debitis?</p>
                    <button>Fermer</button>
                </div>
            </div>, this.popUpContainer
        )
    }
}

export default Modal;
