import React from 'react';
import axios from 'axios';

export class Edit extends React.Component{

    constructor(){
        super();
//like the add format, sewt up the format to input the data
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);


        this.state = {
            number:'',
            text:'',
            room:'',
            start_date:'',
            end_date:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/schedules/'+this.props.atch.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Number:response.data._id,
                Text:response.data.text,
                Room:response.data.room,
                Start_date:response.data.start_date,
                End_date:response.data.end_date
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
//generate onChange method to edit the data
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
//using onSubmit to prevent default
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
            end_date: this.state.end_date,
            _id:this.state._id
        }

        axios.put('http://localhost:4000/api/schedules/' + this.state._id,newSchedule)
        .then(res =>{
            console.log(res.data)
        })
        .catch();

        // axios.post('http://localhost:4000/api/schedules', newSchedule)
        // .then((res)=>{
        //     console.log(res);
        // })
        
        // .catch((err)=>{
        //     console.log(err);
        // });

    }
//set up the edit format for data inputing
    render(){
        return(
            <div className= 'App'>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Edit Number: </label>
                    <input type='text'
                    className='form-contorl'
                    value={this.state.number}
                    onChange={this.onChangeNumber}></input>
                </div>
            </form><br/>
               <div className= 'App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Task: </label>
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
                        <label>Edit Room Number: </label>
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
                        <label>Edit Start Date: </label>
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
                        <label>Edit End Date: </label>
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
export default Edit;