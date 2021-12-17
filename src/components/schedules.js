import React from 'react';
import { ScheduleUnit } from './scheduleunit';

//Schedule page to map and form the data
export class Schedules extends React.Component{

    render(){
        return this.props.schedules.map( (text)=>{
            return <ScheduleUnit text={text} ReloadData={this.props.ReloadData}></ScheduleUnit>
        })
            
        
    }
}
export default Schedules;