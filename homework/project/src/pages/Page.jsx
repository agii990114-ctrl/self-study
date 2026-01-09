import { useState } from "react";


const Page = () => {
  const [add, setAdd] = useState('');
  // const [search, setSearch] = useState('');
  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState(false);

  // const [add, setAdd] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setArr([...arr,{[]: add}])

  }

  const clickDel = (i) => {
    setArr(arr.filter((_,z) => z !== arr[i]))
  }

  const search = (data) => {
    console.log(data)
  }

  const onCheck = () => {
    
    if(check) {

    }
  }

  return (
    <div className="word-container">
      <h3 className="text-center mb-4">단어장</h3>

      {/* {<!-- 입력 및 수정 영역 -->} */}
      <form className="input-group mb-3" onSubmit={onSubmit}>
        <input type="text" name="word" className="form-control" placeholder="단어를 입력하세요" required value={add} onChange={e => setAdd(e.target.value)} />
        <button type="submit" className="btn btn-primary">추가</button>
      </form>

      {/* <!-- 검색 영역 --> */}
      <input type="text" name="search" className="form-control mb-3" placeholder="검색어를 입력하세요" onKeyUp={e => search(e.target.value)} />

      {/* <!-- 목록 --> */}
      <ul className="list-group">
        {/* <!-- 단어를 여기에 추가됩니다 --> */}
        {
          arr.map((v, i) =>
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center word-item">
              <div className="form-check">
                <input className="form-check-input"  type="checkbox" onChange={() => setCheck(!check)} />
                <span className={`ms-2 ${(check)? "text-decoration-line-through text-secondary": ""}`}>{v}</span>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => clickDel(i)}>삭제</button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Page;