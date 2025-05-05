export const getJudge0LanguageId = (language) => {
  const languageMap = {
    PYTHON: 71,
    JAVA: 62,
    JAVASCRIPT: 63,
  };

  return languageMap[language.toUpperCase()];
};

export const submitBatch = async (submission) => {
  const { data } = await axios.post(
    `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,
    {
      submission,
    }
  );

  return data;
};

export const pollBatchResults = async (tokens) => {
  while (true) {
    const { data } = await axios.get(
      `${process.env.JUDGE0_API_URL}/submissions/batch`,
      {
        tokens: tokens.join(","),
      }
    );

    const results = data.submissions;

    const isAllDone = results.every((results) => {
      results.status_id !== 1 && results.status_id !== 2;
    });

    if (isAllDone) return results;

    await sleep(1000);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
