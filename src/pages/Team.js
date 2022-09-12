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
        <h2>Team</h2>
      </Typography>
      <Card
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#b3c2d5",
        }}
      >
        <Grid container spacing={1} justifyContent="center" marginTop="1rem">
          <Card sx={{ m: 2, maxWidth: 250 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: 12 }}
                    >
                      Founder
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Gus.png")}
                    alt="Gus"
                  />
                  <CardContent>
                    <Typography>Gus</Typography>
                  </CardContent>
                </div>
              )}
            </Grid>
          </Card>
          <Card sx={{ m: 2 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: 12 }}
                    >
                      Artist
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Aud.png")}
                    alt="Aud"
                  />
                  <CardContent>
                    <Typography>Aud</Typography>
                  </CardContent>
                </div>
              )}
            </Grid>
          </Card>
          <Card sx={{ m: 2, maxWidth: 120 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: 12 }}
                    >
                      Developer
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../che.png")}
                    alt="Sebo"
                  />
                  <CardContent>
                    <Typography>Sebo</Typography>
                  </CardContent>
                </div>
              )}
            </Grid>
          </Card>
          <Card sx={{ m: 2, maxWidth: 120 }}>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={190} height={190} />
              ) : (
                <div>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: 12 }}
                    >
                      Community
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("../Dim.png")}
                    alt="Aud"
                  />
                  <CardContent>
                    <Typography>Gunju</Typography>
                  </CardContent>
                </div>
              )}
            </Grid>
          </Card>
        </Grid>
      </Card>
    </Box>
  );
}
