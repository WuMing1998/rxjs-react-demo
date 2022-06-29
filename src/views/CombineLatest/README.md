## combineLatest 运算子

作用:
combineLatest( arg: observableObj[] | observableObj );

combineLatest: 等待传递进来的 observable 全部执行完，就会发出一次结果。每当传递的 observable 有数据再次发出时，结果都会更新。

```tsx
import { combineLatest, timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

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
    timer(1, 3000),
  ])
);

useEffect(() => {
  console.log(value); // timeOut...5s [1,2,1]...timeOut...3s [1,2,2]...timeOut...3s [1,2,3]......
}, [value]);
```
