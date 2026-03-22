import { tPlayer } from "./types";

type tProps = {
  onChangePlayer: (player: tPlayer) => void;
};

export const ChoosePlayer = ({ onChangePlayer }: tProps) => {
  return (
    <div>
      <div>Choose the player </div>
      <div onClick={() => onChangePlayer("x")}>x</div> or{" "}
      <div onClick={() => onChangePlayer("o")}>o</div>
    </div>
  );
};
