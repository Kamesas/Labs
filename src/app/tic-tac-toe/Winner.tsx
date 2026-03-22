import { tPlayer } from "./types";

type tProps = {
  winner: tPlayer;
  onReset: () => void;
};

export const Winner = ({ onReset, winner }: tProps) => {
  return (
    <div>
      <h1>Winner is: {winner}</h1>

      <button onClick={onReset}>Reset the game</button>
    </div>
  );
};
