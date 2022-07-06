import React from "react"
import PropTypes from "prop-types"

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';

function getMessage() {
  console.log('getMessage() Action!')
  return {
    type: GET_MESSAGE_REQUEST
  }
}
function Greeting () {
  return (
    <React.Fragment>
      Message: {this.props.message}

      <button className="getMessageBtn" onClick={() => this.props.getMessage()}>Get Message</button>
    </React.Fragment>
  );
}


const structuredSelector = createStructuredSelector({
  message: state => state.message
});

const mapDispatchToProps = { getMessage };

Greeting.propTypes = {
  message: PropTypes.string
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
