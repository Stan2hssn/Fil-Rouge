import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.scss";

function CardsPage() {
  return (
    <motion.div
      initial={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{
        x: -window.innerWidth,
        transition: { duration: 0.5 },
      }}
    >
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </motion.div>
  );
}

export default CardsPage;
