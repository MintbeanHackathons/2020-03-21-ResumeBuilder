import React,{useRef} from 'react';
import './addsection.styles.css'

function AddSection({children}) {

  const containerRef = useRef()

  const inject = (e) => {
    e.preventDefault()
    containerRef.current.innerHTML= containerRef.current.innerHTML + containerRef.current.innerHTML
  }

  return (
    <div>
      <button className="buttonx" onClick={inject} >+ add</button>
      <div ref={containerRef} >
        {children}
      </div>
    </div>
  )
}

export default AddSection;
