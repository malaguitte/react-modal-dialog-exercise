import { PropsWithChildren } from "react";
import "./Layer.scss";

interface LayerProps extends PropsWithChildren<any> {
  isActive: boolean;
}

function Layer(props: LayerProps) {
  return (
    <div id="layer" className="layer_parent">
      <div id="layer_content" className={`layer_content resizable ${props.isActive ? 'active': ''}`}>
        <div id="layer_content_header" className="layer_content_header"></div>
        {props.children}
      </div>
    </div>
  );
}

export default Layer;