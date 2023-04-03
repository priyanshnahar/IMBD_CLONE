import {useState} from 'react';
 
import { AppBar, Toolbar, styled, Typography, InputBase } from "@mui/material";
import { logoURL } from "../../constants/constant";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeaderMenu from "./HeaderMenu";
import { Box } from "@mui/system";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0  16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const InputSearchField = styled(InputBase)`
    background: #ffff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled("img")({
  width: 64,
});

const Header = () => {

    const [open, setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
      setOpen(null)
    }

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick = {handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open= {open} handleClose={handleClose}/>
        <InputSearchField />
        <Typography>
          IMDb <Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAddIcon />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMoreIcon />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
