import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionCreators from '../action/action'
import Users from './Users';

class UserContainer extends Component {
    constructor(props) {
        super(props);
     }

 componentWillMount() {
   this.props.dispatcher.getuserData();
 }
    render(){
        return (
            <Users{...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
  return { userState : state.UserReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatcher : bindActionCreators(ActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
