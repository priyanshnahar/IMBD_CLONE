import {AppBar, Toolbar, styled, Typography} from '@mui/material';
import { logoURL } from '../../constants/constant';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

const StyledToolBar = styled(Toolbar) `
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;

`

const Logo = styled("img") ({
    width: 64
})

const Header = () => {
    return (
     <AppBar>
        <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box>
        <MenuIcon/>
        <Typography>
        Menu
      </Typography>
        </Box>
     
        </StyledToolBar>
     </AppBar>
    )
}

export default Header;