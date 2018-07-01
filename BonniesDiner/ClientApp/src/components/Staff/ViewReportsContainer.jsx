import * as React from "react";
import { EntireOrderList } from "./EntireOrderList";
import { PopularityItemList } from "./PopularityItemList";
import { IndividualItemList } from "./IndividualItemList";
import AuthService from "../../services/authService";


export class ViewReportsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entireOrders: []
            ,
            individualItems: [{ orderId: 1, itemId: 2, itemQty: 1, statusNew: '1/1/2018 9:45', statusFulfilled: '1/1/2018 10:45', statusCancelled: '' },
            { orderId: 4, itemId: 2, itemQty: 3, statusNew: '1/4/2018 9:45', statusFulfilled: '1/4/2018 9:54', statusCancelled: '' },
            { orderId: 6, itemId: 3, itemQty: 2, statusNew: '1/6/2018 9:45', statusFulfilled: '', statusCancelled: '1/6/2018 10:45' }]
            ,
            popularityItems: [{ itemId: 1, itemQty: 80 }, { itemId: 2, itemQty: 60 }, { itemId: 3, itemQty: 50 }],
            appetizerArray: [],
            entreeArray: [],
            dessertArray: [],
            menuEntity: {
                UserId: 0,
                MenuItems: "",
                MenuId: 0,
                Quantity: 0
            }
        }
        this.Auth = new AuthService();

        }

        componentDidMount() {
            this.getAllOrders();
        };

    
    //getOpenOrders = () => {
    //    this.Auth.fetch('/api/order/GetOpenOrders')
    //        .then(response => {
    //            console.log(response);
    //        })
    //        .catch(function (error) {
    //            console.log("error");
    //        });
    //}

    getAllOrders = () => {
        this.Auth.fetch('/api/order/GetAllOrders')
            .then(response => {
                console.log(response);
                this.setState({entireOrders: response})
            })
            .catch(function (error) {
                console.log("error");
            });
    }


        render() {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col-md-7 col-md-offset-2">
                            <h1>Entire Orders</h1>
                            <EntireOrderList
                                dataItems={this.state.entireOrders}
                                headerColumns={[
                                    { columnName: "OrderId:", columnStyle: "col-md-2 " },
                                    { columnName: "StatusNew-DateTime:", columnStyle: "col-md-3" },
                                    { columnName: "StatusFulfilled-DateTime", columnStyle: "col-md-3" },
                                    { columnName: "StatusCancelled-DateTime", columnStyle: "col-md-3" }]} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 col-md-offset-2">
                            <h1>Individual Items</h1>
                            <IndividualItemList
                                dataItems={this.state.individualItems}
                                headerColumns={[
                                    { columnName: "OrderId:", columnStyle: "col-md-1 " },
                                    { columnName: "ItemId:", columnStyle: "col-md-1 " },
                                    { columnName: "ItmQty:", columnStyle: "col-md-1 " },
                                    { columnName: "StatusNew-DateTime:", columnStyle: "col-md-3" },
                                    { columnName: "StatusFulfilled-DateTime", columnStyle: "col-md-3" },
                                    { columnName: "StatusCancelled-DateTime", columnStyle: "col-md-3" }]} />
                        </div >
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-2">
                            <h1>Popular Items</h1>
                            <PopularityItemList
                                dataItems={this.state.popularityItems}
                                headerColumns={[
                                    { columnName: "ItemId:", columnStyle: "col-md-2 " },
                                    { columnName: "ItemQty", columnStyle: "col-md-2" }]} />
                        </div >
                    </div>
                </React.Fragment>
            )
        }
    }