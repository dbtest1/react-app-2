#!/bin/sh
#!/bin/bash

git update-index --chmod=+x ./run-on-new-commit/task_show_stuff.sh

get_hostname=$(hostname)
echo "Hostname is ${get_hostname}"