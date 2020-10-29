import React, { Component } from 'react'
import { items } from './Products'

    let MedicsContext = React.createContext();

class MedicsProvider extends Component {

    state = {
        drugs: [],
        sortedDrugs: [],
        featuredDrugs: [],
        loading: true,
        type: 'all',
        packet: 1,
        price: 0,
        breakfast: false,
        pets: false,
        detailDrug: items,
        cart: [],
        modalOpen: false,
        modalDrug: items,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    // getData

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let drugs = this.formatData(items)
        let featuredDrugs = drugs.filter( drug => drug.featured === true );

        this.setState({
            drugs,
            featuredDrugs,
            sortedDrugs: drugs,
            loading: false,
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.fields.file.url
            let drug = { ...item.fields, images, id }

            return drug
        })
        return tempItems
    }

    getDrug = slug => {
        let tempDrugs = [ ...this.state.drugs]
        let drug = tempDrugs.find( drug => drug.slug === slug)
        return drug
    }

    handleChange = e => {
        let target = e.target
        let value = target.type === 'checkbox' ? target.checked : target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
    }

    
    getItem = id => {
        let tempDrugs = [ ...this.state.drugs]
        let drug = tempDrugs.find(drug => drug.id === id)
        return drug
    }

    handleDetail = id => {
        let drug = this.getItem(id)
        this.setState( () => {
            return {detailDrug:drug}
        })
    }

    addToCart = id => {
        let tempDrugs = [...this.state.drugs]
        let index = tempDrugs.indexOf(this.getItem(id))
        let drug = tempDrugs[index]
        drug.inCart = true
        drug.count = 1
        let price = drug.price
        drug.total = price

        this.setState( () => {
            return {
                drugs:tempDrugs,
                cart: [...this.state.cart, drug]
            }
        }, () => {
            this.addTotals();
        })
    }

    openModal = id => {
        let drug = this.getItem(id)
        this.setState( () => {
            return {
                modalDrug:drug, 
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState( () => {
            return {
                modalOpen: false
            }
        })
    }

    increment = id =>{
        let tempCart = [...this.state.cart]
        let selectedDrug = tempCart.find( item => item.id === id)
        let index = tempCart.indexOf(selectedDrug)
        let drug = tempCart[index]

        drug.count += 1
        if ( drug.count === items.packet) {
            // drug.count = drug.count
            console.log(items.packet);
        } else {
            drug.total = drug.count * drug.price
        }
        this.setState( () => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals()
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart]
        let selectedDrug = tempCart.find( item => item.id === id)
        let index = tempCart.indexOf(selectedDrug)
        let drug = tempCart[index]

        drug.count -= 1
        if ( drug.count === 0) {
            this.removeItem(id)
        } else {
            drug.total = drug.count * drug.price

            this.setState( () => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals()
            })
        }
        

    }

    removeItem = id => {
        let tempDrug = [...this.state.drugs]
        let tempCart = [ ...this.state.cart]

        tempCart = tempCart.filter( item => item.id !== id)

        let index = tempDrug.indexOf(this.getItem(id))
        let removedDrug = tempDrug[index]
        removedDrug.inCart = false
        removedDrug.count = 0
        removedDrug.total = 0

        this.setState( () => {
            return {
                cart: [...tempCart],
                drugs: [...tempDrug]
            }
        }, () => {
            this.addTotals()
        })

    }

    clearCart = () => {
        this.setState( () => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts()
            this.addTotals()
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map( item => (subTotal += item.total))
        let tempTax = subTotal * 0.1
        let tax = Number(tempTax.toFixed(2))
        let total = subTotal + tax
        this.setState( () => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <MedicsContext.Provider value={{ 
                ...this.state, 
                getDrug: this.getDrug,
                handleChange: this.handleChange,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                decrement: this.decrement,
                increment: this.increment,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                { this.props.children }
            </MedicsContext.Provider>
        )
    }
}

    let MedicsConsumer = MedicsContext.Consumer

export let withMedicsConsumer = (Component) => {
        let ConsumerWrapper = (props) => {
        return <MedicsConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </MedicsConsumer>
    }
    return ConsumerWrapper
}

export { MedicsProvider, MedicsContext, MedicsConsumer }