import React, {Component} from 'react';

class Counter extends Component {


    state = {
        value: this.props.counter.value,
        // tags: []
      };
    
    
      formatCount = ()=>{    
        return this.state.value === 0 ? "Zero" : this.state.value;
      }
    
      incrementCount = () =>{
        const currentCount = this.state.value;
        const updatedCount = currentCount +1;
        this.setState ({value:updatedCount})
      }

    //   displayTags = () =>{
    //     return (this.state.tags.length === 0 ? <p>No tags available</p>:<ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>);
    //   }
    
    render() { 

        return ( 
        <div> 
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-success btn-md m-2" onClick={this.incrementCount}> Increment </button>
          <button 
            className="btn btn-danger btn-md m-2" 
            onClick={()=>this.props.onDelete (this.props.counter.id)}> Delete </button>                    
          {/* {this.displayTags()} */}
        </div> 
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
      }
}
 
export default Counter;
