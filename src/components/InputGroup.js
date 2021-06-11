const InputGroup = ({ label, type }) => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input type={type} />
    </>
  )
}

export default InputGroup
