import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
}
  const subjectInput = req.body.selectedOption || '';
  if (subjectInput.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please select a subject.",
      }
    });
    return;
  }

  try {
    const prompt = `${subjectInput} - ${selectedOption}`;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }

  const generateResponse = async () => {
    const model = "davinci-02";
    const prompt = `${subjectInput} - ${selectedOption}`;
  
    try {
      const response = await openai.text({
        model,
        prompt,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (selectedOption) {
      generateResponse();
    }
  }, [selectedOption]);
  