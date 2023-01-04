import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import '../Styles/Styles.css'
import { Download } from '@mui/icons-material'

function Header() {

    return (
        <Box>
            <Stack direction="row" padding={2}>
                <Stack direction="row" justifyContent="center" flex={1}>
                    <Typography variant="h6">Arjun Ravi</Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between" flex={2} >
                    <Link className="default-link" to="/"><Typography color={"white"} variant="h6">Home</Typography></Link>
                    <Link className="default-link" to="/about"> <Typography variant="h6" color={"white"}>About</Typography></Link>
                    <Link className="default-link" to="/projects"> <Typography variant="h6" color={"white"}>Projects</Typography></Link>
                    <Link className="default-link" to="/image-gallery"> <Typography variant="h6" color={"white"}>Image Gallery</Typography></Link>
                    <Link className="default-link" to="/entertainment"> <Typography variant="h6" color={"white"}>Entertainment</Typography></Link>
                    <Link className="default-link" to="/contact"> <Typography variant="h6" color={"white"}>Contact Me</Typography></Link>
                </Stack>

                <Stack direction="row" justifyContent="center" flex={1}>
                    <Button variant="outlined" endIcon={<Download />}>
                        Resume
                    </Button>
                </Stack>

            </Stack>
        </Box>

    );
}

export default Header