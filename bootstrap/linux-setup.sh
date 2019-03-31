# #!/bin/sh -e

# OS update and upgrade
sudo apt update && sudo apt upgrade -y

# install basic dev packages
sudo apt install -y build-essential libssl-dev libffi-dev python-dev

# Install pip
sudo apt install -y python3-pip

# Install npm 
sudo apt install -y nodejs npm