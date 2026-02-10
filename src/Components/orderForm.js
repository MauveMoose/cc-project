import { useState } from "react";

function OrderForm(){
    const [formData, setFormData] = useState({name:"", room:"", order:""});
    return(
        <div>
            <form>
                Patient name: <input type="text" value={formData["name"]} onChange={(e)=>setFormData({...formData, name:e.target.value})}/> <br/>
                Patient room number: <input type="text" value={formData["room"]} onChange={(e)=>setFormData({...formData, room:e.target.value})}/> <br />
                Patient order: <input type="text" value={formData["order"]} onChange={(e)=>setFormData({...formData, order:e.target.value})}/>
            </form>
            Patient name: {formData["name"]} <br />
            Patient room: {formData["room"]} <br />
            Patient order: {formData["order"]}
        </div>
    )
}

export default OrderForm;