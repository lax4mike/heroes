gulp prod
ssh oceanstar 'mkdir -p ~/www/heros'
scp -r ../app/* oceanstar:~/www/heros