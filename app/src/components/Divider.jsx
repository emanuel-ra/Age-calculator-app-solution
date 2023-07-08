import { Arrow } from "./Icons"
function Divider() {
  return (
    <div className="w-full flex justify-center items-center px-10">
        <div className="divider"></div>
        <div className="divider-arrow">
            <Arrow />
        </div>
    </div>
  )
}

export default Divider