import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Team(props) {
  const { loading = false } = props;
  return (
    <Box>
      <Typography marginBottom={2}>
        <h2 id="Team">Team</h2>
      </Typography>
      <Card
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#b3c2d5",
        }}
      >
        <Grid container spacing={1} justifyContent="center" marginTop="1rem">
          <Card sx={{ m: 2, maxWidth: 100, minWidth: 100, maxHeight: 200 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent></CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Gus.png")}
                    alt="Gus"
                  />

                  <Typography>Gus</Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 10 }}
                  >
                    Founder
                  </Typography>
                </div>
              )}
            </Grid>
          </Card>

          <Card sx={{ m: 2, maxWidth: 100, minWidth: 100, maxHeight: 200 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent></CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Aud.png")}
                    alt="Aud"
                  />

                  <Typography>Aud</Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 10 }}
                  >
                    Designer
                  </Typography>
                </div>
              )}
            </Grid>
          </Card>
          <Card sx={{ m: 2, maxWidth: 100, minWidth: 100, maxHeight: 200 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent></CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../che.png")}
                    alt="Sebo"
                  />

                  <Typography>Sebo</Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 10 }}
                  >
                    Developer
                  </Typography>
                </div>
              )}
            </Grid>
          </Card>
          <Card sx={{ m: 2, maxWidth: 100, minWidth: 100, maxHeight: 200 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent></CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Dim.png")}
                    alt="Aud"
                  />

                  <Typography>Gunju</Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 10 }}
                  >
                    Community Manager
                  </Typography>
                </div>
              )}
            </Grid>
          </Card>
        </Grid>
      </Card>
    </Box>
  );
}
