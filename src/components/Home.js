import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import  axios from 'axios';
import StarRatings from 'react-star-ratings';

 class Home extends Component{
    
    constructor(){
        super();
        this.state ={
            pic:[],
            apiData:[]
        }
    }

    componentDidMount(){
       this.getItem()
     }

    handleClick = (title)=>{
        this.props.addToCart(title); 
    }

    async getItem() {
     await axios.get('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
      .then((response) => {
       //console.log(response.data,"response.data") 
       //console.log(this.props.items,"ASD")
       this.setState({apiData:response.data})
      }).catch((error) => {
        console.log(error);
      });
    }

    render(){
        let itemList = this.state.apiData.map((item, i)=>{
            return(
                <div className="card" key={i}>
                        <div className="card-image">
                            <img src={item.filename} alt={item.title} height="300px"/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.title)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.description}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p><b>Type: {item.type}</b></p>
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

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)