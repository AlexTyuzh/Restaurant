function Button({ text, onClick, color }) {
  return (
    <button className={color} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
