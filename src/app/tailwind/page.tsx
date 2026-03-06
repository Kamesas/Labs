export default function Tailwind() {
  return (
    <main>
      {/* 1. Typography — play with size, weight, line height, letter spacing */}
      <section className="p-2 flex flex-col gap-2">
        <h1 className="text-4xl uppercase font-bold text-green-600">
          Big heading
        </h1>
        <p className="text-lg font-light leading-tight line-clamp-2">
          Smaller paragraph with lighter weight and relaxed line height. Smaller
          paragraph with lighter weight and relaxed line height. Smaller
          paragraph with lighter weight and relaxed line height.
        </p>
        <p className="text-sm italic tracking-wider text-gray-400">
          Even smaller muted text
        </p>
      </section>

      {/* 2. Colors — try background colors with matching text colors and different shades */}
      <section className="p-2">
        <h2 className="font-bold text-green-400 text-2xl">Colors</h2>
        <div className="flex gap-3">
          <span className="p-2 rounded-2xl bg-blue-400">blue-500</span>
          <span className="p-2 rounded-2xl bg-blue-200">blue-200</span>
          <span className="p-2 rounded-2xl bg-emerald-500">emerald-500</span>
          <span className="p-2 rounded-2xl bg-rose-300">rose-500</span>
          <span className="p-2 rounded-2xl bg-zinc-800">zinc-800</span>
        </div>
      </section>

      {/* 3. Spacing & layout — use flex, gap, padding, width, height */}
      <section className="p-2">
        <h2 className="font-bold text-2xl text-green-400">Spacing & layout</h2>
        <div className="flex justify-around gap-3">
          <div className="border-2 p-1 self-end">small padding</div>
          <div className="border-2 p-4 h-32">medium padding</div>
          <div className="border-2 p-8 w-3xl h-24">large padding</div>
        </div>
      </section>

      {/* 4. Borders & radius — try border width, style, color and different radius values */}
      <section className="p-2">
        <h2 className="font-bold text-2xl text-green-400">Borders & radius</h2>

        <div className="flex gap-2.5">
          <div className="border-8 p-2">no radius</div>
          <div className="border-2 border-green-300 p-2 rounded-lg">
            rounded-lg
          </div>
          <div className="border-2 p-2 h-24 w-24 text-center flex items-center rounded-full">
            rounded-full
          </div>
          <div className="border-2 p-2 border-dashed">dashed border</div>
        </div>
      </section>

      {/* 5. Hover states — add hover: modifier to change color, scale, or other properties */}
      <section className="p-2">
        <h2 className="font-bold text-2xl text-green-400">Hover states</h2>

        <div className="flex gap-5">
          <button className="border-2 p-2 duration-1000 bg-amber-500 hover:bg-amber-800 cursor-pointer">
            hover: darker background
          </button>
          <button className="border-2 p-2 hover:scale-105 transition-transform cursor-pointer">
            hover: scale up
          </button>
          <button className="border-2 border-green-300 hover:border-green-600 transition-all duration-1000 cursor-pointer p-2">
            hover: change border color
          </button>
        </div>
      </section>

      {/* 6. Responsive — use sm: md: lg: prefixes, resize the browser to see changes */}
      <section className="p-2">
        <h2 className="font-bold text-sm sm:text-2xl text-green-400">
          Responsive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 [&>div]:border-2">
          <div>col 1</div>
          <div>col 2</div>
          <div>col 3</div>
          <div>col 4</div>
        </div>
      </section>

      {/* 7. Dark mode — use dark: modifier, toggle your OS theme to test */}
      <section className="p-2">
        <h2 className="font-bold text-sm sm:text-2xl text-green-400">
          Dark mode
        </h2>

        <div className="bg-amber-50 dark:bg-black">
          <p className="text-gray-800 dark:text-white">
            This card reacts to dark mode
          </p>
          <p className="text-gray-800 dark:text-white">
            Background, border and text all change
          </p>
        </div>
      </section>
    </main>
  );
}
