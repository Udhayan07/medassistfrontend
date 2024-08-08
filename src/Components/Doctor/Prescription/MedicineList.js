import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';

function createData(medcheck, medname,morning,Afternoon,night,before,after) {
  return { medcheck, medname,morning,Afternoon,night,before,after };
}

const rows = [
  createData( ' ','Paracetamol',' ',' ' ),
  createData(' ', 'Dolo 350', ' ',' '),
  createData(' ', 'Armotraz(125mg)', ' ', ' '),
  createData(' ','Cephalexin',' ',' ' ),
  createData(' ', 'Nurtec', ' ',' '),
  createData(' ', 'Opdivo', ' ',' '),
];

export default function MedicineList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Medic Aide©</caption>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Medicine Check</TableCell>
            <TableCell align="left">Medicine Name</TableCell>
            <TableCell align="right">Morning</TableCell>
            <TableCell align="right">Afternoon</TableCell>
            <TableCell align="right">Night</TableCell>
            <TableCell align="right">Before Food</TableCell>
            <TableCell align="right">After Food</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left"><Checkbox></Checkbox></TableCell>
              <TableCell align="left">{row.medname}</TableCell>
              <TableCell align="right"><Checkbox></Checkbox></TableCell>
              <TableCell align="right"><Checkbox></Checkbox></TableCell>
              <TableCell align="right"><Checkbox></Checkbox></TableCell>
              <TableCell align="right"><Checkbox></Checkbox></TableCell>
              <TableCell align="right"><Checkbox></Checkbox></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
