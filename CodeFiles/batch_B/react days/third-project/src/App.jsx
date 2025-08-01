function App() {
  let items = [
    "I am the first item",
    "I am the second item",
    "I am the third item",
    "I am the forth item",
    "I am the fifth item",
  ];

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={(e) => {}}>
            {index + 1} : {item}
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;
