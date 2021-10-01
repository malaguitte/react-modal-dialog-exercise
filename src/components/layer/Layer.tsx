import { PropsWithChildren } from "react";
import "./Layer.scss";

interface LayerProps extends PropsWithChildren<any> {
  isActive: boolean;
}

function Layer(props: LayerProps) {
  return (
    <div className="layer_parent">
      <div className={`layer_content resizable ${props.isActive ? 'active': ''}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Layer;