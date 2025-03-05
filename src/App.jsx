import "./styles.css"

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item"/>
        </div>
        <button className="btn">Add Item</button>
      </form>
      <h1 className="header"></h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
  </>
)
}

