# ✅ React Todo App – Development Checklist

A simple checklist for building a React Todo List app with multiple lists and basic components, all in a single file.

---

## 1. Setup

- [x] Create base React project
- [x] Set up directory structure
- [ ] Create main `App` component

---

## 2. Components

### 🧩 `TodoItem`

- [x] Display a single todo item
- [x] Accept props: `text`, `done` status
- [x] mark as done / not done

### 🧩 `TodoList`

- [x] Display one todo list (e.g., Shopping)
- [x] Accept props: `listName`, `todos`
- [x] Render all `TodoItem`s for this list
- [x] Input to add new item to this list
- [x] Update items in parent via function props

### 🧩 `Todos`

- [x] Accept full list of todo lists as props
- [x] Render multiple `TodoList` components

### 🧩 `NewListInput`

- [x] Input field for new list name
- [x] Submit button or Enter key
- [x] Add a new list to the main state

---

## 3. Combine in `App`

- [x] Hold full app state: list of todo lists
- [x] Handle:
  - Adding a new list
  - Adding a new item to a list
  - Marking todos as done
- [x] Pass data and handlers to `Todos` and `NewListInput`

---

## 4. Optional Features

- [ ] Delete todo item
- [ ] Delete entire list

---
