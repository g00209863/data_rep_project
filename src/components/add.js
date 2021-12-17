import React from 'react';
import axios from 'axios';

export class Add extends React.Component{

    constructor(){
        super();
//set up the format to add data
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);

//state the format
        this.state = {
            number:'',
            text:'',
            room:'',
            start_date:'',
            end_date:''
        }
    }
//using onChange method
    onChangeNumber(e){
        this.setState({
            number: e.target.value
        })
    }

        onChangeText(e){
            this.setState({
                text: e.target.value
            })
        }
    
        onChangeRoom(e){
            this.setState({
                room: e.target.value
            })
        }
    
        onChangeStartDate(e){
            this.setState({
                start_date: e.target.value
            })
        }
    
        onChangeEndDate(e){
            this.setState({
                end_date: e.target.value
            })
        }
    //use on Submit method to prevent Default output
        onSubmit(e){
            e.preventDefault();
            alert("Task: " + this.state.number + " " + 
            this.state.text + " " + this.state.room + " " + 
            this.state.start_date + " " + this.state.end_date + " ");
    
        const newSchedule = {
            number: this.state.number,
            text: this.state.text,
            room: this.state.room,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        //using axios
        axios.post('http://localhost:4000/api/schedules', newSchedule)
        .then((res)=>{
            console.log(res);
        })
        
        .catch((err)=>{
            console.log(err);
        });

    }
//user input format for adding data to the localhost
    render(){
        return(
            <div className= 'App'>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add Number: </label>
                    <input type='text'
                    className='form-contorl'
                    value={this.state.code}
                    onChange={this.onChangeNumber}></input>
                </div>
            </form><br/>
               <div className= 'App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Task: </label>
                        <input type='text'
                        className='form-contorl'
                        value={this.state.text}
                        onChange={this.onChangeText}></input>
                    </div>
                </form>
                </div><br/>

                    <div className= 'App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Room Number: </label>
                        <input type='text'
                        className='form-contorl'
                        value={this.state.room}
                        onChange={this.onChangeRoom}></input>
                    </div>
                </form>
                </div><br/>

                    <div className= 'App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Start Date: </label>
                        <input type='text'
                        className='form-contorl'
                        value={this.state.start_date}
                        onChange={this.onChangeStartDate}></input>
                    </div>
                    </form>
                </div><br/>

                    <div className= 'App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add End Date: </label>
                        <input type='text'
                        className='form-contorl'
                        value={this.state.end_date}
                        onChange={this.onChangeEndDate}></input>
                    </div><br/>

                    <div className='form-group'>
                        <input type='submit'
                        value='Submit'
                        className='btn btn-primary'></input>
                    </div>
                </form>
                
            </div>
            </div>
        );
    }
}
export default Add;