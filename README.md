# React_Redux_builder

### 1. Initial Setup

#### a. **Set Up Vite Project**

1. **Create a Vite Project:**
   ```bash
   npm create vite@latest my-project --template react
   cd my-project
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Locally:**
   ```bash
   npm run start
   ```

### 2. Configure Redux

#### b. **Install Redux and React-Redux:**
```bash
npm install @reduxjs/toolkit react-redux
```

#### c. **Create Redux Store and Reducers**

1. **Create `action.js` for Action Creators:**
   - Define actions for counter and theme (e.g., increment, decrement, switch theme).

2. **Create `counterReducer.js`:**
   - Define a reducer function to handle counter actions (increment and decrement).

3. **Create `themeReducer.js`:**
   - Define a reducer function to handle theme actions (switch between light and dark themes).

4. **Create `store.js`:**
   - Use `combineReducers` to combine `counterReducer` and `themeReducer`.
   - Configure and create the Redux store.

### 3. Implement React Components

#### d. **Create Components:**

1. **Counter.jsx:**
   - A parent component to render `CounterValue` and `CounterButtons`.

2. **CounterValue.jsx:**
   - Retrieve and display the counter value from the store using the `useSelector` hook.

3. **CounterButtons.jsx:**
   - Two buttons:
     - `ADD`: Dispatch an action to increment the counter.
     - `REDUCE`: Dispatch an action to decrement the counter.

4. **Theme.jsx:**
   - Two buttons to switch themes:
     - `Switch to Light`: Default theme is light; button disabled when the theme is light.
     - `Switch to Dark`: Button enabled when the theme is light; switches theme to dark.

### 4. Define Component Behaviors

#### e. **Counter Buttons Actions:**

- **ADD Button:**
  - On click, dispatch an action to `handleAdd` function with a payload of `1`.

- **REDUCE Button:**
  - On click, dispatch an action to `handleReduce` function with a payload of `1`.

#### f. **Theme Buttons Actions:**

- **Switch to Light Button:**
  - By default, the theme is light; button is disabled.
  - On click, dispatch an action to `handleTheme` with a payload of `light`.

- **Switch to Dark Button:**
  - Initially enabled, as the default theme is light.
  - On click, dispatch an action to `handleTheme` with a payload of `dark`.

### 5. Styling and Classes

- Apply different class names based on the theme:
  - **Light Theme:** `light_theme` with black text color and white background.
  - **Dark Theme:** `dark_theme` with white text color and black background.

### Summary

- Set up Vite and install dependencies.
- Create Redux actions, reducers, and store.
- Implement React components for displaying and updating the counter and switching themes.
- Define and dispatch actions from components to update the state in the store.
- Style components based on the current theme.

