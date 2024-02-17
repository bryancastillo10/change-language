function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "namama", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name));   // Alphabetical Sorting by name property
  //   fruits.sort((a, b) => a.calories - b.calories); //Alphabetical Sorting by Calories

  /// Filtering objects by arrow function and filter() method
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  const listItems = lowCalFruits.map((lowCalfruit) => (
    <li key={lowCalfruit.id}>
      {lowCalfruit.name}: &nbsp; <b>{lowCalfruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}
export default List;
