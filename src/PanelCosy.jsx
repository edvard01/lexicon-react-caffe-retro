import "./panel.css";

export function PanelCosy() {
  return (
    <div id="cosy" className="panel">
      <div className="content">
        <h4>Cosy</h4>
        <p className="text-box box-1">Hang around. Enjoy the settings.</p>
        <p className="text-box box-2">
          Use our fast WiFi. Borrow a newspaper or a novel.
        </p>
        <div className="price-box">
          <span className="drinks">
            <p>Mon-Sun</p>
            <p>Caffe Retro</p>
            <p>0123-45 67 89</p>
          </span>
          <span className="prices">
            <p>8am - 11pm</p>
            <p>Canto VI</p>
            <p>caffe@lorem.pge</p>
          </span>
        </div>
      </div>
    </div>
  );
}
