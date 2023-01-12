export const approveUser = async (id) => {
  try {
    const res = await fetch("/api/approve-user", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ id: id }),
    });

    if (!res.ok) return false;

    return true;
  } catch (err) {
    return false;
  }
};
