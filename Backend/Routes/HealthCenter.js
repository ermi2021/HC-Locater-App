const router = require("express").Router();
const fetch = require("node-fetch");

router.route("/").get(async function (req, res) {
  console.log(req.headers['authorization']);
  const url = "https://play.dhis2.org/2.37.4/api/organisationUnits.json";
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  console.log("RESPONSE: ", response);
  res.json(response);
});

module.exports = router;
