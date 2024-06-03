import React, { Component } from 'react';

import {getProducts} from '../../api'

class ProductsList extends Component {
constructor (props) {
    super (props);
        this.state ={
            products:''
        }
    }
    componentDidMount(){
       this.getData();

    }

    mapProducts =()=>{
       return this.state.products.map(product =><li key={product.id}>  {product.title} -- {product.price}</li> )}
    
    getData = () => {
        const {page} = this.state;
       getProducts({page})
            .then((data) => {
                this.setState({
                    products: data,
                 })
            })
    }




    render() {
        const{products}= this.state;
        
        return (
            <div>
                <ul>
                      {products.length && this.mapProducts()}
                </ul>
              
            </div>
        );
    }
}

export default ProductsList;
