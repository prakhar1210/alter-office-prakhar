import { Box, Container } from '@mui/system'
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Card from '../../../Generic Components/Card/Card';
import dummyData from '../../../data';
import Header from '../../Header/Header';
import TransitionsModal from '../../../Generic Components/Card/Modal/ModalShare';
// social-media-feed\src\Generic Components\Card\Modal\ModalShare.jsx

const HomePage = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
    return (
        <Container>
            <Box>
                <Box>
                    <Header />
                </Box>
                <Box
                    sx={{
                        width: '68px',
                        height: '28px',
                        // position: 'absolute',
                        top: '97px',
                        left: '16px',
                        opacity: '0px',
                        mb: '2rem',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Karla',
                            fontSize: '24px',
                            fontWeight: 800,
                            lineHeight: '28.06px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        Feeds
                    </Typography>
                </Box>
                {dummyData.map((item, index) => (
                    <Card
                        key={index}
                        dp={item.dp}
                        name={item.name}
                        description={item.description}
                        media={item.media}
                        time={item.time}
                        like={item.like}
                        onShareClick={handleOpen}
                    />
                ))}
            </Box>
            {/* Modal Component */}
            <TransitionsModal open={openModal} handleClose={handleClose} />
        </Container>)
}

export default HomePage
