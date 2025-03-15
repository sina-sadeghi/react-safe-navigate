# React Safe Navigate

**React Safe Navigate** is a smart navigation utility for `react-router-dom` that ensures all routes are always accessible, eliminating 404 errors by using a structured nested object-like routing system.

## 🚀 Features
- **Always access all routes**: Ensures that navigation always has access to available routes.
- **Prevents 404 errors**: Avoids navigating to non-existent paths.
- **Works with `react-router-dom`**: Fully compatible with React Router v6+.
- **Type-safe routing**: Ensures correct route paths using TypeScript.

---

## 📦 Installation

```sh
npm install react-safe-navigate
```

or using Yarn:

```sh
yarn add react-safe-navigate
```

---

## 🚀 Usage

### 1️⃣ Set Up Routes

First, define your routes in a separate file:

```tsx
// routes.ts
export const ROUTES = [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
    {
        path: "company",
        children: [{ path: ":id", element: <CompanyItem /> }],
    },
] as const;
```

### 2️⃣ Create Browser Router and Route Converter

In your app entry file, define the main router and route converter once and use them throughout the project:

```tsx
import { createBrowserRouter } from "react-router-dom";
import { convertRouter } from "react-safe-navigate";
import { ROUTES } from "./routes";

export const router = createBrowserRouter<typeof ROUTES>(ROUTES);
export const typedRoutes = convertRouter<typeof ROUTES>(ROUTES);
```

### 3️⃣ Provide Routes to Components

Use `typedRoutes` for type-safe route navigation.

```tsx
import { CustomLink } from "react-safe-navigate";
import { typedRoutes } from "./routerSetup";

const MyComponent = () => {
  return (
    <CustomLink to={typedRoutes["/"]["company/:id"]} values={{ id: 15 }}>
      Go to Company
    </CustomLink>
  );
};
```

### 4️⃣ Use `useCustomNavigate` for Safe Navigation

Now, use the `useCustomNavigate` hook in your components to safely navigate between routes:

```tsx
import { useCustomNavigate } from "react-safe-navigate";
import { typedRoutes } from "./routerSetup";

const MyComponent = () => {
  const { navigate } = useCustomNavigate();

  return (
    <button onClick={() => navigate(typedRoutes["/"]["company/:id"], { id: 15 })}>
      Go to Chat
    </button>
  );
};
```

---

## 🔧 API

### `convertRouter<T>(routes: T) => T`
Converts and ensures type-safe route navigation.

### `useCustomNavigate()`
A hook that provides safe navigation without worrying about non-existent paths.

### `<CustomLink to={typedRoutes["/"]["some-path"]} values={{ id: 123 }}>`
A component that safely links to a typed route.

---

## 🛠️ Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📜 License
MIT

