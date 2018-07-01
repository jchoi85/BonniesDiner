import * as React from "react";
import ReactDOM from 'react-dom';

export class ManageOrdersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            orderId: 0,
            user: "",
            orderLineItems: ""

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

    getOpenOrders() {
        fetch('/api/orders/getAllorders')
            .then(response => {
                if (response.ok) {
                    // response.json().then(json => {
                    console.log(response)
                    //  });
                    //this.setState({
                    //    appetizerArray: appetizerArray, entreeArray: entreeArray, dessertArray: dessertArray
                    //}, () => console.log(json));
                    //});
                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }
    render() {
        var paddingL = {
            paddingLeft: '250px'
        }
        return (
            <div style={paddingL}>
                <br />
                <br />

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

        </div>
        )
    }

}