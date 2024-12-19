// // import React from 'react';
// // import { Grid, Card, CardContent, Typography } from '@mui/material';
// // import profileDummyData from './profileDummyData';

// // const ProfileGrid = () => {
// //     return (
// //         <Grid container spacing={2}>
// //             {profileDummyData.map((profile, index) => (
// //                 <Grid item xs={12} sm={6} md={3} key={index}>
// //                     <Card sx={{ position: 'relative' }}>
// //                         <img
// //                             src={profile.image}
// //                             alt={profile.title}
// //                             style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
// //                         />
// //                         <CardContent
// //                             sx={{
// //                                 position: 'absolute',
// //                                 top: '50%',
// //                                 left: '50%',
// //                                 transform: 'translate(-50%, -50%)',
// //                                 color: 'white',
// //                                 textAlign: 'center',
// //                                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //                                 padding: '10px',
// //                                 borderRadius: '8px',
// //                             }}
// //                         >
// //                             <Typography variant="h6">{profile.title}</Typography>
// //                             <Typography variant="body2">{profile.likes} Likes</Typography>
// //                         </CardContent>
// //                     </Card>
// //                 </Grid>
// //             ))}
// //         </Grid>
// //     );
// // };

// // export default ProfileGrid;


// import React from 'react';
// import { Box, Card, CardContent, Typography } from '@mui/material';
// import profileDummyData from '../../profileData';

// const ProfileGrid = () => {
//     return (
//         <Box
//             display="grid"
//             gridTemplateColumns="repeat(2, 1fr)"
//             gap={2}
//         >
//             {profileDummyData.map((profile, index) => (
//                 <Box key={index} sx={{ position: 'relative' }}>
//                     <Card>
//                         <img
//                             src={profile.image}
//                             alt={profile.title}
//                             style={{ width: '100%', minHeight: '192px', borderRadius: '8px' }}
//                         />
//                         <CardContent
//                             sx={{
//                                 position: 'absolute',
//                                 top: '90%',
//                                 left: '15%',
//                                 transform: 'translate(-50%, -50%)',
//                                 color: 'white',
//                                 textAlign: 'left',
//                                 padding: '2px',
//                                 borderRadius: '8px',
//                             }}
//                         >
//                             <Typography variant="h6">{profile.title}</Typography>
//                             <Typography variant="body2">{profile.likes} Likes</Typography>
//                         </CardContent>
//                     </Card>
//                 </Box>
//             ))}
//         </Box>
//     );
// };

// export default ProfileGrid;


import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import profileDummyData from '../../profileData';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProfileGrid = () => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(1, 1fr)" // Default to single column for small screens
            gap={2}
            sx={{
                // Tablet and larger screens: 2 columns
                '@media (min-width: 600px)': {
                    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for tablets
                },
                // Larger screens: 4 columns
                '@media (min-width: 1024px)': {
                    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns for desktops
                },
            }}
        >
            {profileDummyData.map((profile, index) => (
                <Box key={index} sx={{ position: 'relative' }}>
                    <Card sx={{ position: 'relative' }}>
                        {/* Image */}
                        <img
                            src={profile.image}
                            alt={profile.title}
                            style={{
                                width: '100%',
                                minHeight: '192px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                        {/* Card content (Title & Likes) */}
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: '90%',
                                left: '20%',
                                transform: 'translate(-50%, -50%)',  // Center content
                                color: 'white',
                                textAlign: 'left',
                                // backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
                                padding: '10px',
                                borderRadius: '8px',
                            }}
                        >
                            <Typography variant="h6"
                                sx={{
                                    fontFamily: 'Kumbh Sans',
                                    fontWeight: 600,
                                    paddingLeft: '10px'
                                }}
                            >{profile.title}</Typography>
                            <Typography variant="body2"
                                sx={{
                                    paddingLeft: '10px'
                                }}
                            >
                                <FavoriteIcon /> {profile.likes} Likes</Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default ProfileGrid;
