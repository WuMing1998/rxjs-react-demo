import React, { useEffect, useState } from "react";

import { Observable, of, first, map, forkJoin, timer } from "rxjs";

const observable1 = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next(111);
    subscriber.complete();
  }, 2000);
});
const observable2 = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next(222);
    subscriber.complete();
  }, 4000);
});
const observable3 = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next(333);
    subscriber.complete();
  }, 5000);
});

/**
 * 
 * @TODO 解决Observable在组件中实例化次数过多的隐患。
 */ 
export function ForkJoin() {
  const [loaded, setLoaded] = useState<boolean>(false);
  // const [observable1,observable2,observable3] = useObservable();
  const observableForkJoin = forkJoin([observable1, observable2, observable3]);

  observableForkJoin.subscribe({
    next: (value) => {
      console.log(value);
    },
    complete() {
      setLoaded(true);
      console.log("执行完了");
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
