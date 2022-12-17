import "../App.css";

function AddButton({ addBasket, deleteBasket }) {
  const addButton = {
    color: "white",
    backgroundColor: "blue",
    width: "100px",
  };

  const removeButton = {
    color: "white",
    backgroundColor: "red",
    width: "100px",
  };

  return (
    <>
      {addBasket ? (
        <button className="button" style={addButton} onClick={addBasket}>
          Добавить
        </button>
      ) : (
        <button className="button" style={removeButton} onClick={deleteBasket}>
          Удалить
        </button>
      )}
    </>
  );
}

export default AddButton;
