const express = require("express"); //import express file
const app = express(); //import express function
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages"); //import Router to routes folder

/** Passed Body Value middleware to parse the URL encoded body. built-in Express JSON parser middleware to parse JSON*/
app.use(express.json());
app.use(
  express.urlencoded({ 
    extended: true,
  })
);
/** End Body Passed */

/** Just Print For Okey Message */
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
/** End Okey Message */

/** Routers Here */
app.use("/programming-languages", programmingLanguagesRouter);

/** End Routers */

/* Error Handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
/** End Error Handler */

/**Port Value Set */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});