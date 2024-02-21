import "./panel.css";

export function PanelJuicy() {
  return (
    <div id="juicy" className="panel">
      <div className="content">
        <h4>Juicy</h4>
        <p className="text-box box-1">Ripe fruit - freshly squeezed.</p>
        <p className="text-box box-2">
          It's as simple as that. Chunky or smooth - it's your choice.
        </p>
        <div className="price-box">
          <span className="drinks">
            <p>Branched Apricots</p>
            <p>Deep Rasberries</p>
            <p>Smooth Oranges</p>
          </span>
          <span className="prices">
            <p>€ 4.20</p>
            <p>€ 3.50</p>
            <p>€ 6.50</p>
          </span>
        </div>
      </div>
    </div>
  );
}
