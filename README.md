# Task Management Application

A modern task management application built with Next.js, featuring drag-and-drop functionality and real-time status updates.

## Features

- ✅ Create and manage tasks with title, description, and due date
- 👥 Assign tasks to team members
- 🔄 Drag and drop tasks between status columns
- 💾 Persistent storage using localStorage
- 📱 Responsive design for all devices
- ⏰ Due date tracking and notifications
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 13+
- **Styling:** Tailwind CSS
- **Drag & Drop:** React DnD
- **Date Handling:** date-fns
- **State Management:** React Hooks
- **Data Persistence:** localStorage

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ecemkalinsaz/task-management.git
cd task-management
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Creating Tasks

1. Fill in the task creation form with:
   - Title
   - Description
   - Assignee
   - Due date
2. Click "Create Task" to add the task to the "To Do" column

### Managing Tasks

- Drag and drop tasks between columns to update their status
- Tasks can be in one of three states:
  - To Do (Not Started)
  - In Progress
  - Completed
- Use the dropdown in each task card to manually change status

### Team Management

- Add team members using the "Add New Person" form
- Assign tasks to team members when creating tasks

## Project Structure

```
task-management/
├── app/
│   ├── components/
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   ├── TaskCard.js
│   │   └── PersonForm.js
│   ├── page.js
│   └── layout.js
├── public/
└── styles/
```

## License

This project is licensed under the MIT License - see the LICENSE file for details
