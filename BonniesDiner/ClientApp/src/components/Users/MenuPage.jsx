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
            appsOrdered: [],
            entreesOrdered: [],
            dessertsOrdered: []

        }
        this.modalToggle = this.modalToggle.bind(this);
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

    //onEmbdFieldChange(fieldName, fieldValue, index, category) {
    //    console.log(fieldName, fieldValue, index, category)
    //    //const nextState = {
    //    //    ...this.state,
    //    //    menuEntity: {
    //    //        ...this.state.menuEntity,
    //    //        MenuItems: fieldName,
    //    //        Quantity: fieldValue
    //    //    }
    //    //}
    //    //this.setState(nextState);
    //}


    getAllItems = () => {
        fetch('/api/menu/getmenuitems')
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        let appetizerArray = [];
                        let entreeArray = [];
                        let dessertArray = [];
                        let appsOrdered = [];
                        let entreesOrdered = [];
                        let dessertsOrdered = [];
                        json.forEach(item => {
                            switch (item.category) {
                                case "Appetizers":
                                    appetizerArray.push(item);
                                    appsOrdered.push(0);
                                    break;
                                case "Entrees":
                                    entreeArray.push(item);
                                    entreesOrdered.push(0);
                                    break;
                                case "Dessert":
                                    dessertArray.push(item);
                                    dessertsOrdered.push(0);
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
       // let itemsOrdered = [];
    
       // console.log(itemsOrdered)
        //for (let i = 0; i < this.state.entreeArray.length; i++) {
        //    entreesOrdered.push(this.state.entreeArray[i].itemName);
        //}
        //for (let i = 0; i < this.state.dessertArray.length; i++) {
        //    dessertsOrdered.push(this.state.dessertArray[i].itemName);
        //}
        return (
            <div></div>
            //    <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
            //    <br />
            //    <div style={{ float: "right" }}>
            //       
            //        <br />
            //        <span style={{ paddingLeft: "10px" }}></span>
            //        <Button
            //            className="btn btn-sm btn-success"
            //            onClick={this.getAllItems}
            //            label="Submit"
            //            disabled={false} />
            //    </div>
            //</div>
        );
    }

    render() {
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
                                            <Input label=""
                                                type="text"
                                                name={itm.itemName}
                                                onChange={this.onFieldChange}
                                                placeholder=""
                                                fieldValue={itm.Quantity}
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

