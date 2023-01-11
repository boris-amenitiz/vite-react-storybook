import { forwardRef } from "react";

const SvgMock = (props, ref) => <span ref={ref} {...props} />;
SvgMock.displayName = "SvgMock";

export const ReactComponent = forwardRef(SvgMock);
export default ReactComponent;
