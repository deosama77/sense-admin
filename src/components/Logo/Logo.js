// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
  
 *
 */

import logo from 'assets/images/sens_logo.jpg';
// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <>
            <img src={logo} alt="sensembo" width="50" style={{ borderRadius: 15 }} />
        </>
    );
};

export default Logo;
