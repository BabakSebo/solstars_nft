import React from "react";
import GifSkeleton from "../components/GifSkeleton";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h6>Solstars</h6>
      <GifSkeleton />
      <h2>World Cup SolStars</h2>
      <h3>mint date: 11/11/22</h3>
      <Button
        variant="outlined"
        size="large"
        sx={{
          color: "rgba(0, 0, 0, 0.54)",
          backgroundColor: "rgba(199,216,237,255)",
          borderColor: "rgba(0, 0, 0, 0.54)",
        }}
      >
        Go to Launchpad
      </Button>
      <h4>First Collection: SOLD OUT</h4>
    </div>
  );
}
