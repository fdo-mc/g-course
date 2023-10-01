# Prueba Técnica

## Objetivo
Crear una aplicacion similar a https://midu-react-11.surge.sh

### Pasos
- [] Fetch 100 rows of data using the API randomuser.me
- [] Display the data in a table
- [] Provide the option to color the rows
- [] Allow the data to be sorted by country
- [] Enable the ability to delete a row
- [] Allow the user to restore the deleted rows
- [] Handly any potential error














# Add branch
1. Create the branche in Github
2. cd prueba2 -> git init
3. En prueba2 -> git checkout -b "prueba_tecnica"
4. En prueba2 -> git remote add originPruebaTecnica https://github.com/fdo-mc/g-course.git
5. En prueba2 -> git remote show originPruebaTecnica
6. En prueba2 -> git pull originPruebaTecnica prueba_tecnica 

# First Commit and Push
fernando.meneses@f-meneses prueba2 % git add .
fernando.meneses@f-meneses prueba2 % git commit -m "First commit template"
[prueba_tecnica 5773c67] First commit template
 14 files changed, 280 insertions(+), 115 deletions(-)
 create mode 100644 .eslintrc.cjs
 create mode 100644 .gitignore
 create mode 100644 README.md
 delete mode 100644 index.css
 delete mode 100644 index.js
 create mode 100644 package.json
 create mode 100644 public/vite.svg
 create mode 100644 src/App.css
 create mode 100644 src/App.jsx
 create mode 100644 src/assets/react.svg
 create mode 100644 src/index.css
 create mode 100644 src/main.jsx
 create mode 100644 vite.config.js
fernando.meneses@f-meneses prueba2 % git push
fatal: The current branch prueba_tecnica has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream originPruebaTecnica prueba_tecnica

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

fernando.meneses@f-meneses prueba2 % git push --set-upstream originPruebaTecnica prueba_tecnica
Enumerating objects: 19, done.
Counting objects: 100% (19/19), done.
Delta compression using up to 8 threads
Compressing objects: 100% (15/15), done.
Writing objects: 100% (17/17), 6.44 KiB | 6.44 MiB/s, done.
Total 17 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/fdo-mc/g-course.git
   4ac879c..5773c67  prueba_tecnica -> prueba_tecnica
branch 'prueba_tecnica' set up to track 'originPruebaTecnica/prueba_tecnica'.
fernando.meneses@f-meneses prueba2 % 