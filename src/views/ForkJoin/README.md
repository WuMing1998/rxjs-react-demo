## forkJoin 运算子

作用:
forkJoin( arg: observableObj[] | observableObj );

forkJoin: 等待传递进来的observable全部执行完后再进行观察,如果observable一直没有确定的结果，则会一直处于等待状态.

```tsx
import { forkJoin, timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

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
  console.log(value); // timeOut...5s ['loaded',0,0].
}, [value]);

```
