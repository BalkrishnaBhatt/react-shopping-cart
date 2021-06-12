import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, addToCompareProduct } from './actions/cartActions'
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            apiData: [],
            view: "card",
            columns: [
                { id: 'title', label: 'Product Name', minWidth: 100, align: 'right' },
                { id: 'type', label: 'Type', minWidth: 100, align: 'right' },
                { id: 'filename', label: 'Image', minWidth: 100, align: 'right' },
                {
                    id: 'price',
                    label: 'Price',
                    minWidth: 100,
                    align: 'right',
                },
                {
                    id: 'volume',
                    label: 'Quantity',
                    minWidth: 100,
                    align: 'right',
                },
                {
                    id: 'rating',
                    label: 'Rating',
                    minWidth: 100,
                    align: 'right',
                    format: (value) => value.toFixed(2),
                },
                {
                    id: 'addToCart',
                    label: 'Add To Cart / Compare Products',
                    minWidth: 100,
                },
            ],
            compareProducts: [],
        }
    }

    componentDidMount() {
        //this.getItems()
        this.getItem()
        this.setState({ compareProducts: this.props.compareItems })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.compareItems.length < 4) {
            state.compareProducts = props.compareItems
        }
    }

    handleClick = (title) => {
        this.props.addToCart(title);
    }

    handleView = (toggleView) => {
        this.setState({ view: toggleView })
    }

    handleCompareClick = (title) => {
        if (this.state.compareProducts.length < 3) {
            this.props.addToCompareProduct(title)
        }

    }

    getItem() {
        this.setState({ apiData: this.props.items })
    }
    // async getItems() {
    //     await axios.get('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
    //         .then((response) => {
    //             console.log(response.data, "response.data")
    //             //console.log(this.props.items,"ASD")
    //             this.setState({ apiData: response.data })
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {

        let { apiData, view, columns, hovered } = this.state

        let itemList = this.state.apiData.map((item, i) => {
            return (
                <div className="card" key={i}>
                    <div className="card-image">
                        <img className="image" src={item.filename} alt={item.title} height="300px" />
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.title) }}><i className="material-icons">add</i></span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red compare" onClick={() => { this.handleCompareClick(item.title) }}><i class="fa fa-exchange" aria-hidden="true"></i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.description}</p>
                        <p><b>Price: {item.price}$</b></p>
                        <p><b>Type: {item.type}</b></p>
                        <p><b>Quantity: {item.volume}</b></p>
                        {
                            item.volume < 3 ? <p className="warning"> Hurry! Only few Item left!!</p>
                                : null
                        }

                        <p>
                            <StarRatings
                                rating={item.rating}
                                starRatedColor="#00B2EE"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="5px"
                                name='rating'
                            />
                        </p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <div class="header" >
                    <h3 className="center">Our items</h3>
                    <div className="toggle-div">
                        <i onClick={() => { this.handleView("grid") }} class={`fa fa-table fa-3x ${view === 'card' ? "table" : 'table-active'}`} aria-hidden="true"></i>
                        <i onClick={() => { this.handleView("card") }} class={`fa fa-th-large fa-3x ${view === 'grid' ? "table" : 'table-active'}`} aria-hidden="true"></i>
                    </div>
                </div>

                {
                    view === 'card' ? <div className="box">{itemList} </div>
                        : <Paper >
                            <TableContainer >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.apiData.map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {
                                                                    column.id === "rating" ? <StarRatings rating={row.rating} starRatedColor="#00B2EE" numberOfStars={5} starDimension="20px" starSpacing="5px" name='rating' />
                                                                        : column.id === "addToCart" ? <div><Button variant="contained" className="add-btn" onClick={() => { this.handleClick(row.title) }}><i className="material-icons">add</i></Button>  <Button variant="contained" className="add-btn" onClick={() => { this.handleCompareClick(row.title) }}><i class="fa fa-exchange" aria-hidden="true"></i></Button> </div>
                                                                            : column.id === "filename" ? <img src={row.filename} alt={row.title} width="150px" height="100px" />
                                                                                : value
                                                                }
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        compareItems: state.compareItems
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        addToCompareProduct: (id) => { dispatch(addToCompareProduct(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)