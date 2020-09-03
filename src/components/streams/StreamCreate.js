import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

  renderInput({ input, label }) {
    return (
      <div className="fiel">
        <label>{label}</label>
        <input {...input}
        // THIS IS THE OUTWRITTEN NOTATION:
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
        />
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }


  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">submit</button>
      </form>
      )
  }
}

export default reduxForm({
  form: 'StreamCreate'
})(StreamCreate)
