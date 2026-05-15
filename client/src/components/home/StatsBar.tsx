const stats = [
  ['5 AM', 'Opens Early'],
  ['AC', 'Fully Air-Conditioned'],
  ['6', 'Fitness Programs'],
  ['Rs. 999', 'Starting Monthly']
];

const StatsBar = () => (
  <section className="stats-strip">
    <div className="container">
      <div className="row g-4 text-center">
        {stats.map(([number, label]) => (
          <div className="col-6 col-md-3" key={label}>
            <div className="stats-number">{number}</div>
            <div className="fw-bold text-uppercase small">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
