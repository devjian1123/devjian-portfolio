import Keyword from "./Keyword"
import Method from "./Method"

const MethodBlock = ({ accessModifier, returnType, methodName, params, children }) => {
  return (
    <section>
      <div>
        <Keyword text={accessModifier} /> {returnType} <Method name={methodName} params={params} />
      </div>
  
      <div className="method-block-content">
        {children}
      </div>
    </section>
  )
}
export default MethodBlock