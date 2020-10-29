import React from 'react'
import Form from './Form'
import GetInTouch from './GetInTouch'
import { Links } from './Links'

export default function FooterPage() {
    return (
        <div className="footer-page">
            <div className="footer-center">
                <GetInTouch />
                <Links 
                    name="Quick Links"
                    item1="about us"
                    item2="blog"
                    item3="contact us"
                    item4="faq"
                    item5="insurance" />
                <Links 
                    name="our services"
                    item1="work injuries"
                    item2="sport injuries"
                    item3="cold laser therapy"
                    item4="massage therapy"
                    item5="physiotherapy"
                    item6="chiropratic therapy" />
                <Form />
            </div>
        </div>
    )
}
