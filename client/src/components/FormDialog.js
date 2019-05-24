import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


//FormDialog: on click "ADD ITEM", opens a Dialog window, to interact with "new item" creation
class FormDialog extends React.Component {
 state = {
   open: false,
   name: '',
   secret: ''
 }

    handleClickOpen = () => {
      this.setState({
        open: true
      });
    };

    handleClose = () => {
      this.setState({
        open: false
      });
    };


    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

      onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
          name: this.state.name
        }
        this.props.addItem(newItem);
        this.handleClose();
      };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Item
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
            <DialogContent>
                       <form>
                        <Input type="text"
                         name="name"
                         id="item"
                         placeholder="Add Item"
                        onChange={this.onChange}/>
                      </form>
            </DialogContent>
          <DialogActions>

            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>

            <Button
            type="submit"
            onClick={this.onSubmit} color="primary">
              Add
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect( mapStateToProps, { addItem })(FormDialog);