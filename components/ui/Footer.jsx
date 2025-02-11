"use client";

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
    <Box
        component="footer"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            bottom: '0px',
            alignItems: 'center',
            padding: '6px',
            backgroundColor: '#d2b4de',
            color: 'black',
            mt: '10px',
            width: '100vw',
        }}
    >
    <Box>
    <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
    >
        <Facebook />
    </IconButton>
    <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
    >
        <Twitter />
    </IconButton>
    <IconButton
        component="a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
    >
        <Instagram />
    </IconButton>
    </Box>
    <Typography variant="body2" sx={{ mt: 1 }}>
        © 2025 Aritti. Todos los derechos reservados.
    </Typography>
    </Box>
    );
};

export default Footer;