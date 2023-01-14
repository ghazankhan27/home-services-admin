export async function addCategory(obj) {
  try {
    let temp = {
      name: obj.get("Category"),
      subcategories: [],
    };

    let i = 1;

    for (let key of obj.keys()) {
      if (key !== "Category") {
        temp.subcategories.push({ id: i, name: obj.get(key) });
        i += 1;
      }
    }

    const res = await fetch("/api/add-category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(temp),
    });

    if (!res.ok) return false;

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
