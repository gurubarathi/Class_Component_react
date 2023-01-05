import React,{Component}from "react";
import SecondClass from "./SecondClass";

class NewClass extends Component{
    constructor(){
     super();
     this.state={
        product:"CAR",
        price:1
     }
    }
    getData = (data)=>{
        console.log("checked",data)
     };
     updateName=()=>{
        this.setState({product:"bike"})
     };
     updatePrice=()=>{
        this.setState({price:500})
     }
    render(){
        return(
        <div>Class components{ this.props.name}{this.state.product}{this.state.price}
        <button onClick={()=>this.updateName()}>Update Product</button>
        <button onClick={()=>this.updatePrice}>Update Price</button>
        <SecondClass name={this.props.name} getData={this.getData}/>
        </div>)
    }
}

export default NewClass;