#!/bin/bash

# ./move <file_exclude> <target_dir>

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <file_exclude> <target_dir>"
    exit 1
fi

exclude_file="$1"
target_dir="$2"

mkdir -p "$target_dir"

for file in *;do
    if [ "$file" != "$exclude_file" ] && [ "$file" != "$(basename "$0")" ]; then
        if [ -f "$file" ] || [ -d "$file" ]; then
            mv "$file" "$target_dir/"
        fi
    fi
done

echo "Files moved to $target_dir, except $exclude_file"
