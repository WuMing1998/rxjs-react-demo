import React, { useEffect, useState } from "react";

import { Observable, of, first, map,forkJoin, timer } from "rxjs";

export function Study() {
  const [loaded, setLoaded] = useState<boolean>(false);
  // const observable1 = of(1, 2, 3);
  // observable1.pipe(map((x) => x + 1)).subscribe((v) => {
  //   console.log(v);
  // });
  const observable1 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(111);
      subscriber.complete();
    },2000)
  })
  const observable2 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(222);
      subscriber.complete();
    },4000)
  })
  const observable3 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(333);
      subscriber.complete();
    },5000)
  })
  const observableForkJoin = forkJoin([
    observable1,
    observable2,
    observable3
  ])

  observableForkJoin.subscribe({
    next:value=>{
      console.log(value)
    },
    complete() {
        setLoaded(true)
        console.log('执行完了')
    },
  })
  // const observable = new Observable((subscriber) => {
  //   try {
  //     // setTimeout(() => {
  //     //   subscriber.next(1);
  //     // }, 500);
  //     // setTimeout(() => {
  //     //   subscriber.next(2);
  //     // }, 1000);
  //     // setTimeout(() => {
  //     //   subscriber.next(3);
  //     // }, 1500);
  //     // setTimeout(() => {
  //     //   subscriber.next(4);
  //     //   subscriber.complete();
  //     // }, 2000);
  //     setInterval(() => {
  //       subscriber.next("hello rxjs");
  //     }, 1000);
  //   } catch (error) {
  //     subscriber.error(error);
  //   }
  // });

  // const subscription = observable.subscribe({
  //   next(x) {
  //     console.log("got value " + x);
  //   },
  //   error(err) {
  //     console.error("something wrong occurred: " + err);
  //   },
  //   complete() {
  //     setLoaded(true);
  //     console.log("done");
  //   },
  // });
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("unsubscribe");
  //     subscription.unsubscribe();
  //   }, 3000);
  // }, [subscription]);
  return (
    <div>
      rxjs Study...
      <br /> 页面加载完了吗？
      <br />
      {loaded ? "加载完了" : "加载中..."}
    </div>
  );
}
