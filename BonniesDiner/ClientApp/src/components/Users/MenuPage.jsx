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
                MenuItems: fieldName,
                Quantity: fieldValue
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
            if (this.state.menuEntity.MenuItems == this.state.appetizerArray[i].itemName) {
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
                <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
                <br />
                <div style={{ float: "right" }}>
                    <ol>
                        {appsOrdered.map((itm, id) => {
                            return (<li key={id}>{itm}x{itm.Quantity}</li>)
                        })}
                        
                        </ol>
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
            <div className="container" style={{ marginTop: "25px" }}>
                <div className="col-md-8 col-md-3-offset">
                    <h2 style={{ textAlign: "center" }}>Bonnie's Vegan Cuisine</h2> <br />
                    <div className="col-md-12 col-md-offset-2">
                        <div>
                            <h6 style={{ textAlign: "center" }}><strong>Appetizers<span className="pull-right">Quantity</span></strong></h6>
                            {this.state.appetizerArray.map((itm, app) => {
                                return (
                                    <div key={app} className="row" style={{ paddingBottom: "30px" }}>
                                        <div className="col-md-10">
                                            <strong>{itm.itemName}</strong> <br />

                                            {itm.description} <strong>{itm.price}</strong>
                                        </div>
                                        <div className="col-md-2 pull-right">
                                            <Input label=""
                                                type="number"
                                                name={itm.itemName}
                                                onChange={this.onFieldChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <hr/>
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
                                            <Input label=""
                                                type="number"
                                                name={itm.itemName}
                                                onChange={this.onFieldChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <hr/>
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
                                        <Input label=""
                                            type="number"
                                            name={itm.itemName}
                                            onChange={this.onFieldChange}
                                            placeholder=""
                                            />
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <Button
                                className="btn btn-sm btn-success pull-right"
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

