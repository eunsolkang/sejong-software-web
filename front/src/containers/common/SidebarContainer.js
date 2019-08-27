import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from "react-sidebar";
import SidebarContents from 'components/common/SidebarContents'
import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    const { sidebarOpenProps, BaseActions } = this.props;
    this.setState({
      sidebarOpen : open
    })
    sidebarOpenProps ? BaseActions.closeSidebar() : BaseActions.openSidebar()
  }
  componentDidUpdate(prevProps, prevState){
    const { sidebarOpenProps } = this.props;
    const { onSetSidebarOpen } = this;
    if (prevProps.sidebarOpenProps !== this.props.sidebarOpenProps){
      this.setState({
        sidebarOpen : sidebarOpenProps
      })
      console.log('REDUX_PROPS : ', sidebarOpenProps);
    }
  }

  render () {
    const { onSetSidebarOpen } = this;
    const { sidebarOpen } = this.state;
    const { children } = this.props;
    return(
      <Sidebar
          sidebar={<SidebarContents/>}
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}

      >
        {children}
      </Sidebar>
    )
  }
}

export default connect(
  (state) => ({
    sidebarOpenProps : state.base.get('sidebarOpenProps')
  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(SidebarContainer);
