echo Please input the page what you want to bundle!
set/p name=
set isStart=1
echo now you are bundling the page:%name%

start cmd /k "npm run dev"