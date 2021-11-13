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

const Manageproducts = () => {
    const [manageproducts, setManageproducts] = useState([]);
    useEffect(() => {
        fetch('https://salty-taiga-73343.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setManageproducts(data);
            })




    }, [])

    const handleDelete = id => {
        const url = `https://salty-taiga-73343.herokuapp.com/products/${id}`;
        fetch(url,
            {
                method: 'DELETE'
            }

        ).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('removed');
                const remaining = manageproducts.filter(product => product._id !== id);
                setManageproducts(remaining);
            })

    }



    return (
        <div>
            <h1>Total Products:{manageproducts.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="All product table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageproducts.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">  <Button className="btn btn-danger" onClick={() => handleDelete(row._id)} > Delete</Button></TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Manageproducts;