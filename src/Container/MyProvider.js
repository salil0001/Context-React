import React, { Component } from 'react'

export const MyContext = React.createContext();

export default class MyProvider extends Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state, 
                growAYearOlder: (val) => this.setState({
                    age: val
                })
            }}>
            
          {this.props.children}
            </MyContext.Provider>
        )

    }
}
