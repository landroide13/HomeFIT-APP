import React, { Component } from 'react'

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      exer: {
        id: '',
        name:'',
        set:'',
        rep:''
      },
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // handleChange = () =>{

  // }

  // addRutine = r =>{
  //   this.setState({rutine: r});
  // }

  handleSubmit = e =>{
    e.preventDefault();
    if(this.refs.name.value === ''){
      console.log('You must enter a name..')
    }else{
      this.setState({
        exer:{
          id: Date.now(),
          name:this.refs.name.value,
          set: this.refs.set.value,
          rep: this.refs.rep.value
        }
        // console.log(exer);
      }, ()=> {
        console.log(this.state);
        this.props.rutine(this.state.exer);
      })
    }
    
  }

  render() {



    return (
      <React.Fragment>
        <h3>Add Your Exercise</h3>

          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>Exercise Name</label>
              <input type="text" className="form-control" ref="name"  placeholder="Name" />
            </div>
            <div className="form-group">
              <label >Number of sets</label>
              <input type="text" className="form-control" ref="set"  placeholder="Sets" />
            </div>
            <div className="form-group">
              <label>Number of Reps</label>
              <input type="text" className="form-control" ref="rep" placeholder="Reps" />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        
      </React.Fragment>
    )
  }
}
