const Records = ({ playerMark, player, tie, cpu, mode }) => {
  return (
    <section className="records-container">
      <div className={playerMark === "x" ? "records-you" : "records-cpu"}>
        <p className="records-role">
          {mode === "cpu" && (playerMark === "x" ? "X (YOU)" : "O  (YOU)")}
          {mode === "multi" && (playerMark === "x" ? "X (P1)" : "O  (P1)")}
        </p>
        <p className="records-score">{player}</p>
      </div>
      <div className="records-tie">
        <p className="records-role">TIES</p>
        <p className="records-score">{tie}</p>
      </div>
      <div className={playerMark === "x" ? "records-cpu" : "records-you"}>
        <p className="records-role">
          {mode === "cpu" && (playerMark === "x" ? "O (CPU)" : "X  (CPU)")}
          {mode === "multi" && (playerMark === "x" ? "O (P2)" : "O  (P2)")}
        </p>
        <p className="records-score">{cpu}</p>
      </div>
    </section>
  );
};

export default Records;
