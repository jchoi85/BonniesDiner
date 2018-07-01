import * as React from "react";
import ReactDOM from 'react-dom';
import { Tabs, Tab } from '../../common/components/tabs';
const newStatusOrders = [{
    Id: 1,
    LineItems: [{
        Id: 1,
        Item: {
            Id: 2,
            ItemName: "Bbq Drumsticks",
            Price: 6.25,
            Description: "Vegan drumsticks drizzled in BBQ Sauce",
            Category: "Appetizers",
            TimesOrdered: 1
        },
        Quantity: 1
    }],
    OrderTotal: "2.00",
    StatusNew: "1/1/2018 9:45",
    StatusFulfill: "",
    StatusCancel: ""
},
{
    Id: 2,
    LineItems: [{
        Id: 20,
        Item: {
            Id: 2,
            ItemName: "French Fries",
            Price: 4.25,
            Description: "Fresh never frozen golden fries",
            Category: "Appetizers",
            TimesOrdered: 1
        },
        Quantity: 2
    },
    {
        Id: 5,
        Item: {
            Id: 2, ItemName: "Chick-Un Nuggets",
            Price: 5.95,
            Description: "Chick-un with marinara sauce, melted vegan mozarella on a toasted french roll",
            Category: "Appetizers",
            TimesOrdered: 2
        },
        Quantity: 2
    }],
    OrderTotal: "19.00",
    StatusNew: "1/1/2018 9:45",
    StatusFulfill: "1/1/2018 9:55",
    StatusCancel: ""
},

]
export class ManageOrdersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: newStatusOrders,
            orderId: 0,
            user: "",
            orderLineItems: "", 
            statusOrders: newStatusOrders,
            Id: 2,
            LineItems: [],
            Item: [],
            OrderTotal: 0,
            StatusNew: "",
            StatusFulfill: "",
            StatusCancel: ""

        };
        this.fulfillOrder = this.fulfillOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
    }
    componentDidMount() {
        this.getOpenOrders();
    }
    fulfillOrder() {
        console.log("fulfill button clicked");
    }

    cancelOrder() {
        console.log("Cancel button clicked");
    }

    mapOrderHistory(statusOrder) {
        return (
            <tr key={statusOrder.Id}>
                <td></td>
                <td>{statusOrder.Id}</td>
                <td>{statusOrder.StatusNew}</td>
                <td>{statusOrder.StatusFulfill}</td>
                <td>{statusOrder.StatusCancel}</td>
                </tr>
            )
    }
    mapOrder(statusOrder) {
        return (
            <tr key={statusOrder.Id}>
                <td></td>
                <td>{statusOrder.Id}</td>
                <td>{statusOrder.LineItems.map(menuItem =>
                    <ul key={menuItem.Id}>
                        <li>{menuItem.Item.ItemName}</li>
                    </ul>)}
                </td>
                <td>{statusOrder.OrderTotal}</td>
                <td>{statusOrder.StatusNew}</td>
                <td>{statusOrder.StatusFulfill}</td>
                <td>{statusOrder.StatusCancel}</td>

            </tr>
        )
    }
    getOpenOrders() {
        fetch('/api/orderentity/getOpenOrders')
            .then(response => {
                if (response.ok) {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }


    render() {
        var body = {
            marginTop: '150px'
        }
        return (
            <div style={body} className="container col-md-9 col-sm-9 col-lg-9 col-md-offset-1">
                <Tabs defaultActiveTabIndex={0}>

                    <Tab tabHeader="Manage" tabIndex={0}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Order Id</th>
                                        <th>Fulfill</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.orders.map(order =>
                                        <tr key={order.Id}>
                                            <td></td>
                                            <td>{order.Id}</td>
                                            <td><button className="btn btn-success" onClick={this.fulfillOrder}>
                                                Fulfill
                         </button>
                                            </td>
                                            <td><button className="btn btn-danger" onClick={this.cancelOrder}>
                                                Cancel
                         </button>
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                    </Tab>

                    <Tab tabHeader="Order Status " tabIndex={1}>   
                 
                    <table className="table">
                        <thead className="thead-dark"><tr>
                            <th></th>
                            <th>Order #</th>
                            <th>Line Items</th>
                            <th>Order Total</th>
                            <th>StatusNew</th>
                            <th>StatusFulfill</th>
                            <th>StatusCancel</th>

                        </tr>
                        </thead>
                        <tbody>
                            {this.state.statusOrders.map(statusOrder =>
                                this.mapOrder(statusOrder)
                            )}
                        </tbody>
                    </table>
                        </Tab>   
                        <Tab tabHeader="Order History" tabIndex={2}> 
                            <thead>
                                <tr>
                            <th>Order #</th>
                            <th>StatusNew</th>
                            <th>StatusFulfill</th>
                                <th>StatusCancel</th>
                                </tr>
                            </thead>
                            <tbody> {this.state.statusOrders.map(statusOrder =>
                                this.mapOrderHistory(statusOrder))}
                                </tbody>
                        </Tab>

                        <Tab tabHeader="Popular Items" tabIndex={3}> 
                            <thead>
                                <tr>
                                    <th> Item Id </th>
                                    <th> Item Qty </th>
                                </tr>
                            
                            </thead>
                            <tbody>
                            </tbody>
                            </Tab>
                        </Tabs>

        </div>
        )
    }

}