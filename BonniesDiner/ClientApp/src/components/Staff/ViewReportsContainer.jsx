import * as React from "react";
import { ViewReportList } from "./ViewReportListing";


export const ViewReportsContainer = () => (
    <div>
        <ViewReportList
            dataItems={[{ typeName: 'Hello', typeDescription: 'hello' }, { typeName: 'Hello', typeDescription: 'hello' }, { typeName: 'Hello', typeDescription: 'hello'}]}
            headerColumns={[
                { columnName: "OrderId:", columnStyle: "col-md-2 " },
                { columnName: "StatusNew-DateTime:", columnStyle: "col-md-3" },
                { columnName: "StatusFulfilled-DateTime", columnStyle: "col-md-3" },
                { columnName: "StatusCancelled-DateTime", columnStyle: "col-md-3" }]} />
    </div>
)