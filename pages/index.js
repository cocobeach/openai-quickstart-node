import { useState } from "react";
import decisionTree from "./pages/api/decisionTree.js";

export default function subjectInput() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [options, setOptions] = useState(decisionTree["Option 1"]);
  const [subjectSelectionResult, setSubjectSelectionResult] = useState("");
  
  const handleChange = event => {
    setSelectedOption(event.target.value);
    setOptions(decisionTree[event.target.value]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ useState: selectedOption }),
      });
  
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
  
      setSubjectSelectionResult(data.result);
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea id="subject-input"></textarea>

      <label htmlFor="decision-tree-select">Make a decision:</label>
      <select id="decision-tree-select" value={selectedOption} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
const data = await response.json();
if (response.status !== 200) {
  throw data.error || new Error(`Request failed with status ${response.status}`);
}

setSubjectSelectionResult(data.result);
  

  /*return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
*/