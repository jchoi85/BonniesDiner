import * as React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import AuthService from "../../services/authService";

export class ManageOrdersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders:[], 
            Id: 0,
            OrderTotal: 0,
            StatusNew: "",
            StatusFulfill: "",
            StatusCancel: ""

        };
        this.fulfillOrder = this.fulfillOrder.bind(this);
		this.cancelOrder = this.cancelOrder.bind(this);
	    this.Auth = new AuthService();
    }
    componentDidMount() {
        this.getOpenOrders();
    }
    fulfillOrder(id) {
        this.Auth.fetch('/api/order/fulfillorder/' + (id))
    }

    cancelOrder(id) {
        this.Auth.fetch('/api/order/cancelorder/' + (id))
    }

    
    getOpenOrders() {
        this.Auth.fetch('/api/order/GetOpenOrders')
			.then(response => {
				console.log(response)
		        this.setState({
				        orders: response
			        },
			        () => console.log(this.state));
            })
            .catch(function (error) {
                console.log("error");
            });
    }


    render() {
        var body = {
            marginTop: '150px', 
            backgroundColor: '	#F5F5F5'
           
        }
   
        return (
      
            <div style={body} className="container col-md-9 col-sm-9 col-lg-9 col-md-offset-1">

                            <table className='table box-content'>
                                <thead>
                                    <tr>
                            <th>Order Id</th>
                            <th>Order Total</th>
                            <th> Order Created </th>
                                        <th>Fulfill</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                        {this.state.orders.map((order, ndx) => {

                            return (
                                <tr key={ndx}>
                                <td>{order.id}</td>
                                    <td>{order.orderTotal}</td>
                                   
                                    <td>{order.statusNew}</td>
                                    <td><button className="btn btn-success" onClick={() => {
                                        this.fulfillOrder(order.id);
                                      
                                    }}>
                            Fulfill
                         </button>
                                </td>
                                    <td><button className="btn btn-danger" onClick={() => {
                                        this.cancelOrder(order.id);

                                    }}>
                                    Cancel
                         </button>
                                </td>

                            </tr>
                        )})}
                                </tbody>
                            </table>


        </div>
        )
    }

}
export default connect()(ManageOrdersContainer);