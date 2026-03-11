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
  backend: ["node", "express", "django", "php", "python", "wordpress"],
  devops: ["docker", "kubernetes", "ci", "cd"],
  mobile: [
    "flutter",
    "react-native",
    "reactnative",
    "mobile",
    "swift",
    "kotlin",
  ],
  vscode: ["vscode", "editor", "ide"],
  wordpress: ["php", "javascript", "html", "css", "cli", "wpcli", "wordpress"],
  all: [], // fallback for "All"
};
export { tagGroups, tagGroupKeys };
