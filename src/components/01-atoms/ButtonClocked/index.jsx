import "./styles.css";

export default function ButtonClocked({
  onClick = () => {},
  clockedType = "",
}) {
  return (
    <button className="clocked" onClick={onClick}>
      {clockedType}
    </button>
  );
}
