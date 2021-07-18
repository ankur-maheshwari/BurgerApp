import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class  Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }


    sideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !this.state.showSideDrawer
            };
        }  );
    }
    render () {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.sideDrawerClosedHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main  className={classes.Content}>
                    {this.props.children}
                </main>
          </Auxi>
        )
    }
}
    

export default Layout;





