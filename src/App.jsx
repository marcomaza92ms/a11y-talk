import "./App.css";
import NoA11y from "./NoA11y/NoA11y";
import WithA11y from "./WithA11y/WithA11y";

const App = (props) => {
  const { a11y } = props;
  return <>{a11y ? <WithA11y /> : <NoA11y />}</>;
};

App.propTypes = {
  a11y: Boolean,
};

export default App;
