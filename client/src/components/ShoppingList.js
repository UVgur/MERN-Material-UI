import React, { Component } from 'react';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems , deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

//ShoppingList: on load, recives the list items from that global state,
//then sort them by id and show them with option to delete (for each)
class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }


    render() {
        const { items } = this.props.item;
        return(
            <Card style = {{backgroundColor: "#ffffff"}}>
                <TransitionGroup className="shopping-list">
                    {items.map(({ _id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            < ListItem style={{fontFamily:"Arial"}}>
                                <Button
                                    onClick={this.onDeleteClick.bind(this,_id)}
                                    style={{color:"red",border: "0.5px groove #919396",
                                    marginRight: "10px"}}> &times; </Button>
                                {name}
                            </ListItem>
                        </CSSTransition>))}
                </TransitionGroup>
            </Card>
             );
    }

}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems , deleteItem  } )(ShoppingList);