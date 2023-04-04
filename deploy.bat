git add .
git commit -m "Scripted commit"
git push 
gatsby build
ssh rasmus@192.168.0.37 rm /home/rasmus/blog -r
ssh rasmus@192.168.0.37 mkdir /home/rasmus/blog 
scp -r public/* rasmus@192.168.0.37:/home/rasmus/blog