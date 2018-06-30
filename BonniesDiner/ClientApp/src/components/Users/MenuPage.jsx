import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const MenuPage = props => (
    <div className="container">
        <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
        <div className="col-md-5 col-md-offset-3">
            <div>
                <h5>Name </h5>
            </div> <br />
            <div>
                <h5>Order Details</h5>
                <strong>Appetizers </strong> < br />
                Bbq Drumsticks <br />
                French Fries<br />
                Chick-un Nuggets<br />
                Cauliflower Buffalo Wings <br />  <br />
                <strong>Entrees </strong> <br />
                Chick-un Marinara Melt<br />
                Spinach Artichoke Pesto Pizza<br />
                Classic Veggie Burger<br />
                Jackfruit Tacos<br />
                Southwestern Quinoa Salad<br />
                <strong>Dessert</strong> <br />  <br />
                Carrot Cake<br />
                Chocolate Cake<br />
                Coconut Cake<br />
                Ice Cream<br />
                <br />
            </div>
            <br />
            <div style={{ marginLeft: "25px", marginRight: "150px", float: "right" }}>
                {/*<Button
                    //    className="btn btn-sm btn-success"
                    //    onClick={this.onSave}
                    //    label="Submit"
                    //    disabled={false} />
                    //<Button
                    //    className="btn btn-sm btn-danger"
                    //    onClick={this.onSave}
                    //    label="Edit"
                    //    disabled={false} />*/}
            </div>
        </div>
    </div>

);

//export default connect(
//    state => state.MenuPage,
//    dispatch => bindActionCreators(actionCreators, dispatch)
//)(MenuPage);
