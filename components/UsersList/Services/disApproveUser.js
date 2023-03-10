export const disApproveUser = async (id) => {
  try {
    const res = await fetch("/api/disapprove-user", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    });

    if (!res.ok) return false;

    return true;
  } catch (err) {
    return false;
  }
};
