#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 file.html [backup]"
    echo "  file.html: HTML file to clean"
    echo "  backup: (optional) 'true' to create backup of original file"
    exit 1
fi

FILE="$1"
BACKUP="${2:-false}"

if [ ! -f "$FILE" ]; then
    echo "Error: File '$FILE' not found."
    exit 1
fi

if [ "$BACKUP" = "true" ]; then
    BACKUP_FILE="${FILE}.backup"
    cp "$FILE" "$BACKUP_FILE"
    echo "Backup created: $BACKUP_FILE"
fi

sed -i '' 's/ data-[^=]*="[^"]*"//g' "$FILE"

perl -i -pe 's/href="[^#][^"]*"/href="#"/g' "$FILE"

perl -i -pe 's/<\/[^>]+>/$&\n/g' "$FILE"

perl -i -pe 's/<[^\/][^>]+>/\n$&/g' "$FILE"

perl -i -pe 's/></>\n</g' "$FILE"

echo "HTML cleaned and formatted: $FILE"
echo "- data- attributes removed"
echo "- HREFs replaced with # (except those already starting with #)"
echo "- Line breaks added after any HTML closing tag"
echo "- Line breaks added before HTML opening tags"
