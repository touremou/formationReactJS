import React, { Component } from 'react'

const CountHits=(WrappedComponent, power) => {
    
    class CountHits extends Component {
        state={
            hits:0
        }
        
        addOne=()=>{
            this.setState(prevState =>{
                return {
                    hits: prevState.hits + 1
                }
            })
        }


        componentDidUpdate(prevProps, prevState) {
            if(this.state!==prevState){
               const compName = WrappedComponent.name;
               this.props.reduceHandler(compName, power);
               }
        }

        

        render() {

            return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props} />     
            
        }
    } 
    return CountHits      
    
}

export default CountHits
