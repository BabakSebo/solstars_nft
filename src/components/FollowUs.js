import { Card, CardMedia, Link, Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export default function FollowUs(props) {
  const { loading = false } = props;
  return (
    <Box>
      <Grid container spacing={1} justifyContent="center" marginTop="1rem">
        <Card sx={{ m: 2, maxWidth: 30, minWidth: 30, maxHeight: 70 }}>
          <Grid>
            {loading ? (
              <Skeleton variant="rectangular" width={190} height={190} />
            ) : (
              <div>
                <Link href="https://twitter.com/SolStars_NFT">
                  <CardMedia
                    component="img"
                    height="100%"
                    sx={{ width: "100%", marginTop: "0.3rem" }}
                    image={require("../Twitter.png")}
                    alt="Twitter logo"
                  />
                </Link>
              </div>
            )}
          </Grid>
        </Card>

        <Card sx={{ m: 2, maxWidth: 30, minWidth: 30, maxHeight: 70 }}>
          <Grid>
            {loading ? (
              <Skeleton variant="rectangular" width={190} height={190} />
            ) : (
              <div>
                <Link href="https://discord.gg/QfbmFZeYU3">
                  <CardMedia
                    component="img"
                    height="100%"
                    sx={{ width: "100%" }}
                    image={require("../Discord.png")}
                    alt="Discord logo"
                  />
                </Link>
              </div>
            )}
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
}
//     <Stack>
//       <Typography>Follow Us</Typography>
//       <Card sx={{ maxWidth: 30, marginBottom: "1rem", mx: "auto" }}>
//         <Link href="https://twitter.com/SolStars_NFT">
//           <CardMedia
//             component="img"
//             height="15"
//             sx={{ width: "95%" }}
//             image={require("../Twitter.png")}
//             alt="Twitter logo"
//           />
//         </Link>
//         <Link href="https://discord.gg/QfbmFZeYU3">
//           <CardMedia
//             component="img"
//             height="15"
//             sx={{ width: "95%" }}
//             image={require("../Discord.png")}
//             alt="Discord logo"
//           />
//         </Link>
//       </Card>
//     </Stack>
//   );
// }
