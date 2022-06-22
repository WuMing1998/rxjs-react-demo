import React, { useState } from "react";

import { Observable } from "rxjs";

export function Study() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const observable = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(1);
    }, 500);
    setTimeout(() => {
      subscriber.next(2);
    }, 1000);
    setTimeout(() => {
      subscriber.next(3);
    }, 1500);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 2000);
  });

  observable.subscribe({
    next(x) {
      //   console.log("got value " + x);
    },
    error(err) {
      console.error("something wrong occurred: " + err);
    },
    complete() {
      setLoaded(true);
      console.log("done");
    },
  });
  return (
    <div>
      rxjs Study...
      <br /> 页面加载完了吗？
      <br />
      {loaded ? "加载完了" : "加载中..."}
    </div>
  );
}
