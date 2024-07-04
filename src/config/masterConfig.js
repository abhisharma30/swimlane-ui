const masterConfig = {
  "To Do": ["In Progress", "Blocked"],
  "In Progress": ["To Do", "Blocked", "Done"],
  Blocked: ["To Do", "In Progress"],
  Done: [],
};

export default masterConfig;
