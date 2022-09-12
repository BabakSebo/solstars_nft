import React from "react";
import { Skeleton, Grid, Card, Typography, Box } from "@mui/material";

export default function Prizes(props) {
  const { loading = false } = props;
  return (
    <Box>
      <Typography marginBottom={2}>
        <h2>Prizes</h2>
      </Typography>
      <Card
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#b3c2d5",
        }}
      >
        <Grid container spacing={1} justifyContent="center" marginTop="2rem">
          <Grid sx={{ m: 2, maxWidth: 250 }}>
            {loading ? (
              <Skeleton variant="circular" width={190} height={190} />
            ) : (
              <Skeleton variant="circular" width={190} height={190} />
            )}
            <Typography mt={2}>Solana</Typography>
          </Grid>
          <Grid sx={{ m: 2, maxWidth: 250 }}>
            {loading ? (
              <Skeleton variant="circular" width={190} height={190} />
            ) : (
              <Skeleton variant="circular" width={190} height={190} />
            )}
            <Typography mt={2}>NFT Giveaways</Typography>
          </Grid>
          <Grid sx={{ m: 2, maxWidth: 250 }}>
            {loading ? (
              <Skeleton variant="circular" width={190} height={190} />
            ) : (
              <Skeleton variant="circular" width={190} height={190} />
            )}
            <Typography mt={2}> Football Shirts</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
