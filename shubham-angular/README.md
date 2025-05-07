# UserAuthApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


========================================================================================================================================================================================

### ✅ Step-by-Step Solution:

1. **Ensure You're in the Correct Directory:**

   ```bash
   cd C:\Users\amans\Downloads\angular-main\angular-main
   ```

2. **Install Node Modules:**
   Run the following to install all dependencies listed in `package.json`:

   ```bash
   npm install
   ```

   * If you get errors here, share them with me.

3. **Run the Angular App Again:**
   After `npm install` completes:

   ```bash
   ng serve
   ```

---

### 🧪 Still Not Working?

If `npm install` runs but you still get the same error:

4. **Install the Missing Builder Manually:**

   ```bash
   npm install --save-dev @angular-devkit/build-angular
   ```

---

### 💡 Optional Checks:

* **Check Angular CLI Installation:**

  ```bash
  ng version
  ```

  If this command fails, install the Angular CLI globally:

  ```bash
  npm install -g @angular/cli
  ```

* **Delete and Reinstall `node_modules`:**
  If issues persist:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

Would you like me to check your `package.json` content for any missing entries?

