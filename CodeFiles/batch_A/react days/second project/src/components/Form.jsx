function Form() {
  let val = "";
  function clickHandler() {
    alert("Hello: " + val);
    
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
      />
      <button onClick={clickHandler}>See value</button>
    </form>
  );
}

export default Form;
