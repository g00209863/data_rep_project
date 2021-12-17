import React from 'react';
import { Schedules } from './schedules';
import axios from 'axios';

export class Show extends React.Component{

    constructor(){
        super();
//Generate to load data
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/schedules')
        .then(
            (response)=>{
                this.setState({ schedules: response.data})
            }
        )
        .catch((error)=>{
            console.log(error)
        });

    }
//Generate to load data in the component
    componentDidMount(){
        axios.get('http://localhost:4000/api/schedules')
        .then(
            (response)=>{
                this.setState({ schedules: response.data})
            }
        )
        .catch((error)=>{
            console.log(error)
        });

    }

    //current database
    state = {
        schedules:[
            { 
            "number":"1", 
            "text":"Meeting", 
            "room":"564",
            "start_date":"2019-04-11 14:00",
             "end_date":"2019-04-11 17:00"
         },
         {
             "number":"2", 
             "text":"Conference", 
             "room":"370",
        
            "start_date":"2019-04-15 12:00",
             "end_date":"2019-04-18 19:00"
         },
         {
             "number":"3", 
             "text":"Interview", 
             "room":"888",
             "start_date":"2019-04-24 09:00", 
             "end_date":"2019-04-24 10:00"
         }]
    };

    render(){
        return(
            <div>
                <h1>Here are all your tasks and schedule, BOSS!!!</h1>
                <Schedules schedules={this.state.schedules} ReloadData={this.ReloadData}></Schedules>
            </div>
        );
    }
}
export default Show;