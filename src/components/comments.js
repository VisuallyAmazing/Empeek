import React, { Component } from 'react'
import { addComment } from '../actions';
import { connect } from 'react-redux';
import './commentsPage.scss';

class Comments extends Component {

  keydownHandler = (e) =>{
    if(e.keyCode===13 && e.ctrlKey)
    this.onSubmit(e);
  }
  componentDidMount = () =>{
    document.addEventListener('keydown',this.keydownHandler);
  }
  componentWillUnmount = () =>{
    document.removeEventListener('keydown',this.keydownHandler);
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(e.target.value);
    e.target.value = '';
  }
render() {
    const { comments,index,className }  = this.props;
    return (
      <div className = {`${className} commentsPage`}>
        <h2>
        Comments #{index}
        </h2>
        <ul className = "list-group list-group-flush">
        {
            comments.map((item,i)=>{
              let color = `${(i+1)%2 == 0 ? '#45558d': '#ff8b00'}`
                return(
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div style = {{ width:'50px',height:'50px',background: color}}>
                  </div>
                    <span className = "commentsPage__itemContent">
                      {item}
                    </span>
                  </li>
                )  
            })
        }
        </ul>
        <form style = {{paddingTop:'10px'}} onSubmit = {this.onSubmit}>
        <div className="form-row justify-content-center" style = {{ margin:'auto'}}>
          <div className="col-lg-3">
            <div className = "commentsPage__formDiv">
            </div>
          </div>
            <div className="form-group col-lg-8 ">
              <textarea type="text"
              className = "form-control"
              placeholder = "Say what's on your mind..."
              name = "comment"
              />
            </div>
        </div>
           
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        index : state.index
    }
}


export default connect(mapStateToProps, { addComment })(Comments);
