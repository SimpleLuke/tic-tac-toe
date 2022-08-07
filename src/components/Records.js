const Records = () => {
  return (
    <section className="records-container">
      <div className="records-you">
        <p className="records-role">X (YOU)</p>
        <p className="records-score">0</p>
      </div>
      <div className="records-tie">
        <p className="records-role">TIES</p>
        <p className="records-score">0</p>
      </div>
      <div className="records-cpu">
        <p className="records-role">O (CPU)</p>
        <p className="records-score">0</p>
      </div>
    </section>
  );
};

export default Records;
