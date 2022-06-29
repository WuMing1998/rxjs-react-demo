import React, { FC, useEffect, useState } from "react";

import { combineLatest, timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

export const CombineLatest: FC = () => {
  const combineRes = useObservable(() =>
    combineLatest([
      new Promise((res, rej) => {
        setTimeout(() => {
          res(1);
        }, 2000);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          res(2);
        }, 5000);
      }),
      timer(1,3000)
    ])
  );

  useEffect(() => {
    console.log(combineRes);
  }, [combineRes]);
  return <div>index</div>;
};
