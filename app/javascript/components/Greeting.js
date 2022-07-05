import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Message: {this.props.message}

        <button className="getMessageBtn" onClick={() => this.props.getMessage()}>Get Message</button>
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
