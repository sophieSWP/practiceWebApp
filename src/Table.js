import { useTable } from 'react-table';
import React, { Component } from 'react';


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
      </tbody>
    </table>
   )

}


export default App;