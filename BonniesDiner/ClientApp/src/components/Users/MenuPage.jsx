import React from 'react';
import { Button, ModalWindow } from "../../common/components";


export class MenuPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuEntity: {
                category: "",
                description: "",
                id: 0,
                itemName: "",
                price: 0,
                timesOrdered: 0
            },
            menuArray: []
        }
        this.modalToggle = this.modalToggle.bind(this);
    }

    componentDidMount() {
        this.getAllItems();
    }

    getAllItems() {
        fetch('/api/menu/getmenuitems')
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({
                            menuArray: json
                        })
                        console.log(json);
                    });
                }
                this.modalToggle();
            })
            .catch(function (error) {
                console.log("error");
            });
    }



    modalToggle() {
       
      this.setState({ successModal: !this.state.successModal });

    }

    successModal() {
        //var storeIdsWeHave = [];
        //for (var i = 0; i < this.state.menuArray.length; i++) {
        //    storeIdsWeHave.push(this.state.menuArray[i].StoreId);
        //    if (this.state.menuArray[i].StoreId.length > 0) {
        //        var hideWarning = "show";
        //    }
        //}
        return (
            <div key={this.state.menuEntity.Id}>
                <h2 style={{ textAlign: "center" }}>Please confirm your order</h2>
                <div>
                   
                  
                    <strong>Appetizers </strong> < br />
                    {this.state.menuEntity.category} <br />
                    {this.state.menuEntity.description} <br />
                    {this.state.menuEntity.itemName} <br />
                    {this.state.menuEntity.price} <br />

                </div>
                <br />
                <div style={{ float: "right" }}>
                    <Button
                        className="btn btn-sm btn-danger"
                        onClick={this.getAllItems}
                        label="Edit"
                        disabled={false} />
                    <span style={{ paddingLeft: "10px" }}></span>
                    <Button
                        className="btn btn-sm btn-success"
                        onClick={this.getAllItems}
                        label="Submit"
                        disabled={false} />
                </div>
            </div>
        )
    }


//    French Fries<br />
//Chick - un Nuggets < br />
//    Cauliflower Buffalo Wings < br /> <br />
//        <strong>Entrees </strong> <br />

//                    Chick - un Marinara Melt < br />
//    Spinach Artichoke Pesto Pizza < br />
//        Classic Veggie Burger < br />
//            Jackfruit Tacos < br />
//                Southwestern Quinoa Salad < br /> <br />
//                    <strong>Dessert</strong> <br />
//                    Carrot Cake < br />
//    Chocolate Cake < br />
//        Coconut Cake < br />
//            Ice Cream < br />
//                <br />


    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <div>
                        {this.state.menuArray.map((itm, index) => {
                            return (
                                <div key={index}>
                                    {itm.category}
                                    {itm.itemName}
                                    {itm.description}
                                    {itm.price}
                                </div>
                            )
                        })}
                    </div>
                <Button
                    className="btn btn-sm btn-success"
                    onClick={this.getAllItems}
                    label="Submit"
                    disabled={false} />
                <ModalWindow
                    showModal={this.state.successModal}
                    onClose={this.modalToggle}>
                    {this.successModal()}
                    </ModalWindow>
              </div>
            </div>
        )
    }
};

