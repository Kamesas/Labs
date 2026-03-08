export default function GridCS() {
  return (
    <main>
      {/* 1. Basic grid — display: grid, grid-template-columns, grid-template-rows */}
      <section>
        <h2 className="my-class">1. Basic grid</h2>
        <div
          className="[&>div]:border-2"
          style={{
            padding: "16px",
            display: "grid",
            gridTemplateColumns: "320px 2fr",
            gridTemplateRows: "1fr 3fr 1fr",
          }}
        >
          <div className="text-16">1</div>
          <div className="text-20">2</div>
          <div className="text-16/20">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </section>

      {/* 2. The fr unit — fractional unit, distributes available space
          try: "1fr 1fr 1fr", "2fr 1fr", "1fr 2fr 1fr" in grid-template-columns */}
      <section>
        <h2>2. The fr unit</h2>

        <div
          className="[&>div]:border-2"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" }}
        >
          <div>2fr</div>
          <div>1fr</div>
          <div>1fr</div>
        </div>
      </section>

      {/* 3. gap — row-gap, column-gap, or shorthand gap
          gap: "row column" or single value for both */}
      <section>
        <h2>3. gap</h2>
        <div
          className="[&>div]:border-2 border-2 p-2 border-red-500"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px 10px",
          }}
        >
          <div className="border p-0.5 w-52 h-52">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </section>

      {/* 4. Spanning — grid-column and grid-row
          grid-column: "1 / 3" means start at line 1, end at line 3 (spans 2 cols)
          shorthand: grid-column: "span 2" */}
      <section>
        <h2>4. Spanning columns & rows</h2>
        <div
          className="[&>div]:border"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div style={{ gridColumn: "1/3" }}>spans 2 cols</div>
          <div>2</div>
          <div>3</div>
          <div style={{ gridRow: "span 2" }}>spans 2 rows</div>
          <div>5</div>
          <div>6</div>
        </div>
      </section>

      {/* 5. grid-template-areas — name regions of your grid
          each string is a row, each word is a cell name
          use grid-area on children to place them */}
      <section>
        <h2>5. Template areas</h2>
        <div
          className="[&>div]:border"
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gridTemplateRows: "1fr 500px 1fr",
            gridTemplateAreas: `
              "header header"
              "sidebar content"
              "footer footer"
          `,
          }}
        >
          <div style={{ gridArea: "header" }}>header</div>
          <div style={{ gridArea: "sidebar" }}>sidebar</div>
          <div style={{ gridArea: "content" }}>content</div>
          <div style={{ gridArea: "footer" }}>footer</div>
        </div>
      </section>

      {/* 6. Alignment — justify-items / align-items aligns children within their cell
          justify-content / align-content aligns the grid tracks within the container
          values: start | end | center | stretch */}
      <section>
        <h2>6. Alignment</h2>
        <div
          className="[&>div]:border [&>div]:w-28 border p-2 min-h-32 max-w-2xl m-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ placeSelf: "start" }}>start</div>
          <div style={{ placeSelf: "center" }}>center</div>
          <div style={{ placeSelf: "end" }}>end</div>
          <div style={{ placeSelf: "stretch" }}>stretch</div>
        </div>
      </section>

      {/* 7. repeat() + minmax() — responsive columns without media queries
          auto-fill: creates as many columns as fit, keeps empty tracks
          auto-fit: same but collapses empty tracks
          minmax(min, max): column is at least min, at most max wide */}
      <section>
        <h2>7. repeat + minmax (auto-fill)</h2>
        <div
          className="[&>div]:bg-amber-500 p-2"
          style={{
            display: "grid",
            // gridTemplateColumns: "repeat(4, minmax(200px, 300px))",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          <div>1</div>
          <div>2</div>
          {/* <div>3</div> */}
          {/* <div>4</div> */}
          {/* <div>5</div> */}
          {/* <div>6</div> */}
        </div>
      </section>

      <section>
        <h2>8. Custom layout 1</h2>

        <div
          className="p-2 [&>div]:border [&>div]:min-h-52 [&>div]:bg-amber-700"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ gridRow: "1/3", gridColumn: "1/2" }}>1</div>
          <div style={{ gridRow: "1/2", gridColumn: "2/4" }}>2</div>
          <div>3</div>
          <div>4</div>
          <div style={{ gridColumn: "3/5" }}>5</div>
        </div>
      </section>
    </main>
  );
}
