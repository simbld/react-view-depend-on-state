import MyBtn from "./MyBtn";

const Title = ({ setShowTitle, label, nextTitle }) => {
  return (
    <div>
      <h1>Mon composant title</h1>
      <MyBtn setShowTitle={setShowTitle} nextTitle="subtitle" label="Vers subtitle" />
    </div>
  )
}

export default Title;