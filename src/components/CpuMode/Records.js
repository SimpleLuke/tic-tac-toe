const Records = (props) => {
  return (
    <section className="records-container">
      <div className="records-you">
        <p className="records-role">X (YOU)</p>
        <p className="records-score">{props.player}</p>
      </div>
      <div className="records-tie">
        <p className="records-role">TIES</p>
        <p className="records-score">{props.tie}</p>
      </div>
      <div className="records-cpu">
        <p className="records-role">O (CPU)</p>
        <p className="records-score">{props.cpu}</p>
      </div>
    </section>
  );
};

export default Records;
