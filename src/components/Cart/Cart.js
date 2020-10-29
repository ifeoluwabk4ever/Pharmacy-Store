import React, { Component } from 'react'
import { Title } from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { MedicsConsumer } from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <MedicsConsumer>
                    {
                        value => {
                            let {cart} = value
                            if (cart.length > 0) {
                                return (
                                    <>
                                        <Title name="your" title="cart" />
                                        <CartColumns />
                                        <CartList value={value}/>
                                        <CartTotal value={value} history={this.props.history} />
                                    </>
                                )
                            } else {
                                return (
                                    <EmptyCart />
                                )
                            }
                        }
                    }
                </MedicsConsumer>
            </section>
        )
    }
}
