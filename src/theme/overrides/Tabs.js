// ----------------------------------------------------------------------

export default function Tabs(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: theme.palette.text.primary,
          },
          '@media (min-width: 600px)': {
            minWidth: 48,
          },
        }
      }
    },
  };
}
