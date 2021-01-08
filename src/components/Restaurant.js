import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import { Reservation } from '../stores/ReservationStore';


class Restaurant extends Component{
    render () {
        const {RestaurantStore,GeneralStore} = this.props
        const addRes = () => RestaurantStore.addRes(GeneralStore.name,GeneralStore.numPeople)
        return (
            <div>
                <span>You have {RestaurantStore.openTables} open tables</span>
                <div>Number of people seated: {RestaurantStore.restPopulation}</div>
                <div>Number of tables completed: {RestaurantStore.completedTables}</div>
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <ResInput/>
                <button id="addRes" onClick={addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                    {RestaurantStore.reservations.map(r => <Reservation key={r.id}  res={r} />)}
                    {/* {RestaurantStore.reservations.map(r => <div>anaaa</div>)} */}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))