import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

// ----------------------------------------------------------------------

const Avatar = forwardRef(({ children, sx, ...other }, ref) => (
      <MUIAvatar ref={ref} sx={sx} {...other}>
        {children}
      </MUIAvatar>
    ));

Avatar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default Avatar;
