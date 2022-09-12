import { Stack } from "@mui/system";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  IconButton,
  Link,
  AppBar,
  Toolbar,
} from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton size="medium">
            <CardMedia
              component="img"
              height="40"
              image={require("../snoop.png")}
              alt="logo"
            />
          </IconButton>

          <Stack
            sx={{ justifyContent: "center" }}
            flexGrow="1"
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {/* <Link
              to="/"
              sx={{
                fontSize: "large",
                color: "text.secondary",
                fontFamily: "Silkscreen",
              }}
              component="button"
              underline="none"
            >
              Test Link
            </Link> */}
            <Button
              sx={{
                fontSize: "large",
                color: "text.secondary",
                fontFamily: "Silkscreen",
              }}
            >
              About
            </Button>
            <Button
              sx={{
                fontSize: "large",
                color: "text.secondary",
                fontFamily: "Silkscreen",
              }}
            >
              Team
            </Button>
            <Button
              sx={{
                fontSize: "large",
                color: "text.secondary",
                fontFamily: "Silkscreen",
              }}
            >
              Prizes/Giveaways
            </Button>
            <Button
              sx={{
                fontSize: "large",
                color: "text.secondary",
                fontFamily: "Silkscreen",
              }}
            >
              FAQ
            </Button>
          </Stack>
          {/* <IconButton size="medium">
            <CardMedia
              component="img"
              height="40"
              image={require("../snoop.png")}
              alt="logo"
            />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
