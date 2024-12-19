import { Box, Container, Button, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import mobileImage from '../../albums/e03f5843a9e45ac45d45afb62caf7b85.png';
import tabletImage from '../../albums/e03f5843a9e45ac45d45afb62caf7b85@3x.png';
import dpImage from '../../albums/1bc60f4364d82c6a06c4a77468ec75cf.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const bioString = 'Just someone who loves designing, sketching, and finding beauty in the little things 💕';
const ProfileEdit = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('Sakshi');
    const [bio, setBio] = useState(bioString);

    // Navigate back to profile page
    const goToPreviousPage = () => {
        navigate('/profile');
    };

    // Handle changes for name and bio
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    // Handle save button click with confirmation
    const onSaveClick = () => {
        const userConfirmed = window.confirm('Do you want to save it?');
        if (userConfirmed) {
            // Navigate to the profile page if the user confirms
            navigate('/profile');
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    position: 'relative',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Profile Image Container */}
                <Box sx={{ position: 'relative', width: '100%' }}>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={tabletImage} />
                        <img
                            src={mobileImage}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />
                        <ArrowBackIcon
                            label="Edit Profile"
                            sx={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                color: 'white',
                                zIndex: 10,
                                width: '32px',
                                height: '32px',
                            }}
                            onClick={goToPreviousPage}
                        />
                    </picture>

                    {/* Display Picture Positioned Over Parent */}
                    <Box
                        component="img"
                        src={dpImage}
                        alt="DP"
                        sx={{
                            width: '112px',
                            height: '112px',
                            position: 'absolute',
                            bottom: '-56px',
                            left: '16px',
                            borderRadius: '50%',
                            border: '2px solid white',
                        }}
                    />
                </Box>
            </Box>

            {/* Form */}
            <Box sx={{ marginTop: '100px' }}>
                <Box sx={{ marginTop: '20px' }}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="standard"
                        value={name}
                        onChange={handleNameChange}
                    />
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <TextField
                        id="bio"
                        label="Bio"
                        variant="standard"
                        value={bio}
                        onChange={handleBioChange}
                    />
                </Box>
            </Box>

            {/* Save button positioned at the bottom of the viewport */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px',
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        width: '100%',
                        height: '50px',
                        backgroundColor: 'black',
                        gap: '10px',
                        borderRadius: '36px',
                    }}
                    onClick={onSaveClick}
                >
                    <Typography sx={{ fontWeight: 600 }}>Save</Typography>
                </Button>
            </Box>
        </Container>
    );
};

export default ProfileEdit;
