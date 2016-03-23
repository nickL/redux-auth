import React, { PropTypes } from "react";
import Dialog from "rc-dialog";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

class BaseModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    errorAddr: PropTypes.array,
    closeBtnLabel: PropTypes.string,
    closeAction: PropTypes.func
  };

  static defaultProps = {
    show: false,
    errorAddr: null,
    closeBtnLabel: "Ok"
  };

  close () {
    this.props.dispatch(this.props.closeAction());
  }

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  getErrorList () {
    let [base, ...rest] = this.props.errorAddr;
    return <ErrorList errors={this.props.auth.getIn([
      base, this.getEndpoint(), ...rest
    ])} />
  }

  render () {
    let body = (this.props.errorAddr)
      ? this.getErrorList()
      : this.props.children;

    return (this.props.show)
      ? <span />
      : <span />;
  }
}

export default connect(({auth}) => ({auth}))(BaseModal);
