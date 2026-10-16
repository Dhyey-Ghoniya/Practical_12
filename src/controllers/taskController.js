let tasks = [
  { id: 1, title: 'Set up GitHub Actions Workflow', status: 'Completed', priority: 'High' },
  { id: 2, title: 'Write Automated Test Suite', status: 'Completed', priority: 'High' },
  { id: 3, title: 'Demonstrate Deliberate Test Failure', status: 'Completed', priority: 'Medium' }
];

exports.getTasks = (req, res) => {
  res.status(200).json({ success: true, count: tasks.length, tasks });
};

exports.createTask = (req, res) => {
  const { title, priority } = req.body;
  if (!title || title.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Task title is required' });
  }

  const newTask = {
    id: Date.now(),
    title: title.trim(),
    status: 'Pending',
    priority: priority || 'Medium',
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, message: 'Task created successfully', task: newTask });
};
