import React from "react";

function New({ children }: React.PropsWithChildren) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
}

export { New };
