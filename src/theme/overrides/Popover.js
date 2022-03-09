// ----------------------------------------------------------------------

export default function Popover(theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: 'none',
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
        },
      },
    },
  };
}
