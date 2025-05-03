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

- [ ] Display a single todo item
- [ ] Accept props: `text`, `done` status
- [ ] mark as done / not done

### 🧩 `TodoList`

- [ ] Display one todo list (e.g., Shopping)
- [ ] Accept props: `listname`, `todos`
- [ ] Render all `TodoItem`s for this list
- [ ] Input to add new item to this list
- [ ] Update items in parent via function props

### 🧩 `Todos`

- [ ] Accept full list of todo lists as props
- [ ] Render multiple `TodoList` components

### 🧩 `NewListInput`

- [ ] Input field for new list name
- [ ] Submit button or Enter key
- [ ] Add a new list to the main state

---

## 3. Combine in `App`

- [ ] Hold full app state: list of todo lists
- [ ] Handle:
  - Adding a new list
  - Adding a new item to a list
  - Marking todos as done
- [ ] Pass data and handlers to `Todos` and `NewListInput`

---

## 4. Optional Features

- [ ] Delete todo item
- [ ] Delete entire list

---
