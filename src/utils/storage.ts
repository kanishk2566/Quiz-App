export function SaveScore(score: number) {
  localStorage.setItem("High Score", score.toString());
}

export function getScore() {
  return Number(localStorage.getItem("High Score")) || 0;
}