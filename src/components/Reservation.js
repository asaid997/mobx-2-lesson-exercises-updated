import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    constructor(){
        super()
    }

    // completeRes = () => RestaurantStore.completeRes(res.id)
    // seatRes = () => RestaurantStore.seatRes(res.id)

    render() {
        // const {res,RestaurantStore} = this.props

        return (
            <div>
                {/* <span>{res.id}) {res.name} - reserved for {res.numPeople} people - {res.seated && "People are seated"} - {res.completed && "Reservation is completed"}</span>
                
                <button onClick={this.completeRes}>complete</button>
                <button onClick={this.seatRes}>seat</button> */}
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
// export default inject("RestaurantStore")(observer (Reservation))
export default Reservation