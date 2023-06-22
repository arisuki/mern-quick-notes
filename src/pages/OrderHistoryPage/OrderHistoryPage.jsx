import {checkToken} from "../../utilities/users-service"
export default function OrderHistory() {

async function handleCheckToken(){
const expDate= await checkToken()
console.log(expDate)
}
    return (
       <> 
    <h1>Order History Page</h1>
    <button onClick={handleCheckToken}>Check when my login expires</button>
    </>
    )
}