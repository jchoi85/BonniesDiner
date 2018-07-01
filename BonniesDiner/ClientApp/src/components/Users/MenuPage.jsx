import React from 'react';
import { Button, ModalWindow } from "../../common/components";
import AuthService from '../../services/authService';


export class MenuPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appetizerArray: [],
            entreeArray: [],
            dessertArray: [],
            itemsOrdered: {}
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.successModal = this.successModal.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.errorModal = this.errorModal.bind(this);
        this.errorToggle = this.errorToggle.bind(this);
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
                        });
                    });
                }
            })
            .catch(function (error) {
                this.errorToggle();
                console.log("error");
            });
    }


    postMenuItems = () => {
        let payload = [];
        for (var item in this.state.itemsOrdered) {
            if (this.state.itemsOrdered[item] > 0)
                payload.push({ MenuId: parseInt(item), Quantity: this.state.itemsOrdered[item] })
        }
        if (payload.length != 0) {
            this.Auth.fetch("/api/order/createorder", {
                method: "POST",
                body: JSON.stringify(payload)
            })
                .then(() =>
                    console.log("success"),
                    this.modalToggle()
                )
                .catch((error) => {
                    this.errorToggle(),
                    console.log(error)
                });
        }
    }

    modalToggle() {
        this.setState({ successModal: !this.state.successModal }, () => {
            let itemsOrdered = this.state.itemsOrdered;
            for (var item in itemsOrdered) {
                itemsOrdered[item] = 0;
            }
            this.setState({
                itemsOrdered
            })
        });
    }

    errorToggle() {
        if (this.state.successModal == false) {
            this.setState({ errorModal: !this.state.errorModal })
        }
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
                <div style={{ textAlign: "center", paddingBottom: "20px" }}> Your order has been placed!</div>
            </div>
        );
    }

    errorModal() {
        return (
            <div>
                <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Please add an item to your cart</h2>
            </div>
        );
    }

    addItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        itemsOrdered[id]++;
        this.setState({ itemsOrdered });
    }

    removeItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        if (itemsOrdered[id] > 0) {
            itemsOrdered[id]--;
            this.setState({ itemsOrdered });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-8 col-md-offset-3">
                    <h2 style={{ textAlign: "center" }}>Bonnie's Vegan Cuisine</h2> <br />
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
                                            className="btn btn-sm btn-success"
                                            onClick={() => this.addItem(itm.id)}
                                            label="Add"
                                            disabled={false} />
                                        <span style={{ paddingLeft: "10px" }}></span>
                                        <Button
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
                                            className="btn btn-sm btn-success"
                                            onClick={() => this.addItem(itm.id)}
                                            label="Add"
                                            disabled={false} />
                                        <span style={{ paddingLeft: "10px" }}></span>
                                        <Button
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
                                            className="btn btn-sm btn-success"
                                            onClick={() => this.addItem(itm.id)}
                                            label="Add"
                                            disabled={false} />
                                        <span style={{paddingLeft: "10px"}}></span>
                                        <Button
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
                        <ModalWindow
                            showModal={this.state.errorModal}
                            onClose={this.errorToggle}>
                            {this.errorModal()}
                        </ModalWindow>
                    </div>
                </div>
            </div>
        )
    }
};

