import React from 'react';
import { Button, ModalWindow, Input, EmbeddedInput } from "../../common/components";
import AuthService from '../../services/authService';


export class MenuPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appetizerArray: [],
            entreeArray: [],
            dessertArray: [],
            menuEntity: {
                UserId: 0,
                MenuItems: "",
                MenuId: 0,
                Quantity: 0
            },
            itemsOrdered: {}

        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
        this.Auth = new AuthService();
    }

    componentDidMount() {
        this.getAllItems();
    }

    onFieldChange(fieldName, fieldValue) {
        console.log(fieldName, fieldValue)
        const nextState = {
            ...this.state,
            menuEntity: {
                ...this.state.menuEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }

    getAllItems = () => {
        fetch('/api/menu/getmenuitems')
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        let appetizerArray = [];
                        let entreeArray = [];
                        let dessertArray = [];
                        let itemsOrdered = {};
                        json.forEach(item => {
                            switch (item.category) {
                                case "Appetizers":
                                    appetizerArray.push(item);
                                    itemsOrdered[item.id.toString()] = 0;
                                    break;
                                case "Entrees":
                                    entreeArray.push(item);
                                    itemsOrdered[item.id.toString()] = 0;
                                    break;
                                case "Dessert":
                                    dessertArray.push(item);
                                    itemsOrdered[item.id.toString()] = 0;
                                    break;
                            }
                        });
                        this.setState({
                            appetizerArray, entreeArray, dessertArray, itemsOrdered
                        }, () => console.log(this.state.itemsOrdered));
                    });
                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }
    

    postMenuItems = () => {
        let payload = [];
        for (var item in this.state.itemsOrdered)
        {
            if (this.state.itemsOrdered[item] > 0)
                payload.push({ MenuId: parseInt(item), Quantity: this.state.itemsOrdered[item] })
        }
        console.log(payload)
        this.Auth.fetch("/api/order/createorder", {
            method: "POST",
            body: JSON.stringify(payload)
        })
            .then(()=>
                console.log("success")            
            )
            .catch((error) => {
                console.log(error);
            });
    }

    modalToggle() {
        this.setState({ successModal: !this.state.successModal });
    }

    successModal() {
        let appsOrdered = [];
        let entreesOrdered = [];
        let dessertsOrdered = [];
        for (let i = 0; i < this.state.appetizerArray.length; i++) {
            if (this.state.menuEntity.MenuItems === this.state.appetizerArray[i].itemName) {
                appsOrdered.push(this.state.appetizerArray[i].itemName);
                appsOrdered.push(this.state.menuEntity.Quantity);
            }
        }
        console.log(appsOrdered)
        //for (let i = 0; i < this.state.entreeArray.length; i++) {
        //    entreesOrdered.push(this.state.entreeArray[i].itemName);
        //}
        //for (let i = 0; i < this.state.dessertArray.length; i++) {
        //    dessertsOrdered.push(this.state.dessertArray[i].itemName);
        //}
        return (
        <div>
                <h2 style={{ textAlign: "center" }}>Thank you!</h2>
                <br />
                Your order has been placed!
            </div>
        );
    }

    addItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        itemsOrdered[id]++;
        this.setState({ itemsOrdered }, () => console.log(this.state.itemsOrdered));
    }

    removeItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        if (itemsOrdered[id] > 0) {
            itemsOrdered[id]--;
            this.setState({ itemsOrdered }, () => console.log(this.state.itemsOrdered));
        }
    }


    render() {
        return (
            <div className="container">
                <div className="col-md-10 col-md-offset-2">
                    <h2 style={{ textAlign: "center" }}>Bonnie's Vegan Cuisine</h2> <br />
                    <div>
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Appetizers</strong></h6>
                            {this.state.appetizerArray.map((itm, index) => {
                                return (
                                    <div key={index} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-8">
                                            <strong>{itm.itemName}</strong> <br />
                                            {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        Qty:{this.state.itemsOrdered[itm.id]}
                                        <div>
                                            <Button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                            <Button
                                                style={{paddingLeft: "5px"}}
                                                className="btn btn-sm btn-danger"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} /></div>
                                    </div>
                                )
                            })}
                           
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Entrees</strong></h6>
                            {this.state.entreeArray.map((itm, entree) => {
                                return (
                                    <div key={entree} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-8">
                                            <strong>{itm.itemName}</strong>
                                            <br />
                                            {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        Qty:{this.state.itemsOrdered[itm.id]}
                                        <div>
                                            <Button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                            <Button
                                                style={{ paddingLeft: "5px" }}
                                                className="btn btn-sm btn-danger"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} /></div>
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Dessert</strong></h6>
                            {this.state.dessertArray.map((itm, dessert) => {
                                return (
                                    <div key={dessert} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-8">
                                        <strong>{itm.itemName}</strong>
                                        <br />
                                        {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        Qty:{this.state.itemsOrdered[itm.id]}
                                        <div>
                                            <Button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                            <Button
                                                style={{ paddingLeft: "5px" }}
                                                className="btn btn-sm btn-danger"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} /></div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <Button
                                className="btn btn-sm btn-success pull-right"
                                onClick={this.postMenuItems}
                                label="Submit"
                                disabled={false} />
                             <ModalWindow
                                showModal={this.state.successModal}
                                onClose={this.modalToggle}>
                                {this.successModal()}
                            </ModalWindow>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

