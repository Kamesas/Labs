type tProps = { goTo: (direction: "next" | "prev" | number) => void };

export const ControlsContainer = ({ goTo }: tProps) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button
        onClick={() => goTo("prev")}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "transparent",
          color: "#fff",
          cursor: "pointer",
          fontSize: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        &larr;
      </button>
      <button
        onClick={() => goTo("next")}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "transparent",
          color: "#fff",
          cursor: "pointer",
          fontSize: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        &rarr;
      </button>
    </div>
  );
};
