import * as React from "react";
import { Tabs, Tab } from "../../common/components/tabs";
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
export class OrderStatusContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            statusOrders: newStatusOrders,
            Id: 2,
            LineItems: [],
            Item: [],
            OrderTotal: 0,
            StatusNew: "",
            StatusFulfill: "",
            StatusCancel: ""
        };

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

    render() {
        var paddingL = {
            paddingLeft: '250px'
        }
        var menuItems = [];
        var statusLength = this.state.statusOrders.length;
        for (var i = 0; i < statusLength; i++) {
            menuItems.push(this.state.statusOrders[i].LineItems);
        }
        console.log(menuItems);

        console.log(menuItems[0][0].Item)
        return (
            <div>
          
                        <table className="table">
                            <thead><tr>
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

            </div>

        )
    }
}
