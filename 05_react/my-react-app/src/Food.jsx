function Food() {
  const food1 = "Taco";
  const food2 = "Pizza";
  const food3 = "Fried Rice";

  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>{food3}</li>
    </ul>
  );
}

export default Food;
