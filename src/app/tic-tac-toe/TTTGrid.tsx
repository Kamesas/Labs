import { tTile } from "./types";

type tProps = {
  tiles: tTile[];
  onMarkCallback: (i: number) => void;
};

export const TTTGrid = ({ tiles, onMarkCallback }: tProps) => {
  return (
    <div className="grid grid-cols-[repeat(3,100px)] grid-rows-[repeat(3,100px)]">
      {tiles.map((tile, i) => {
        return (
          <div
            key={i}
            onClick={() => onMarkCallback(i)}
            className="border cursor-pointer hover:bg-amber-200"
          >
            {tile.mark}
          </div>
        );
      })}
    </div>
  );
};
