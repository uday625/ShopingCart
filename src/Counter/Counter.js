import React, {Component} from 'react';

class Counter extends Component {
    


    render() { 
        return ( 
        <div>           
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button 
            className="btn btn-success btn-md m-2" 
            onClick={() => this.props.onIncrement(this.props.counter)}> 
            Increment 
          </button>
          <button 
            className="btn btn-danger btn-md m-2" 
            onClick={()=>this.props.onDelete (this.props.counter.id)}> 
            Delete 
          </button>                    
        </div> 
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
      }

    formatCount = ()=>{    
      return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    } 
}
 
export default Counter;
