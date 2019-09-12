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
      sidebarOpen: false,
      openMenu : false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    const { sidebarOpenProps, BaseActions } = this.props;
    this.setState({
      sidebarOpen : open
    });
    sidebarOpenProps ? BaseActions.closeSidebar() : BaseActions.openSidebar()
  }
  handleOpen(){
    const { open } = this.state
    this.setState({
      open : !open
    });
    console.log(open);
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
    const { onSetSidebarOpen, handleOpen } = this;
    const { sidebarOpen, openMenu } = this.state;
    const { children, boards } = this.props;
    return(
      <Sidebar
          sidebar={<SidebarContents boards={boards} />}
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
    sidebarOpenProps : state.base.get('sidebarOpenProps'),
    boards : state.board.get('boards'),
  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
  })
)(SidebarContainer);
