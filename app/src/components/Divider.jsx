import { Arrow } from "./Icons"
function Divider() {
  return (
    <div className="lg:w-full flex justify-center items-center py-10 px-10 lg:px-10">
        <div className="divider"></div>
        <div className="divider-arrow">
            <Arrow />
        </div>
    </div>
  )
}

export default Divider