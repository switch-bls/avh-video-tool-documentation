---
title: "Installer videotool sur archlinux"
date: 2023-03-02T17:16:51+01:00
sidebar_position: 1
---
## Installer postgresql
1. Installer postgres
```
sudo pacman -S postgresql
```

2. Configurer la base postgres
```
su -l postgres
initdb -D /var/lib/postgres/data
```
3. Lancer le serveur au demarrage
```
systemctl enable postgresql
```
4. Lancer le service postgresql
```
systemctl start postgresql
```

## Installer Ruby avec RVM

### Installer Openssl 1.1.1

1. Télécharger openssl 1.1.1
https://www.openssl.org/source/

ou
```
curl https://www.openssl.org/source/openssl-1.1.1t.tar.gz --output openssl-1.1.1t.tar.gz
```

2. Décompresser l'archive tar.gz
```
tar -xf openssl-1.1.1t.tar.gz
``` 
3. Configurer et installer
```
cd openssl-1.1.1t
./config --prefix=/usr --openssldir=/etc/ssl shared
zlib-dynamic
make 
make install
```
### Installer RVM


1. Télécharger RVM
```
curl -L get.rvm.io > rvm-install
```
2. Installer RVM
```
sudo bash < ./rvm-install
```
3. Ajouter l'utilisateur au groupe rvm
```
sudo usermod -a -G rvm <user>
```
```
source /etc/profile.d/rvm.sh
```
4. Mettre à jour RVM
```
rvm get head
```

1. Installer Ruby grâce à RVM
```
rvm install "ruby-<version>"
```


## Installer le serveur

### Installer les gems

1. Cloner le serveur
```
git clone -b <nom de la branch> git@gitlab.com:avh_videotool/video-tool-web-app.git
```

2. Installer les gems
```
cd video-tool-web-app
gem install bundler:2.3.23
bundle install
```
### Initialiser la base de données

1. Configurer le serveur
```
echo "
default: &default
  adapter: postgresql
  encoding: unicode
  host: localhost
  username: postgres
  password: <password>
  pool: 5

development:
  <<: *default
  database: videotool

test:
  <<: *default
  database: videotooltest
" >> config/database.yml 
```
```
echo "

# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure the secrets in this file are kept private
# if you're sharing your code publicly.

development:
  secret_key_base: 9bd4c97502ba60ca6276dd45a64597d102948f96b46f616c90af3a7b8810e376dd42189ce2642cdfb9b7ef39d093d70609bc586f3080fe2f25654e251cead473

test:
  secret_key_base: 142b3800d72ccb1201b1df8581f7338a065cab79860e864631482263fbc1c44233c6e7676a9cc33c79a80d8340b9c8cd355615079efa0fc9c7e0fcdba4b89e50

# Do not keep production secrets in the repository,
# instead read values from the environment.
production:
  secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
" >> config/secret.yml
```


2. Installer nodejs
```
sudo pacman -S nodejs   
```

3. Supprimer la base de données videotool
```
bundle exec rake db:drop RAILS_ENV=test
```
4. Créer la base de données
```
bundle exec rake db:create RAILS_ENV=test
```
5. Charger les schémas de la base
```
bundle exec rake db:schema:load RAILS_ENV=test
```
6. Charger les données fixtures
```
bundle exec rake db:fixtures:load RAILS_ENV=test
```

## Lancer le serveur

```
rails s -e test
```

## Désactiver firewalld

Si le serveur est inaccessible depuis le réseau, c'est probablement à cause du pare-feu, il faut le désactiver ou le reconfigurer.

Stopper le firewalld
```
sudo systemctl stop firewalld.service 
```
Désactiver le pare-feu
```
sudo systemctl disable firewalld.service
```

