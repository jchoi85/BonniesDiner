import * as React from "react";

export const IndividualItemList = (props) => {
    return (
        <React.Fragment>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {props.headerColumns != null ? (
                            props.headerColumns.map((itm, i) => {
                                return <th key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></th>
                            })
                        )
                            : ("")
                        }
                    </tr>
                </thead>
                <tbody>

                    {props.dataItems.map(buildRow(props))}

                </tbody>
            </table>
        </React.Fragment>
    )
}

const buildRow = (props) => (itm, ndx) => {
    return (
        <tr key={ndx}>
            <td className="col-md-1"><strong>{itm.orderId}</strong></td>
            <td className="col-md-1"><strong>{itm.itemId}</strong></td>
            <td className="col-md-1"><strong>{itm.itemQty}</strong></td>
            <td className="col-md-3">{itm.statusNew}</td>
            <td className="col-md-3">{itm.statusFulfilled}</td>
            <td className="col-md-3">{itm.statusCancelled}</td>
        </tr>
  )   
};