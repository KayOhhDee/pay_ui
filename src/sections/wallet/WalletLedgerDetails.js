import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function WalletLedgerDetails() {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='body2' color="text.secondary">Ledger Balance</Typography>
          </Grid>
          <Grid item xs={6}>2,000,000.50</Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='body2' color="text.secondary">Total Incoming</Typography>
          </Grid>
          <Grid item xs={6}>€2,000,000.50</Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='body2' color="text.secondary">Blocked Balance</Typography>
          </Grid>
          <Grid item xs={6}>€0.00</Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='body2' color="text.secondary">Total Outgoing</Typography>
          </Grid>
          <Grid item xs={6}>€5,000,000.50</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
