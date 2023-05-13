import os
import json

merged_data = {}

# Read and store content of categories.json
with open("./categories.json", "r", encoding="utf-8") as categories_file:
    categories_data = json.load(categories_file)
    merged_data["categories"] = categories_data

# Traverse through JSON files in the root folder and subfolders
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".json") and file != "categories.json" and file != "products-data.json":
            file_path = os.path.join(root, file)
            print(file_path)

            # Read each JSON file and append its content to "items" list
            with open(file_path, "r", encoding="utf-8") as json_file:
                json_data = json.load(json_file)
                merged_data.setdefault("items", []).append(json_data)

# Serialize merged_data and save to merged.json
with open("products-data.json", "w", encoding="utf-8") as merged_file:
    json.dump(merged_data, merged_file, indent=None, separators=(",",":"), ensure_ascii=False)

print("Merging completed. Merged data saved to products-data.json.")
