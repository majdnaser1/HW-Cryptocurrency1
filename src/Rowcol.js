import React from 'react'
import Img from './Img'

export const Rowcol = ({crypyoImg}) => {
  return (
    <div>
        <div className="container text-center">
  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-5">
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg} /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg}/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg}/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg}/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg} /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img cryptoImg={crypyoImg} /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><Img /></div>
    </div>
  </div>
</div>

    </div>
  )
}
export default Rowcol
