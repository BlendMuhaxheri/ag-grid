import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../styles.scss'
import DataContext from '../utils/DataContext';
import NavigationDrawer from './NavigationDrawer'


var myIcons = {
    sortAscending: function () {
        return 'ASC';
    },
    sortDescending: function () {
        return 'DESC';
    },
};


const MyGrid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const dataContext = React.useContext(DataContext);


    const columnDefs = [
        {
            headerName: 'Airline Details',
            width: 100,
            children: [
                {
                    field: 'Airline Name',
                    rowDrag: true,
                    checkboxSelection: true

                },
                {
                    field: 'Type',
                    enableRowGroup: true,
                },
                {
                    field: 'Name as per GST Port',
                },
            ],
        },

        {
            headerName: 'Invoice Details',
            with: 100,
            enableValue: true,
            children: [
                { field: 'Invoice Number-Invol' },
                { field: 'Invoice Date-Invol' },
            ]
        }
    ]
    const [rowData, setRowData] = useState([
        { "Airline Name": "Search ", "Type": "Search", "Name as per GST Port": "Search", "Invoice Number-Invol": "Search", "Invoice Date-Invol": "DD-MM-YYYY", "id": 2 },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },
        { "Airline Name": "Indigo", "Type": "Indian Careers", "Name as per GST Port": "Kotak Mahindra", "Invoice Number-Invol": "29abcqakaja", "Invoice Date-Invol": "24/08/2008" },

    ])
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };



    return (
        <div style={{ width: '70%', height: '100vh' }}>
            <div
                id="myGrid"
                style={{
                    height: '65%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 100,
                        resizable: true,
                        // checkBox: true


                    }}
                    columnDefs={columnDefs}
                    onGridReady={onGridReady}
                    rowData={rowData}
                // rowSelection={'multiple'}
                />
            </div>
            <NavigationDrawer />
        </div>

    );
};

export default MyGrid;