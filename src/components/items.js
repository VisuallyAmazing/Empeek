import React, { Component } from 'react'
import ModalComponent from '../components/modal/modal';
import { Field, reduxForm } from 'redux-form';
import { addItem,deleteItem,setIndex } from '../actions'
import { connect } from 'react-redux';
import './itemsPage.scss'

class ItemList extends Component {
    state = {
        isOpen : false,
        item : '',
    }
    renderTitleField = (field) => {
        return (
            <div>
                    <input 
                    type="text"
                    placeholder = "Type name here..."
                    className = "form-control"
                    {...field.input}
                    />
                <span style = {{color:'red'}}>{field.meta.touched ? field.meta.error : ''}</span>
                <br />
            </div>
        )
    }
    handleCloseModal = () => {
        this.setState(()=>({
            isOpen : false,
        }))
        
    }
    onSubmit = (values) => {
            values.title ? this.props.addItem(values.title) : null
            values.title = '';
    }
    deleteItem = (item) => {
            this.setState((prevState)=>({
                isOpen:!prevState.isOpen,
                item : item
            }))
            
    }
    confirmDelete = () => {
        this.setState(()=>({
            isOpen: false
        }))
        this.props.deleteItem(this.state.item);
        
    }
    singleItem = (i) =>{
            this.props.setIndex(i);
    }
  render() {
    const { handleSubmit,showItems,className } = this.props;
    const { isOpen } = this.state;
    return (
      <div className = {`${className} itemsPage`}>
            <h2 style = {{ paddingLeft:'15px'}}>
            Items
            </h2>
            <ModalComponent
            isOpen = {isOpen}
            onRequestClose = {this.handleCloseModal}
            shouldCloseOnOverlayClick = {true}
            closeTimeoutMS = {300}
            className = "my-class"
            >
                <p> Are you sure?</p>
                <button className =" btn modal__button" onClick = {this.confirmDelete}>Yes</button>
                <button className =" btn modal__button" onClick = {this.handleCloseModal}>Close</button>

            </ModalComponent>
                <form style = {{ marginBottom:'30px'}} onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-row">
                    <div style = {{ marginBottom: '0'}} className="form-group col-lg-8">
                        <Field 
                        name = "title"
                        component = {this.renderTitleField}
                        />     
                    </div>
                    <div className="col-lg-4">
                        <button className= "btn itemsPage__button" type="submit">Add new</button>
                    </div>
                </div>
                </form>
            {showItems.length > 0 ? <ul className = "list-group">
                {showItems.map((item,i)=>{
                    return (
                    <div key = {i}>
                        <li  
                        className = "list-group-item d-flex justify-content-between align-items-center"
                        onClick = { () => this.singleItem(i)}
                        style = {{fontWeight:'bold'}}
                        >
                        <span>{item}  <span className = "badge badge-pill badge-info">{Math.floor(Math.random() * (i+20)) + 120}</span></span>
                        <button type="button" onClick = {() => this.deleteItem(item)} className = "btn btn-outline-danger" >Delete</button>
                        </li>
                    </div>
                    )
                })}
            </ul> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        showItems : state.showItems
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.title) {
        errors.title  = "This field is requiered*"
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'ItemListForm'
})(connect(mapStateToProps,
    { addItem,
     deleteItem,
     setIndex})(ItemList));