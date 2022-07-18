## forkJoin 运算子

作用:
merge merge 的作用是将多个 observable 合并成一个 observable 并一次性完成他们，结果会分别输出

适用场景：例如查询条件是多个的话，只要其中一个数据发生改变，结果就改变。

```tsx
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
  console.log(ofObservable); // timer 2s...  {a:1} timer 4s... {b:2}
}, [ofObservable]);
```
