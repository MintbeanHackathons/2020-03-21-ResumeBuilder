import React from 'react'

export default class Main extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.state = {
      fullName: "",
      title: "",
      email: "",
      education: [{institution:""
      // startDate: "",
      // endDate:""
      }]
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange(event) {
    if (["institution"].includes(event.target.className)){
      let education = [...this.state.education]
      education[event.target.dataset.id][event.target.className] = event.target.value
      this.setState({education}, () => console.log(this.state.education))
    } else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  addEducation(event){
    this.setState((prevState) => ({
      education: [...prevState.education, {institution:""}]
    }))
  }

  render () {
    let {education} = this.state
    return (
      <form className = "basic-info" onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="fullName">Full Name</label>
        <input
          name="fullName"
          value={this.state.fullName}
          // onChange={this.handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={this.state.email}
          // onChange={this.handleChange}
          required
        />

        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={this.state.title}
          // onChange={this.handleChange}
          required
        />

        <button onClick={this.addEducation}>Add Education</button>
        {education.map((currentVal, idx) => {
          let institutionId = `instition-${idx}`
          let startId = `start-${idx}`
          let endId = `end-${idx}`
          return (
            <div key = {idx}>
              <label htmlFor={institutionId}>Institution</label>
              <input
                name={institutionId}
                value={education[idx].institution}
                // onChange={this.handleChange}
                className = "instution"
              />

              {/* <label htmlFor={startId}>State Date</label>
              <input
                name={startId}
                value={education[idx].startDate}
                // onChange={this.handleChange}
                className = "startDate"
              />

              <label htmlFor={endId}>End Date</label>
              <input
                name={endId}
                value={education[idx].endDate}
                // onChange={this.handleChange}
                className = "endDate"
              /> */}
            </div>
          )
        })}
        <button type="submit">Complete</button>
        <p>Open the console to see the result in JSON</p>
      </form>
    )
  }
}
