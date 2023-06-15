import _ from "lodash";

const modals = [
  {
    id: 1,
    title: "Title 1",
    title1: "Header 1",
    text: "This is the first modal!",
  },
  {
    id: 2,
    title: "Title 2",
    title1: "Header 2",
    text: "This is the second modal!",
  },
  {
    id: 3,
    title: "Title 3",
    title1: "Header 3",
    text: "This is the third modal!",
  },
  {
    id: 4,
    title: "Title 4",
    title1: "Header 4",
    text: "This is the fourth modal!",
  },
  {
    id: 5,
    title: "Title 5",
    title1: "Header 5",
    text: "This is the fifth modal!",
  },
];

const App = ({ store, setStore }) => {
  return (
    <div id="app">
      <h1>Modal Window/Lightbox</h1>
      <div className="main">
        {modals.map((modal, index) => {
          return (
            <button
              key={`modal-${index}`}
              onClick={() => {
                const newStore = _.cloneDeep(store);
                _.set(newStore, `modalProperty.showModal`, true);
                _.set(newStore, `modalProperty.title`, modal.title);
                _.set(newStore, `modalProperty.title1`, modal.title1);
                _.set(newStore, `modalText`, modal.text);
                setStore(newStore);
              }}
            >
              Click here for modal {modal.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
