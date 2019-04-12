import React, { Component } from 'react'
import { createContext } from 'vm';
import MyProvider, {MyContext} from './MyProvider';


class Person extends Component {
    state={
        val:23
    }
    render() {
        return (
            <div>This is a person

            <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div>I am Inside context {context.state.name}</div>
                            <div>I am Inside context {context.state.age}</div>
                            <button onClick={()=>context.growAYearOlder(this.state.val)}>+</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>

            </div>
        )
    }
}


const Family = (props) =>
    (
        <div className="Family">
            This is Family
            <Person />
        </div>
    )



export default class Container extends Component {
   render() {
        return (
            <MyProvider>
                <div>
                    <div>I am the Container</div>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}       

