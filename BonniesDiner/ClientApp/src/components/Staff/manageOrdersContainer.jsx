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
        this.Auth.fetch('/api/order/fulfillorder/' + (id)), () => this.getOpenOrders();

    }
    
    cancelOrder(id) {
        this.Auth.fetch('/api/order/cancelorder/' + (id))
            .then(response => {
                this.getOpenOrders();

            });
    }

    
    getOpenOrders() {
        this.Auth.fetch('/api/order/GetOpenOrders')
            .then(response => {
                    console.log(response)
                        this.setState({
                            orders: response
                        })
           

            })
            .catch(function (error) {
                console.log("not authorized")
            });
    }


    render() {
        var body = {
            marginTop: '150px', 
            backgroundColor: '	#F5F5F5'
           
        }
        var btnColor = {
            backgroundColor: '#931212', 
            color: '#ffffff', 
            fontWeight: 'bold', 
            fontFamily: 'Helvetica'
        }
        var fulfillColor = {
            backgroundColor: '#00762C',
            color: '#ffffff',
            fontWeight: 'bold',
            fontFamily: 'Helvetica'

        }
        var font = {
            fontFamily: 'Helvetica'

        }
        return (
      
            <div style={body} className="container col-md-9 col-sm-9 col-lg-9 col-md-offset-1">

                <table className='table box-content' >
                                <thead>
                                    <tr>
                            <th style={font}>Order Id</th>
                            <th style={font}>Order Total</th>
                            <th style={font}> Order Created </th>
                            <th style={font}>Fulfill</th>
                            <th style={font}>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                        {this.state.orders.map((order, ndx) => {

                            return (
                                <tr key={ndx}>
                                    <td style={font}>{order.id}</td>
                                    <td style={font}>{order.orderTotal}</td>
                                   
                                    <td style={font}>{order.statusNew}</td>
                                    <td style={font}><button className="btn" style={fulfillColor}  onClick={() => {
                                        this.fulfillOrder(order.id);
                                      
                                    }}>
                            Fulfill
                         </button>
                                </td>
                                    <td style={font}><button className="btn btn-danger" style={btnColor} onClick={() => {
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