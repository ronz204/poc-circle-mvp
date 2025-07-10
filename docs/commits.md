### Circle | Commit Linting

To ensure our project's history is clear and easy to navigate, and to help with the automatic generation of changelogs, we require commit messages to be informative and adhere to a specific convention. We follow the widely adopted Conventional Commits standard, which uses the format:

`<type>(<scope>): <description>`

This structured approach makes it simple to understand the purpose and scope of each change at a glance.

**Commit Types:**

The commit type categorizes the nature of your change. We primarily use the same types as our branch naming convention, such as `feat` (for new features), `refac` (for code refactoring), `fix` (for bug fixes), `docs` (for documentation updates), and `chore` (for routine tasks). If necessary, additional types can be used to further specify the commit's intent. For a comprehensive list and detailed explanations, you can refer to the [Conventional Commit Types](https://github.com/pvdlg/conventional-commit-types?tab=readme-ov-file#commit-types) guide.

**Commit Scopes:**

The commit scope pinpoints the specific part of the project that your change affects. It should be concise, written in lowercase, and clearly indicate the area of impact. Common examples of scopes include `api` (for changes to the API), `ui` (for user interface modifications), `test` (for updates to tests), `deps` (for dependency management), `db` (for database-related changes), and `conf` (for configuration adjustments). Using a clear scope helps other developers quickly identify relevant changes.


For a deeper dive into the principles and benefits of this standard, the article on [Conventional Commits](https://carlosazaustre.es/conventional-commits) by Carlos Azaustre provides additional valuable information.