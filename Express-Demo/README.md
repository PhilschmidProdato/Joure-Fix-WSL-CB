# Docker commands

## Build Container

```
docker build -t prodato-jf-node-example .
```

## Run Container

```
docker run -p 1111:4444 -d prodato-jf-node-example
```

## login into docker hub

```
docker login -u prodatopsc
```

## tag image for push

```
docker tag prodato-jf-node-example prodatopsc/prodato-jf-node-example
```

## upload to registry

```
docker push prodatopsc/prodato-jf-node-example
```

### Switch Enviroment or delete Images bevor

## pull from registry

```
docker pull prodatopsc/prodato-jf-node-example
```
