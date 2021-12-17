import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/button';
import axios from 'axios';

//set up to showcase the data and remove the data

export class ScheduleUnit extends React.Component{

    constructor(){
        super();
        this.DeleteSchedule = this.DeleteSchedule.bind(this);
    }

    DeleteSchedule(e){
        e.preventDefault();
        console.log("Remove: " + this.props.schedule._id);
    
//delete from the localhost
    axios.delete('http://localhost:4000/api/schedules/' +this.props.schedule._id)
    .then(()=>{
        this.props.ReloadData();
    })
    .catch();
    }

//using Card bootstrap material to design the outputing data
    render(){
        return(
            <div>
        <Card position= 'center' border="warning" style={{ width: '30rem' }}>
            <Card.Header>Number: {this.props.text.number}</Card.Header>
            <Card.Body>
                <Card.Title>{this.props.text.text}</Card.Title>
                    <Card.Text>Room: {this.props.text.room}</Card.Text>
                    <Card.Text>Start: {this.props.text.start_date}</Card.Text>
                    <Card.Text>End: {this.props.text.end_date}</Card.Text>
            </Card.Body>
            <Link to={"/edit/"+this.props.schedule._id} className="btn btn-primary">Edit</Link>
            <Button variant='danger' onClick={this.DeleteSchedule}>Remove</Button>

        </Card>
            </div>
        );
    }
}
export default ScheduleUnit;