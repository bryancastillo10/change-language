function Button() {
  const styles = {
    backgroundColor: "hsl(200,100%,50%)",
    color: "#fff",
    padding: "10px 20px ",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "0.25s",
  };

  const handleClick = () => console.log("OUCH!");

  return (
    <div>
      <button style={styles} onClick={handleClick}>
        Click me 😁
      </button>
    </div>
  );
}

export default Button;
