import "./panel.css";

export function Panel() {
  return (
    <div className="panel">
      <div className="content">
        <h4>Hot</h4>
        <p className="text-box box-1">
          Hot freshly ground black coffee or a cup of exquisite tea?
        </p>
        <p className="text-box box-2">
          We give you that perfect cup every time
        </p>
        <div className="price-box">
          <span className="drinks"></span>
          <span className="prices"></span>
        </div>
      </div>
    </div>
  );
}
