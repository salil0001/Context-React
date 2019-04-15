import React, { Component } from 'react'

export const MyContext = React.createContext();

export default class MyProvider extends Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }
    
    growAYearOlder=(val)=>{
        this.setState({
            age: val
        })
     }
    render() {
        return (
            <MyContext.Provider value={{
                ...this.state,
                growAYearOlder: this.growAYearOlder
            }}>

                 {this.props.children} 
            </MyContext.Provider>
        )

    }
}
