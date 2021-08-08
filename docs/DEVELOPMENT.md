# Setting up local Kunernetes Cluster for development on Mac

These notes were taken from several tutorials identifying a solid path for setting up and getting started with Helm.

## Steps

### Install Homebrew

If you do not have Homebrew installed, you need it, you should love it, and use it for all things as it makes life much easier!

Detailed Homebrew installation and other options can be found here [Homebrew Installation](https://docs.brew.sh/Installation).

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Docker

#### TL;DR Docker

`brew install docker`

Once Docker has successfully installed, fire it up by launching the Docker Desktop app.

### Install kubectl

#### TL;DR Brew

`brew install kubectl`

The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.

Detailed install instructions located here, [Install and Set Up kubectl on macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/).

### Install minikube

#### TL;DR minikube

`brew install minikube`

[minikube](https://minikube.sigs.k8s.io/) is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes. This is the sauce.

Detailed install instructions located here, [minikube start](https://minikube.sigs.k8s.io/docs/start/).

#### Start Up Minikube

`minikube start`

Output should look like something similar;

```bash
😄  minikube v1.22.0 on Darwin 11.5.1
✨  Automatically selected the docker driver. Other choices: hyperkit, ssh
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
💾  Downloading Kubernetes v1.21.2 preload ...
    > preloaded-images-k8s-v11-v1...: 502.14 MiB / 502.14 MiB  100.00% 2.35 MiB
    > gcr.io/k8s-minikube/kicbase...: 361.09 MiB / 361.09 MiB  100.00% 1.19 MiB
🔥  Creating docker container (CPUs=2, Memory=1987MB) ...
🐳  Preparing Kubernetes v1.21.2 on Docker 20.10.7 ...
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default

```

### Check out your Shiny new Cluster

Run the following command to check out your new local cluster!

`kubectl get po -A`

You should see a similar output like this;

```bash
NAMESPACE              NAME                                         READY   STATUS    RESTARTS   AGE
kube-system            coredns-558bd4d5db-h5ght                     1/1     Running   0          23m
kube-system            etcd-minikube                                1/1     Running   0          23m
kube-system            kube-apiserver-minikube                      1/1     Running   0          23m
kube-system            kube-controller-manager-minikube             1/1     Running   0          23m
kube-system            kube-proxy-xkhbf                             1/1     Running   0          23m
kube-system            kube-scheduler-minikube                      1/1     Running   0          23m
kube-system            storage-provisioner                          1/1     Running   0          23m
kubernetes-dashboard   dashboard-metrics-scraper-7976b667d4-ljkdr   1/1     Running   0          18m
kubernetes-dashboard   kubernetes-dashboard-6fcdf4f6d-kcxc5         1/1     Running   0          18m
```

Now will all the things in flight you can open the dashboard and poke around.

`minikube dashboard`

This will launch an interactive realtime dashboard with the details of your cluster.

## Dialing in Helm

### TL;DR Helm

`brew install helm`

### Dial in Autocomplete

To load completions for every new session, execute once;

#### bash

`helm completion bash > /etc/bash_completion.d/helm`

#### zsh

`helm completion zsh > "${fpath[1]}/_helm"`

#### Fish

`helm completion fish > ~/.config/fish/completions/helm.fish`

### Initialize a Helm Chart Repository

Once you have Helm ready, you can add a chart repository. Check Artifact Hub for available Helm chart repositories.

`helm repo add bitnami https://charts.bitnami.com/bitnami`

Once this is installed, you will be able to list the charts you can install:

`helm search repo bitnami`

```bash
NAME                             	CHART VERSION	APP VERSION  	DESCRIPTION
bitnami/bitnami-common           	0.0.9        	0.0.9        	DEPRECATED Chart with custom templates used in ...
bitnami/airflow                  	8.0.2        	2.0.0        	Apache Airflow is a platform to programmaticall...
bitnami/apache                   	8.2.3        	2.4.46       	Chart for Apache HTTP Server
bitnami/aspnet-core              	1.2.3        	3.1.9        	ASP.NET Core is an open-source framework create...
# ... and many more
```

### Workflowin Practice

When working through creating a chart, to test validity,

`helm template .`

Check your dependencies,

`helm dep list`

If missing dependencies,

`helm dependency update .`

Deploy it,

`helm install . --generate-name`

Check it with kubectl,

`kubectl get pods`

```bash
NAME                                                     READY   STATUS             RESTARTS   AGE
chart-1629073560-hta-chart-deployment-55f4c75cc8-6559s   0/1     ImagePullBackOff   0          27m
chart-1629073560-hta-chart-deployment-55f4c75cc8-pz27w   0/1     ImagePullBackOff   0          27m
chart-1629073560-mongodb-59fb56986b-74v8h                1/1     Running            0          27m
```

`kubectl get services`

```bash
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
chart-1629073560-hta-chart-service   NodePort    10.102.100.17   <none>        8080:31736/TCP   29m
chart-1629073560-mongodb             ClusterIP   10.100.161.58   <none>        27017/TCP        29m
kubernetes                           ClusterIP   10.96.0.1       <none>        443/TCP          8d
```

with minkikube

`minikube service list`

check it in the browser,

`minikube service chart-1629073560-hta-chart-service`

check the deployments,

`helm list`

uninstall,

`helm uninstall RELEASE_NAME [...] [flags]`
