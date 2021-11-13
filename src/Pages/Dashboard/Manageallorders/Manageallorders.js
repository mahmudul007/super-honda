import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import userEvent from '@testing-library/user-event';
import useAuth from '../../../hooks/useAuth';

const Manageallorders = () => {
    const [manageorders, setManageorders] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://salty-taiga-73343.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setManageorders(data);
            })




    }, [])

    const handleDelete = id => {
        const url = `https://salty-taiga-73343.herokuapp.com/orders/${id}`;
        fetch(url,
            {
                method: 'DELETE'
            }

        ).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('removed');
                const remaining = manageorders.filter(product => product._id !== id);
                setManageorders(remaining);
            })

    }




    return (
        <div>
            <h1>Total Orders:{manageorders.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Customr Name</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageorders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">  <Button className="btn btn-danger" onClick={() => handleDelete(row._id)} > Delete</Button></TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Manageallorders;