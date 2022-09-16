import { Stack } from "@mui/system";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton size="medium">
            <a href="#Home">
              <CardMedia
                component="img"
                height="40"
                image={require("../snoop.png")}
                alt="logo"
              />
            </a>
          </IconButton>
          <Stack
            sx={{ justifyContent: "center" }}
            flexGrow="1"
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <a href="#About">
              <Button
                sx={{
                  fontSize: "large",
                  color: "text.secondary",
                  fontFamily: "Silkscreen",
                }}
              >
                About
              </Button>
            </a>
            <a href="#Team">
              <Button
                sx={{
                  fontSize: "large",
                  color: "text.secondary",
                  fontFamily: "Silkscreen",
                }}
              >
                Team
              </Button>
            </a>
            <a href="#Prizes">
              <Button
                sx={{
                  fontSize: "large",
                  color: "text.secondary",
                  fontFamily: "Silkscreen",
                }}
              >
                Prizes/Giveaways
              </Button>
            </a>
            <a href="#Faq">
              <Button
                sx={{
                  fontSize: "large",
                  color: "text.secondary",
                  fontFamily: "Silkscreen",
                }}
              >
                FAQ
              </Button>
            </a>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
