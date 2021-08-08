# Helm Test APP (hta)

Learning how to use Helm!
This project consists of a very simple node.js web api application used to demonstrate the use of Docker, and ultimately running and working with Helm Carts.

It contains everything (on an mvp level) to get started with somme strong best practice templating and techniques.

## Getting Started

Obligatory clone...

`git clone https://github.com/ryanande/hta.git && cd hta`

Go ahead and build the docker image,

`docker build --tag hta .`

then run it!

`docker run -d -p 8081:8081 hta`

## What are we doing here

This is a test project to get aquinted with Kubernetes and more specifically Helm and Hel Charts. This space is a vast arena in computer science and specifically DevOps. From experiences working with client at enterprise scale, this repo is set to cover some of the heavier concepts, maximizing on best practices, and finding and identifying risks and concerns when embarking on a cloud based kubernetes transformation.

## Development

Additional documentation on setting up your environment can be found here [DEVELOPMNET](docs/INDEX.md)

## Copyright and license

Licensed under the [MIT License](https://github.com/ryanande/hta/blob/master/LICENSE).
