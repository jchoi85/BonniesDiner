import * as React from "react";

export const ViewReportList = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                {props.headerColumns != null ? (
                    props.headerColumns.map((itm, i) => {
                        return <div key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></div>
                    })
                )
                    : ("")
                }
            </div>
            {props.dataItems.map(buildRow(props))}
        </React.Fragment>
        )
}

const buildRow = (props) => (itm, ndx) => {
    return (<div className="container col-md-12" key={ndx}>
        <br/>
        <div className="row">
            <div className="col-md-4"><strong>{itm.typeName}</strong></div>
            <div className="col-md-4">{itm.typeDescription}</div>
            <div className="col-md-4">
                "hello"
            </div>
        </div>
        <hr />
    </div>);
};