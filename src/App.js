import React, { useState } from 'react';
// rfc
export default function App() {
const [sum, setSum] = useState(null);
const [SoA, setSoA] = useState(0);
const [SoB, setSoB] = useState(0);
const handleSum = () => {
    setSum (Number(SoA) +  Number(SoB));
}
  return (
      <>
          <div className="container">
              <div className="form-group">
                  Số A: <input type="number" className="form-control" 
            onChange={(e)=>setSoA(e.target.value)}/>
              </div>

              <div className="form-group">
                  Số B: <input type="number" className="form-control"
                  onChange={(e)=>setSoB(e.target.value)} />
              </div>
              <div className="form-group">
               Tong : {sum}
              </div>
              <div className="form-group">
                  <button className="btn btn-primary" onClick={handleSum}>Tính</button>
              </div>
          </div>
      </>
  );
}
