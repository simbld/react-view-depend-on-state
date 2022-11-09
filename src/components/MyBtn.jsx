
const MyBtn = ({ setShowTitle, nextTitle, label }) => {
  return (
    <button type='button' onClick={() => setShowTitle(nextTitle)}>{label}</button>
  )
}

export default MyBtn