import React, { Component } from 'react';
import { removeCompareProduct } from './actions/cartActions'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

class Compare extends Component {

    constructor() {
        super();
    }

    handleClick(title) {
        this.props.removeCompareProduct(title)
    }

    render() {

        return (
            <div className="row compare">
                <div className="col-12 mt-5 text-center">
                    <table className="table">
                        <thead className="thead-default">
                            <tr>
                                <th />
                                {this.props.compareItems.map(product =>
                                    <th key={product.title}>
                                        {product.title}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="price">
                                <th scope="row">Price</th>
                                {this.props.compareItems.map(product =>
                                    <td key={product.title} className="text-center">{product.price}</td>
                                )}
                            </tr>
                            <tr className="colors">
                                <th scope="row">Type</th>
                                {this.props.compareItems.map(product =>
                                    <td key={product.title}>
                                        {product.type}
                                    </td>
                                )}
                            </tr>
                            <tr className="condition">
                                <th scope="row">Rating</th>
                                {this.props.compareItems.map(product =>
                                    <td key={product.title} className="text-center">{product.rating}/5</td>
                                )}
                            </tr>

                            <tr className="colors">
                                <th scope="row">Remove</th>
                                {this.props.compareItems.map(product =>
                                    <td key={product.title} className="text-center">
                                        <Button variant="contained" className="remove-btn" onClick={() => { this.handleClick(product.title) }}><i class="fa fa-minus-circle" aria-hidden="true"></i></Button>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compareItems: state.compareItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCompareProduct: (id) => { dispatch(removeCompareProduct(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)