import React from 'react';
import { Button, ModalWindow, Input } from "../../common/components";


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
            }
        }
        this.modalToggle = this.modalToggle.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
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
    }


    modalToggle() {
        this.setState({ successModal: !this.state.successModal });

    }

    successModal() {
        let appsOrdered = [];
        let entreesOrdered = [];
        let dessertsOrdered = [];
        for (let i = 0; i < this.state.appetizerArray.length; i++) {
            appsOrdered.push(this.state.appetizerArray[i].itemName); 
        }
        for (let i = 0; i < this.state.entreeArray.length; i++) {
            entreesOrdered.push(this.state.entreeArray[i].itemName);
        }
        for (let i = 0; i < this.state.dessertArray.length; i++) {
            dessertsOrdered.push(this.state.dessertArray[i].itemName);
        }
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
                <br />
                <div style={{ float: "right" }}>
                    <strong>{appsOrdered.join(", ")}</strong>
                    <br />
                    <strong>{entreesOrdered.join(", ")}</strong>
                    <br />
                    <strong>{dessertsOrdered.join(", ")}</strong>
                    <br />
                    <span style={{ paddingLeft: "10px" }}></span>
                    <Button
                        className="btn btn-sm btn-success"
                        onClick={this.getAllItems}
                        label="Submit"
                        disabled={false} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-8 col-md-3-offset">
                    <h2 style={{ textAlign: "center" }}>Bonnie's Vegan Cuisine</h2> <br />
                    <div className="col-md-5 col-md-offset-3">
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Appetizers</strong></h6>
                            {this.state.appetizerArray.map((itm, app) => {
                                return (
                                    <div key={app}>
                                        <div>
                                            <strong>{itm.itemName}</strong> <br />

                                            {itm.description} {itm.price}
                                        </div>
                                        <Input label=""
                                            type="number"
                                            name={itm.itemName}
                                            onChange={this.onFieldChange}
                                            placeholder=""
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Entrees</strong></h6>
                            {this.state.entreeArray.map((itm, entree) => {
                                return (
                                    <div key={entree}>
                                        <strong>{itm.itemName}</strong>
                                        <br />
                                        {itm.description} {itm.price} <br />
                                        <Input label=""
                                            type="number"
                                            name={itm.itemName}
                                            onChange={this.onFieldChange}
                                            placeholder=""
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <br />
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Dessert</strong></h6>
                            {this.state.dessertArray.map((itm, dessert) => {
                                return (
                                    <div key={dessert}>
                                        <strong>{itm.itemName}</strong>
                                        <br />
                                        {itm.description} {itm.price}
                                        <Input label=""
                                            type="number"
                                            name={itm.itemName}
                                            onChange={this.onFieldChange}
                                            placeholder=""
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <Button
                                className="btn btn-sm btn-success"
                                onClick={this.modalToggle}
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

