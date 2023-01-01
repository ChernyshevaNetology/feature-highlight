import React from "react";

function Popular({ children }: React.PropsWithChildren) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
}

export { Popular };
