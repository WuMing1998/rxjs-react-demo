import React, { FC, useEffect, useState } from "react";

import { Observable, of, merge } from "rxjs";
import { useObservable } from "rxjs-hooks";

export const Merge: FC = () => {
  const ofObservable = useObservable(() =>
    merge(
      new Promise((res, rej) => {
        setTimeout(() => {
          res({ a: 1 });
        }, 2000);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          res({ b: 2 });
        }, 4000);
      }),
      2
    )
  );
  useEffect(() => {
    console.log(ofObservable);
  }, [ofObservable]);

  return <div> merge</div>;
};
