````markdown
# ALX Project 0x01 – Setup

## 📌 Objective
The goal of this project is to **set up a base Next.js application** using `create-next-app@latest` with TypeScript and Tailwind CSS.  
This serves as the foundation for future ALX frontend projects.

---

## ⚡ Features
- ✅ Next.js with TypeScript  
- ✅ ESLint for code linting  
- ✅ Tailwind CSS for styling  
- ✅ Import alias support  
- ✅ Basic file scaffolding for pages and components  

---

## 🛠️ Setup Instructions

### 1. Create the project
Run the following command to bootstrap the project:

```bash
npx create-next-app@latest alx-project-0x01 --typescript
````

When prompted, choose:

* **ESLint** → Yes
* **Tailwind CSS** → Yes
* **Import alias** → Yes

---

### 2. Configure global styles

Empty the content of `styles/globals.css` and replace it with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 3. Update Home Page

Replace the content of `pages/index.tsx` with:

```tsx
const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl font-thin">Welcome Page</h1>
    </div>
  )
}

export default Home;
```

---

### 4. Project Structure

Create the following directory and file structure:

```
alx-project-0x01/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   └── PostCard.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│
├── pages/
│   ├── posts/
│   │   └── index.tsx
│   ├── users/
│   │   └── index.tsx
│   └── index.tsx
│
├── public/
│   └── assets/
│       └── images/
```

---

### 5. Basic Functional Components

Each of the new files should export a **functional component**.

Example `Button.tsx`:

```tsx
const Button: React.FC = () => {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>
}

export default Button;
```

Do the same for:

* `PostCard.tsx`
* `Header.tsx`
* `Footer.tsx`
* `pages/posts/index.tsx`
* `pages/users/index.tsx`

---

### 6. Run the Development Server

Start your app on **port 3000**:

```bash
npm run dev -- -p 3000
```

Then open:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Repository Info

* **GitHub repository:** [alx-project-0x01-setup](https://github.com/anaol216/alx-project-0x01-setup)
* **Directory:** `alx-project-0x01`
* **Key files:**

  * `public/assets/images`
  * `components/common/Button.tsx`
  * `components/common/PostCard.tsx`
  * `components/layout/Header.tsx`
  * `components/layout/Footer.tsx`
  * `pages/posts/index.tsx`
  * `pages/users/index.tsx`

---

## 🎯 Expected Output

When you run the app and visit [http://localhost:3000](http://localhost:3000), you should see:

> **Welcome Page** displayed in large, centered text.

---
