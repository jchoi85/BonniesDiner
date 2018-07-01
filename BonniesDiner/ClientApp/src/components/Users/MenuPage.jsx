import React from 'react';
import { Button, ModalWindow, Input, EmbeddedInput } from "../../common/components";


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
            itemsOrderedQty: {},
            itemsOrdered: {}

        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
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
                MenuItems: fieldName,
                Quantity: fieldValue
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


    postMenuItems() {
        let payload = this.state.menuEntity;

        fetch('/api/menu/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload)
        })
            .then(
            this.setState({ menuEntity})
            )
            .catch((error) => {
                console.log("error");
            });
    }

    modalToggle() {
        this.setState({ successModal: !this.state.successModal });
    }

    //successModal() {
    //    let itemsOrdered = [];

    //    for (var key in this.state.itemsOrdered) {
    //        if (this.state.itemsOrdered[key] > 0)
    //            itemsOrdered.push({ item: "sds"})
    //    };
        
    //    return (
    //    <div>
    //            <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
    //            <br />
    //                <br />
    //                <span style={{ paddingLeft: "10px" }}></span>
    //                <Button
    //                    className="btn btn-sm btn-success"
    //                    onClick={this.getAllItems}
    //                    label="Submit"
    //                    disabled={false} />
    //        </div>
    //    );
    //}

    addItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        itemsOrdered[id]++;
        this.setState({ itemsOrdered }, () => console.log(this.state.itemsOrdered));
    }

    removeItem = (id) => {
        let itemsOrdered = this.state.itemsOrdered;
        itemsOrdered[id]--;
        this.setState({ itemsOrdered }, () => console.log(this.state.itemsOrdered));
    }


    render() {
        let totalItems = [];
        for (let i = 0; i < totalItems.length; i++) {
            totalItems.push(this.state.itemsOrdered[i]);
        }
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="col-md-8 col-md-3-offset">
                    <h2 style={{ textAlign: "center" }}>Bonnie's Vegan Cuisine</h2> <br />
                    <div className="col-md-12 col-md-offset-2">
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Appetizers<span className="pull-right">Quantity</span></strong></h6>
                            {this.state.appetizerArray.map((itm, index) => {
                                return (
                                    <div key={index} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-10">
                                            <strong>{itm.itemName}</strong> <br />
                                            {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        <div className="col-md-2 pull-right">
                                            Qty:{this.state.itemsOrdered[itm.id]}
                                            <Button
                                                className="btn btn-sm btn-primary pull-right"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                        </div>
                                        <div className="col-md-2">
                                            <Button
                                                className="btn btn-sm btn-danger pull-right"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} />
                                        </div>
                                    </div>
                                )
                            })}
                           
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Entrees<span className="pull-right">Quantity</span></strong></h6>
                            {this.state.entreeArray.map((itm, entree) => {
                                return (
                                    <div key={entree} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-10">
                                            <strong>{itm.itemName}</strong>
                                            <br />
                                            {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        <div className="col-md-2 pull-right">
                                            Qty:{this.state.itemsOrdered[itm.id]}
                                            <Button
                                                className="btn btn-sm btn-primary pull-right"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                        </div>
                                        <div className="col-md-2 pull-right">
                                            <Button
                                                className="btn btn-sm btn-danger pull-right"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Dessert<span className="pull-right">Quantity</span></strong></h6>
                            {this.state.dessertArray.map((itm, dessert) => {
                                return (
                                    <div key={dessert} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-8">
                                        <strong>{itm.itemName}</strong>
                                        <br />
                                        {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        <div className="col-md-2 pull-right">
                                            Qty:{this.state.itemsOrdered[itm.id]}
                                            <Button
                                                className="btn btn-sm btn-primary pull-right"
                                                onClick={() => this.addItem(itm.id)}
                                                label="Add"
                                                disabled={false} />
                                        </div>
                                        <div className="col-md-2">
                                            <Button
                                                className="btn btn-sm btn-danger pull-right"
                                                onClick={() => this.removeItem(itm.id)}
                                                label="Remove"
                                                disabled={false} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        Total: {totalItems}
                        <div>
                            <Button
                                className="btn btn-sm btn-success pull-right"
                                onClick={this.modalToggle}
                                label="Submit"
                                disabled={false} />
                            {/*  <ModalWindow
                                showModal={this.state.successModal}
                                onClose={this.modalToggle}>
                                {this.successModal()}
                            </ModalWindow>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

