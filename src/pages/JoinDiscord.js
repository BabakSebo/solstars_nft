import React from "react";
import { Skeleton, Grid, Card, Typography, Box, Stack } from "@mui/material";

export default function JoinDiscord(props) {
  const { loading = false } = props;
  return (
    <Stack
      sx={{
        backgroundColor: "#b3c2d5",
      }}
    >
      <Box marginBottom={5}>
        <Typography marginBottom={2} marginTop={4}>
          <p>📱Join Our Discord📱</p>
        </Typography>
        <Card
          sx={{
            maxWidth: 750,
            mx: "auto",
            backgroundColor: "#e3ecf6",
          }}
        >
          <Grid container justifyContent="center" marginTop="2rem">
            <Grid sx={{ maxWidth: 250 }}>
              {loading ? (
                <Skeleton variant="circular" width={190} height={190} />
              ) : (
                <Skeleton variant="circular" width={190} height={190} />
              )}
              <Typography>World Cup Solstars </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Stack>
  );
}
