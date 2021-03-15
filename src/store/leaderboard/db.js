import createDatabase from "../../lib/createDatabase";

const db = createDatabase("leaderboard", {
  leaderboard: [
    "++id",
    "answersCorrect",
    "answersTotal",
    "percentage",
    "difficulty",
    "type",
    "name",
  ].join(","),
});

export default db;
