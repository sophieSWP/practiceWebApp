import { useTable } from 'react-table';
import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell'
import styled from 'styled-components'

function App() {

const data = React.useMemo(() =>
 [
 {
 room: 'Room1',
 motion: '1',
 date: '07/11/2020',
 clean: 'yes',
 },
 {
  room: 'Room2',
 motion: '1',
 date: '07/11/2020',
 clean: 'yes',
 },
 {
  room: 'Room3',
 motion: '0',
 date: '07/11/2020',
 clean: 'no',
 },
 {
  room: 'Room4',
  motion: '0',
  date: '07/11/2020',
  clean: 'no',
 },
 {
  room: 'Room5',
  motion: '0',
  date: '07/11/2020',
  clean: 'no',
 },
 {
  room: 'Room6',
  motion: '1',
  date: '07/11/2020',
  clean: 'yes',
 },
 ],
 []
)

const columns = React.useMemo(
    () => [
    {
    Header: 'Sensor Info',
    columns: [
    {
    Header: 'Room',
    accessor: 'room',
    },
    {
    Header: 'Motion',
    accessor: 'motion',
    },
    ],
    },
    {
    Header: 'Sensor Info',
    columns: [
    {
    Header: 'Date',
    accessor: 'date',
    },
    {
    Header: 'Sensor #',
    accessor: 'sensor',
    },
    ],
    },
    ],
    []
   )

   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })

   return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
    
        const columns = React.useMemo;

        const data = React.useMemo;

        return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
        )
        
      </tbody>
    </table>
   )

}

const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;

   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: green;
     border-bottom: 3px solid blue;
     color: white;
     fontWeight: bold;
   }
 }
`

function Table({ columns, data }) {
 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({
   columns,
   data,
 })

 // Render the UI for your table
 return (
   <table {...getTableProps()} >
     ...
   </table>
 )
}

// function Apps() {
//  const columns = React.useMemo;

//  const data = React.useMemo;

//  return (
//    <Styles>
//      <Table columns={columns} data={data} />
//    </Styles>
//  )
// }

{/* <TableCell {...cell.getCellProps()}>
   {cell.render('Cell')}
</TableCell> */}

// export default Apps;


export default App;