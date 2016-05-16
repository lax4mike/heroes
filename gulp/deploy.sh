gulp prod
ssh oceanstar 'mkdir -p ~/www/heroes'
scp -r ../app/* oceanstar:~/www/heroes
