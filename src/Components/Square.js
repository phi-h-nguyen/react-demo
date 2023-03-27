import "../Pages/Game.css";

export default function Square(props) {
  const { value, onSquareClick, winner } = props;

  return (
    <button
      className="square"
      onClick={() => {
        onSquareClick();
      }}
      disabled={value !== null || winner !== null}
    >
      {value}
    </button>
  );
}
