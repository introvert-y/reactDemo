
import React, { useState, useMemo } from 'react';

function Page() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  const expensive = useMemo(() => {
      console.log('compute');
      let sum = 0;
      for (let i = 0; i < count * 100; i++) {
          sum += i;
      }
      return sum;
  }, [count]);

  return <div style={{ marginLeft: 40 }}>
      <h2>类似vue的计算属性，函数只依赖按钮的点击事件</h2>
      <h4>{count}-{expensive}</h4>
      {val}
      <div>
          <button onClick={() => setCount(count + 1)}>+c1</button>
          <input value={val} onChange={event => setValue(event.target.value)}/>
      </div>
  </div>;
}


export default Page;