import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Share from '../../albums/navigation-2.png';

const Card = ({ dp, name, description, media, time, like, onShareClick }) => {
    // TODO: make handle onClick
    const handleOnclick = () => {

    }
    return (
        <Box
            sx={{
                maxWidth: 328,
                borderRadius: '26px',
                boxShadow: 2,
                overflow: 'hidden',
                backgroundColor: '#F7EBFF',
                mt: '10px',
                minHeight: 314,
            }}
        >
            {/* DP and Name Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                {/* DP */}
                <Box
                    sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={dp} alt="profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </Box>

                {/* Name */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                        <Typography variant="h6" fontWeight="600" sx={{ margin: '10px' }}>
                            {name}
                            <Typography fontWeight="400" fontSize="10px">
                                {time}
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Description */}
            <Box sx={{ p: 2 }}>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </Box>

            {/* Media Section */}
            <Box sx={{ p: 2 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 2,
                    }}
                >
                    {media.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                height: '150px',
                                backgroundColor: '#ccc',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src={item}
                                alt={`media-${index}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                {/* Heart Button */}
                <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-red-500"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <Typography className='text-red-500'>{like}</Typography>
                </Box>

                {/* Share Button */}
                <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '92px',
                            height: '30px',
                            padding: '7px 26px',
                            gap: '4px',
                            borderRadius: '30px',
                            backgroundColor: '#00000012',
                        }}
                    >
                        <img src={Share} alt="share icon" />
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '16.37px',
                                color: 'black',
                            }}
                            onClick={onShareClick}
                        >
                            Share
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Card;
