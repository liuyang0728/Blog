set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:liuyang0728/liuyang0728.github.io.git master

cd -