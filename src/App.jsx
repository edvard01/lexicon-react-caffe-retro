import { Nav } from "./Nav.jsx";
import { PanelHot } from "./PanelHot.jsx";
import { PanelJuicy } from "./PanelJuicy.jsx";
import { PanelCosy } from "./PanelCosy.jsx";

export function App() {
  return (
    <>
      <Nav />
      <PanelHot id="hot" />
      <PanelJuicy id="juicy" />
      <PanelCosy id="cosy" />
    </>
  );
}
