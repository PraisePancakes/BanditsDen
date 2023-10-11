module.exports = async (req, res) => {
  try {
    const response = await fetch(
      "https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters"
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
