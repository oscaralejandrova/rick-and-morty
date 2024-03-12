import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({setLocationSelected}) => {

    const inputSearch = useRef()

    const handelSubmit = e =>{

        e.preventDefault()

        //setLocationSeleted(inputSearch.current.value.trim()
     setLocationSelected(inputSearch.current.value.trim())

    }

  return (
    <form className="form" onSubmit={handelSubmit}>
        <input className="form_input" ref={inputSearch} type="text"/>
        <button className="form_btn">Search</button>
    </form>
  )
}

export default FormSearch
