## forkJoin 运算子

作用:
forkJoin( arg: observableObj[] | observableObj );

forkJoin: 等待传递进来的observable全部执行完后再进行观察.

```tsx
import { Observable , forkJoin } from "rxjs";
  const observable1 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(1);
      subscriber.complete();
    },2000)
  })
  const observable2 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(2);
      subscriber.complete();
    },4000)
  })
  const observable3 = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(3);
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
        console.log('执行完了')
    },
  })
```
