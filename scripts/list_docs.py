import os

def find_md_files(directory):
    """Find all .md files in the given directory and its subdirectories."""
    md_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                full_path = os.path.join(root, file)
                md_files.append(full_path)
    return md_files

def main():
    current_dir = os.getcwd()
    md_files = find_md_files(os.path.join(current_dir, "docs/notes"))
    
    if md_files:
        print("Found .md files:")
        for path in md_files:
            print(path)
    else:
        print("No .md files found in the current directory or its subdirectories.")

if __name__ == "__main__":
    main()