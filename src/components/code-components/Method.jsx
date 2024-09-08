const Method = ({ name, params }) => {
  return (
    <>
      <span className="method">{`${name}(`}</span>
      <span>{params}</span>
      <span className="method">)</span>
    </>
  )
}
export default Method