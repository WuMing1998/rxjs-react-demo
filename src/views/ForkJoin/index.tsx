import React, { useEffect, useState } from "react";

import { forkJoin, timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

export function ForkJoin() {
  const value = useObservable(() =>
    forkJoin([
      new Promise((res, rej) => {
        try {
          setTimeout(() => {
            res("loaded");
          }, 5000);
        } catch (error) {
          rej(error);
        }
      }),
      timer(2000),
      timer(1000),
    ])
  );

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      rxjs Study...
      <br /> 页面加载完了吗？
      <br />
      {value ? "加载完了" : "加载中..."}
    </div>
  );
}
