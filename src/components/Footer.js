import React, { Component } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa'

window.addEventListener('scroll', () => {

    let topLink = document.querySelector('.top-link')
    let scrollHeight = window.pageYOffset

    if (scrollHeight > 400) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

export default class Footer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentYear: new Date().getFullYear()
        }
    }
    


    render() {
        return (
            <>
                <div className="footer">
                    <p>copyright &copy;  2017 - <span>{ this.state.currentYear }</span> CarePoint Medical Services. al right reserved</p>
                </div>
                <a href="#top" className="scroll-link top-link"><FaAngleDoubleUp /> </a>
            </>
        )
    }
}
