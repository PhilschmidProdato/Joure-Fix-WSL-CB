docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' cb-node3 ; docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' cb-node2 