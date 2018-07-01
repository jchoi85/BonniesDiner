import * as React from "react";

export const EntireOrderList = (props) => {
    return (
        <React.Fragment>
                <table className="table">
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
                        <tr>
                            {props.dataItems.map(buildRow(props))}
                        </tr>
                    </tbody>
                </table>
        </React.Fragment>
    )
}

const buildRow = (props) => (itm, ndx) => {
    return (
        <React.Fragment>
            <td className="col-md-2"><strong>{itm.orderId}</strong></td>
            <td className="col-md-3">{itm.statusNew}</td>
            <td className="col-md-3">{itm.statusFulfilled}</td>
            <td className="col-md-3">{itm.statusCancelled}</td>
        </React.Fragment>
    );
};