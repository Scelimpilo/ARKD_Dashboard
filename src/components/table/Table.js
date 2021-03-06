import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, target, actual,ok,notOk) {
  return { name, target, actual,ok,notOk };
}

const rows = [
  createData('COVID-19 Driver Guard', 159, 60, 24, 5),
  // createData('Tail Gates', 237, 90, 37, 43),
  // createData('Canopies', 262, 160, 24, 60),
  // createData('Anotehr project', 305, 37, 67, 43),
  // createData('SEZ', 356, 16.0, 49, 39),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product </TableCell>
            <TableCell align="right">DAILY TARGET</TableCell>
            <TableCell align="right">ACTUAL</TableCell>
            <TableCell align="right">TOTAL OK</TableCell>
            <TableCell align="right">TOTAL NOT OK</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.target}</TableCell>
              <TableCell align="right">{row.actual}</TableCell>
              <TableCell align="right">{row.ok}</TableCell>
              <TableCell align="right">{row.notOk}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
