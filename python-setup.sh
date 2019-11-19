#! /usr/bin/bash

pip3 install virtualenv --user;
if [ -d django-env ]; then
    virtualenv django-env --python==python3.5
fi;    
. ./django-env/bin/activate;
pip3 install -r ./requirements.txt