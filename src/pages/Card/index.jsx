import { Link, useParams } from "react-router-dom";
import "./style.scss";

function CardPage() {
  const { name } = useParams()
  console.log(name);
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default CardPage;
