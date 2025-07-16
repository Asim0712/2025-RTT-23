# Context Api
## React + TypeScript + Vite + Javascript + Tailwind


## Overview
Built a functional Todo application. Instead of relying on prop drilling or a complex third-party state management library for this scale, you will leverage React’s Context API to manage various aspects of the application’s state. This includes managing the list of todos, current visibility filters, and a simple theme.

This lab will provide practical experience in designing multiple contexts, implementing providers, consuming context values in components, and handling more involved state updates. You will also explore basic persistence and optimization considerations with Context.I

## Installation

### Create a new React TypeScript project using Vite:
```js
npm create vite@latest Context-api -- --template react-ts
cd task-dashboard
npm install
```

### Tailwind Installation
```js
npm install tailwindcss @tailwindcss/vite
```
### Configure the Vite plugin
```js
// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
### Import Tailwind in your CSS file
```js
/* src/index.css */
@import "tailwindcss";
```

## Project Structure
```js
src/
├── components/
│   ├── FilterButtons.tsx
│   ├── ThemeToggleButton.tsx
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── contexts/
│   ├── FilterContext.tsx
│   ├── ThemeContext.tsx
│   ├── TodoContext.tsx
│   ├── useFilter.ts       
│   ├── useTheme.ts        
│   └── useTodos.ts        
├── hooks/
│   └── useLocalStorage.ts
├── types.ts
├── App.tsx
├── index.css
└── main.tsx
```

Project Requirements
Build a Todo application with the following features, primarily using the Context API for state management.

##  Core Todo Management (TodoContext)
- State: An array of todo items. Each todo item should have at least:
- id: A unique identifier (string or number).
- text: The content of the todo (string).
completed: A boolean indicating if the todo is completed.
- Actions (exposed via context):
- addTodo(text: string): Adds a new todo item to the list.
- toggleTodo(id: string | number): Toggles the completed status of a todo item.
- deleteTodo(id: string | number): Removes a todo item from the list.
- editTodo(id: string | number, newText: string): Edits the text of an existing todo item.
- clearCompleted(): Removes all completed todos.
### Components:
- TodoInput: An input field to add new todos.
- TodoList: Displays the list of todo items.
- TodoItem: Represents a single todo item, allowing interaction (toggle, delete, edit).
## Visibility Filters (FilterContext)
- State: The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.
- Actions (exposed via context):
- setFilter(filter: string): Sets the current filter.
### Functionality:
- The TodoList should display todos based on the currently active filter from FilterContext.
- FilterButtons: A component that displays buttons to change the current filter.
## Theme Switching (ThemeContext)
- State: The current theme. Possible values: ‘light’, ‘dark’.
- Actions (exposed via context):
- toggleTheme(): Switches between ‘light’ and ‘dark’ themes.
### Functionality:
- The application should visually change based on the selected theme (e.g., background colors, text colors). Apply theme changes to the main app container and ideally a few key components.
- ThemeToggleButton: A button to toggle the theme.
## Persistence Layer
### Functionality:
- The state of the todos (from TodoContext) and the current theme (from ThemeContext) should be persisted to localStorage.
- When the application loads, it should attempt to rehydrate these states from localStorage.
- Updates to todos or theme should automatically update localStorage.


## Deployment
- **[GitHub Repo]** [https://github.com/Asim0712/context-api-lab3/tree/master]

## Resources
- [https://react.dev/reference/react/useEffect]
- [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent]
- [(https://blog.logrocket.com/localstorage-javascript-complete-guide/)] 
- [https://tailwindcss.com/docs/installation/using-vite]
- [https://tailwindcss.com/plus/ui-blocks/application-ui]


## Author:  Asim Daud Khan


## Acknowledgments
Created by Asim Daud Khan as part of Module 10, Skills-Based Assessment to test my understaning of React components, state management, Typescript integration, form handling, and component composition.

Feedback and suggestions are welcome!

### Thank You

