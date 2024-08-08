import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, Age,patientid,request) {
  return { name, Age,patientid,request };
}

const rows = [
  createData('Udhayan J M', 32,'udhay21',' ' ),
  createData('Sooraj', 12, 'sooraj.12',' '),
  createData('Eclair', 2, 'eclair3', ' '),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Medic Aide©</caption>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Patient ID</TableCell>
            <TableCell align="right">Request</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.patientid}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="success" sx={{ml:7 ,mb:-1}}>
            +
          </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
