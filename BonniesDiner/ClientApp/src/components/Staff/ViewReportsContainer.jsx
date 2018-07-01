import * as React from "react";
import { EntireOrderList } from "./EntireOrderList";
import { PopularityItemList } from "./PopularityItemList";
import { IndividualItemList } from "./IndividualItemList";
//import { authService } from "../../services/authService";


export class ViewReportsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entireOrders: [{ orderId: 1, statusNew: '1/1/2018 9:45', statusFulfilled: '1/1/2018 10:45', statusCancelled: '' },
            { orderId: 2, statusNew: '1/4/2018 10:45', statusFulfilled: '1/4/2018 11:30', statusCancelled: '' },
            { orderId: 3, statusNew: '1/19/2018 06:45', statusFulfilled: '', statusCancelled: '1/19/2018 07:48' }]
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
        //this.Auth = new authService();

        }

        componentDidMount() {
            this.getAllItems();
            //this.getOpenOrders();
        };


        getAllItems() {

            fetch('/api/menu/getmenuitems')
                .then(response => {
                    if (response.ok) {
                        response.json().then(json => {
                            let appetizerArray = [];
                            let entreeArray = [];
                            let dessertArray = [];
                            json.forEach(item => {
                                switch (item.category) {
                                    case "Appetizers":
                                        appetizerArray.push(item);
                                        break;
                                    case "Entrees":
                                        entreeArray.push(item);
                                        break;
                                    case "Dessert":
                                        dessertArray.push(item);
                                        break;
                                }
                            });
                            this.setState({
                                appetizerArray: appetizerArray, entreeArray: entreeArray, dessertArray: dessertArray
                            }, () => console.log(json));
                        });
                    }
                })
                .catch(function (error) {
                    console.log("error");
                });
        };
    
    //getOpenOrders() {
    //    this.Auth.fetch('/api/order/GetOpenOrders')
    //        .then(response => {
    //            if (response.ok) {
    //                response.json().then(json => {
    //                    console.log(json);
    //                })

    //            }
    //        })
    //        .catch(function (error) {
    //            console.log("error");
    //        });
    //}


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