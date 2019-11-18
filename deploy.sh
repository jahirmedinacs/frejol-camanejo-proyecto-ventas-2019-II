#! /usr/bin/sh

image_exists(){
    if [ ! -z $(docker images -q $1) ]; then
        echo "ALERT !! Image Already Exist";
        echo "ALERT -- Omiting instalation";
    else
        echo "WARNING  Image not found, installing";
        docker pull $1;
        echo "DONE >>> $1 Image Installed"
    fi;
}

#### --exec : access to bash cli
#### --stop : stops container
#### --start : starts container
#### --install : install all dependecies
#### --init : starts all containers

case $1 in
    "install")
    ### Installing Dependencies
    image_exists mongo;
    image_exists postgres;
    ;;
    "init")
    ### Running|Starting containers
    docker start mongodb || docker run -d -p 127.0.0.1:27017-27019:27017-27019 --name=mongodb mongo;
    docker start postgresql || docker run -d -p 127.0.0.1:5432:5432 --name=postgresql postgres;
    ;;
    "exec")
        docker exec -it $2 /bin/bash
        echo "iQ# CLI Exited"
    ;;
    "stop")
        docker stop $2
        echo "iQ# Container Stoped"
    ;;
    "start")
        docker start $2
        echo "iQ# Container Started"
    ;;
    "list")
        docker container ls -a;
    ;;
esac
    