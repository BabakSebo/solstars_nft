import { Typography } from "@mui/material";

export default function About() {
  return (
    <div className="About">
      <Typography marginBottom={2}>
        <h2>About</h2>
      </Typography>
      <h5>
        A wildly successful SolStars launch saw us instantly sell out our
        collection of 500 hand-drawn pixelated characters.
      </h5>
      <h5>A journey that has included:</h5>
      <h5>
        <h5>- Weekly NFT airdrops ✔ </h5>
        <h5>- Tangible giveaways, including a PS5 ✔</h5>
        <h5>
          - Golden Ticket feature, enabling a SolStar holder to burn their NFT
          and select their own character ✔
        </h5>
        <h5>- Holographic upgrades ✔</h5>
        <h5>- Alpha Whitelist ✔</h5>
      </h5>
      <p>⚽ The Beautiful Game ⚽</p>
      <img src={require("../pitch.png")} alt="pixelated football pitch" />
      <h5>Now we bring to you our very own World Cup edition </h5>
      <h5>
        A collection of 1000 unique pfp's of players, managers and the legends
        that have graced the hallowed turf of World Cup football.
      </h5>
    </div>
  );
}
