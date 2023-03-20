import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'address', headerName: 'Address', width: 150 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'zipCode', headerName: 'ZipCode', width: 150 }
]


const DataGridd = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/rows")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataGridd