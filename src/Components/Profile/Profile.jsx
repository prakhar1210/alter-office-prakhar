import { Box, Container, Button, Typography } from '@mui/material';
import React from 'react';
import mobileImage from '../../albums/e03f5843a9e45ac45d45afb62caf7b85.png';
import tabletImage from '../../albums/e03f5843a9e45ac45d45afb62caf7b85@3x.png';
import dpImage from '../../albums/1bc60f4364d82c6a06c4a77468ec75cf.png';
import ProfileGrid from './ProfileGrid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const HandleClickEditProfile = () => {
        navigate('/profileEdit')

    };

    const goToPreviousPage = () => {
        navigate('/homePage')
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
                {/* Edit Button */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        mt: { xs: '20px', sm: '30px', md: '40px' },
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: { xs: '150px', sm: '180px', md: '208px' },
                            height: '32px',
                            padding: '5px 16px',
                            borderRadius: '36px',
                            border: '1px solid transparent',
                            backgroundColor: 'white',
                            color: 'black',
                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Karla',
                                fontWeight: 700,
                                fontSize: 12,
                                lineHeight: 14.03,
                                cursor: 'pointer',
                            }}
                            onClick={HandleClickEditProfile}
                        >
                            Edit Profile
                        </Typography>
                    </Button>
                </Box>
            </Box>
            {/* Greeting Text */}
            <Box sx={{ mt: 4 }}>
                <Typography
                    sx={{
                        fontFamily: 'Karla',
                        fontWeight: 800,
                        fontSize: '28px',
                        lineHeight: '28px',
                    }}
                >
                    Sakshi Shrivastava
                </Typography>
                <Typography
                    sx={{
                        mt: '10px',
                        fontFamily: 'Kumbh Sans',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '17.36px',
                        textAlign: 'left',
                    }}
                >
                    Just someone who loves designing, sketching, and finding beauty in the little things 💕
                </Typography>
            </Box>
            <Box mb='2rem'>
                <Typography
                    sx={{
                        width: 176,
                        fontWeight: 800,
                        marginTop: '50px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    My Posts
                </Typography>
                <ProfileGrid />
            </Box>
        </Container>
    );
};

export default Profile;
