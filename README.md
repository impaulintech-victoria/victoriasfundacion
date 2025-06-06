# Victorias Fundación Website

![image](https://github.com/user-attachments/assets/22e6e0ab-700e-40b9-af64-c323bc8b3a80)

A multilingual, performance-optimized website with support for Dutch, English, and Spanish.

## 🚀 Tech Stack
- **Next.js**, **React**, **Tailwind CSS**
- **Biome** for linting & formatting
- **TypeScript**, **Husky** + **lint-staged**
- Deployed on **Vercel**

## 📦 Requirements
- **Node.js** v18+
- **Git**
- **npm**

## 🛠 Installation

Clone the repository and install dependencies:

1. `git clone git@github.com:impaulintech-victoria/victoriasfundacion.git`
2. `cd victoriasfundacion`
3. `npm install`

## ⚙️ Setup Husky

Set up Husky hooks to run `lint-staged` on commit:

1. `npm run setup:husky`

This will:
- Create `.husky/pre-commit`
- Add `npx lint-staged` to it
- Make it executable

## 🧰 Useful Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run Biome linting
- `npm run format` - Format code with Biome

## ✅ Linting on Commit

After running `npm run setup:husky`, commits should automatically run the linter.

Example of commit output:
```
✔ Backed up original state in git stash
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
```

- apendix
