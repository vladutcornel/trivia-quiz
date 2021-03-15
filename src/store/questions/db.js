import createDatabase from "../../lib/createDatabase";

const db = createDatabase("questions", {
  questions: [
    "++id",
    "type",
    "difficulty",
    "question",
    // "correctAnswer", // available but not indexed
  ].join(","),
});

export default db;
