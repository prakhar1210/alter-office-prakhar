import { Box } from '@mui/system'
import React from 'react';
import Sakshi from '../../albums/Menu.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/profile')
    }
    return (
        <Box>
            {/* dp and name */}
            <Box className="flex items-center space-y-2 gap-5 mt-10">
                <Box sx={{
                    width: '50px',
                    height: '50px',
                    border: '1px solid',
                    borderColor: 'black',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img
                        src={Sakshi}
                        alt='DP'
                    />
                </Box>
                <Box>
                    <Box
                        sx={{
                            fontFamily: 'Kumbh Sans',
                            fontSize: '10px',
                            fontWeight: 400,
                            lineHeight: '12.4px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none'
                        }}
                    >Welcome Back</Box>
                    <Box
                        sx={{
                            fontFamily: 'Kumbh Sans',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '19.84px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={goToProfile}
                    >Sakshi Shrivastava</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
