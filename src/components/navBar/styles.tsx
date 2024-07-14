import type { SxProps } from '@mui/material';

interface NavStyleProps {
  [key: string]: SxProps;
}

export const NavStyles: NavStyleProps = {
  textFieldSearch: {
    width: 300,
    "& .MuiInputBase-colorPrimary":{},
    "& .MuiInputBase-input": {
      background: "white",
      borderRadius: "0rem 0.4rem 0.4rem 0rem",
    },
  },
};
