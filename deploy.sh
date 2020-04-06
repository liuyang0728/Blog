#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git config --local user.name "liuyang0728"
git config --local user.email "liuyang728@sina.cn"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<U_NAME>/<U_NAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${GH_TOKEN}@github.com/liuyang0728/liuyang0728.github.io.git master
# git push -f https://${GH_TOKEN}@github.com/liuyang0728/<REPO>.git master:gh-pages

cd -
