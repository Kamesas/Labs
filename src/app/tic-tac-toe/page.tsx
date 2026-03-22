"use client";

import { useState } from "react";
import { TTTGrid } from "./TTTGrid";
import { checkResult, getInitState } from "./helpers";
import { tPlayer, tTile } from "./types";

export default function TicTacToe() {
  const [player, setPlayer] = useState<tPlayer>(null);
  const [winner, setWinner] = useState<tPlayer>(null);
  const [tiles, setTiles] = useState<Array<tTile>>(getInitState());

  console.log("tiles --->:", tiles);
  console.log("player --->:", player);

  const onChangePlayer = (player: tPlayer) => {
    setPlayer(player);
  };

  const onReset = () => {
    setPlayer(null);
    setWinner(null);
    setTiles(getInitState());
  };

  const onMark = (currTile: number) => {
    if (winner) return;

    const curr = tiles[currTile];

    if (curr.mark !== null) return;

    const updTiles = tiles.map((tile, i) => {
      if (i !== currTile) return tile;
      return { ...tile, mark: player };
    });

    const isWinner = checkResult(updTiles);
    if (isWinner) setWinner(isWinner);

    setTiles(updTiles);

    const updPlayer = player === "x" ? "o" : "x";
    setPlayer(updPlayer);
  };

  return (
    <div>
      <h1>TTT game</h1>
      {!player && (
        <div>
          <div>Choose the player </div>
          <div onClick={() => onChangePlayer("x")}>x</div> or{" "}
          <div onClick={() => onChangePlayer("o")}>o</div>
        </div>
      )}

      {winner && (
        <div>
          <h1>Winner is: {winner}</h1>

          <button onClick={onReset}>Reset the game</button>
        </div>
      )}

      {!!player && (
        <div>
          <h2 className="text-orange-400 py-1.5">
            Current player is:{" "}
            <span className="uppercase font-bold">{player}</span>
          </h2>
          <TTTGrid tiles={tiles} onMarkCallback={onMark} />
        </div>
      )}
    </div>
  );
}
