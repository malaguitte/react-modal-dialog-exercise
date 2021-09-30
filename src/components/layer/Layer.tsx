import { PropsWithChildren } from "react";
import "./Layer.scss";

interface LayerProps extends PropsWithChildren<any> {}

function Layer(props: LayerProps) {
  return (
    <div className="layer_parent">
      <div className="layer_content">
        {props.children}
      </div>
    </div>
  );
}

export default Layer;