import React from 'react'

export default class Main extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      fullName: "",
      title: "",
      email: "",
      education: []
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    return (
      <form className = "basic-info" onSubmit={this.handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          name="fullName"
          value={this.state.fullName}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="title">Education</label>
        <input
          name="education"
          value={this.state.education}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Complete</button>
        <p>Open the console to see the result in JSON</p>
      </form>
    )
  }
}
