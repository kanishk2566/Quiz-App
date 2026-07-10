export function SaveHighScore(score: number) {
  localStorage.setItem("High Score", score.toString());
}

export function getHighScore() {
  return Number(localStorage.getItem("High Score")) || 0;
}