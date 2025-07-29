const tagGroupKeys = [
  "all",
  "frontend",
  "backend",
  "wordpress",
  "vscode",
  "mobile",
];
const tagGroups = {
  frontend: ["html", "css", "javascript", "react", "vue", "svelte"],
  backend: ["node", "express", "django", "rails", "php"],
  devops: ["docker", "kubernetes", "ci", "cd"],
  mobile: ["flutter", "react-native", "swift", "kotlin"],
  wordpress: ["php", "javascript", "html", "css", "cli"],
  all: [], // fallback for "All"
};
export { tagGroups, tagGroupKeys };
