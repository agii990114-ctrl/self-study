import { createRoot } from 'react-dom/client'

const Flower =(props)=>{
  return (
    <p>나는 {props.color[2]}{props.kind}{props.amount}송이 입니다. </p>
  )
}
const cnt =(num)=> num *10
let flowerNum = 8;
const a = ['빨강','노랑','파랑',];
const b = {kind: "장미꽃", amount: cnt(flowerNum) };

createRoot(document.getElementById('root')).render(
  <Flower kind={b.kind} color={a} amount={b.amount}/>
);