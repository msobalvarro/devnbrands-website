import React, { PureComponent } from 'react'
import './estilos-modal.css'

class Modal extends PureComponent {
    /**Method for open modal */
    open = () => {
        this.content.classList.add('show')

        setTimeout(
            () => {
                this.content.style.opacity = 1
            }, 100
        )
    }

    /**Method for close modal */
    close = () => {
        this.content.style.opacity = 0

        setTimeout(
            () => {
                this.content.classList.remove('show')
            }, 300
        )
    }
    
    
    render () {
        return (
            <div className="back-modal" ref={e => this.content = e}>
                <span className="close-modal" onClick={this.close} />
                <div className="content-modal">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Modal