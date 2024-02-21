import "./panel.css";

export function PanelHot() {
  return (
    <div id="hot" className="panel">
      <div className="content">
        <h4>Hot</h4>
        <p className="text-box box-1">
          Hot freshly ground black coffee or a cup of exquisite tea?
        </p>
        <p className="text-box box-2">
          We give you that perfect cup every time
        </p>
        <div className="price-box">
          <span className="drinks">
            <p>Mocha Latte</p>
            <p>Caffe Formaggio</p>
            <p>Espresso</p>
            <p>Chai Verde Latte</p>
          </span>
          <span className="prices">
            <p>€ 7.50</p>
            <p>€ 5.00</p>
            <p>€ 3.50</p>
            <p>€ 5.50</p>
          </span>
        </div>
      </div>
    </div>
  );
}
