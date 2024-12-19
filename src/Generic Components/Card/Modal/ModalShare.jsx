import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyAllIcon from '@mui/icons-material/CopyAll';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '348px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    height: '379px',
};

export default function TransitionsModal({ open, handleClose }) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ fontWeight: 800, fontSize: '22px' }}>
                            Share post
                        </Typography>
                        <CancelIcon sx={{ backgroundColor: '#F5F5F5', cursor: 'pointer' }} onClick={handleClose} />
                    </Box>
                    {/* the share icons*/}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        {/* <TwitterIcon /> */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <TwitterIcon sx={{
                                backgroundColor: '#E9F6FB',
                                color: '#1DA1F2',
                                borderRadius: '50%',
                                padding: '8px',
                                fontSize: '30px',
                                gap: '10px',
                                margin: "10px",
                                width: '56px',
                                height: '56px',
                            }} />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Twitter
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <FacebookIcon sx={{
                                backgroundColor: '#E7F1FD',
                                color: '#1877F2',
                                borderRadius: '50%',
                                padding: '8px',
                                fontSize: '30px',
                                gap: '10px',
                                margin: "10px",
                                width: '56px',
                                height: '56px',
                            }} />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Facebook
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <RedditIcon
                                sx={{
                                    backgroundColor: '#FDECE7',
                                    color: '#FF4500',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    fontSize: '30px',
                                    gap: '10px',
                                    margin: "10px",
                                    width: '56px',
                                    height: '56px',
                                }} />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Reddit
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <WhatsAppIcon
                                sx={{
                                    backgroundColor: '#E7FBF0',
                                    color: '#25D366',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    fontSize: '30px',
                                    gap: '10px',
                                    margin: "10px",
                                    width: '56px',
                                    height: '56px',
                                }} />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Whats App
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <TelegramIcon
                                sx={{
                                    backgroundColor: '#E6F3FB',
                                    color: '#0088CC',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    fontSize: '30px',
                                    gap: '10px',
                                    margin: "10px",
                                    width: '56px',
                                    height: '56px',
                                }} />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Telegram
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <InstagramIcon sx={{
                                backgroundColor: '#FF40C617',
                                color: '#E1306C',
                                borderRadius: '50%',
                                padding: '8px',
                                fontSize: '30px',
                                gap: '10px',
                                margin: "10px",
                                width: '56px',
                                height: '56px',
                            }}
                            />
                            <Typography sx={{
                                marginTop: '5px',
                                marginBottom: '5px',
                                opacity: '60%',
                                fontWeight: 600,
                            }}>
                                Instagram
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600
                            }}
                        >
                            Page Link
                        </Typography>
                        <Box
                            sx={{
                                border: '1px solid',
                                borderColor: '#D9D9D9',
                                width: '288px',
                                height: '48px',
                                borderRadius: '8px',
                                opacity: '30%',
                                backgroundColor: '#D9D9D9',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}><Box>
                            </Box><Typography>https://www.arnav/feed</Typography><CopyAllIcon sx={{

                            }} /></Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
