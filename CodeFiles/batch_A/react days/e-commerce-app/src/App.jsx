import ABC from "./components/children-prop/ABC"
import ChildrenProp from "./components/children-prop/ChildrenProp"
import Dashboard from "./components/dashboard/Dashboard"

function App() {
  return (
    <>
      {/* <Dashboard/> */}
      <ChildrenProp xuz="something">
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum, accusantium atque nemo nostrum tenetur fuga, tempora delectus quod aliquid blanditiis hic recusandae dolor unde, quo id sit amet saepe?</p>
      </ChildrenProp>
    </>
  )
}

export default App
