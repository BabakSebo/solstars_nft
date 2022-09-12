import React from "react";
import { Skeleton, Grid, Card, CardMedia } from "@mui/material";

export default function GifSkeleton(props) {
  const { loading = false } = props;
  return (
    <div>
      <Card>
        <Grid container spacing={1} justifyContent="center" marginTop="1rem">
          <Grid>
            {loading ? (
              <Skeleton variant="circular" width={190} height={190} />
            ) : (
              <CardMedia
                component="img"
                height="140"
                image={require("../samplegif.gif")}
                alt="gif"
              />
            )}
          </Grid>
          <Grid>
            {loading ? (
              <Skeleton variant="circular" width={190} height={190} />
            ) : (
              <CardMedia
                component="img"
                height="140"
                image={require("../samplegif.gif")}
                alt="gif"
              />
            )}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
