var express = require("express");
var router = express.Router();
const session = require("express-session");
const app = require("../app");
const { preUser, condition } = require("../module/userData");

// header acces
const headerCondition = false;

var userGloabel;

function middleware(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/signin");
  }
}

// sign in
router.get("/signin", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else
    res.render("signin", {
      headerCondition: false,
      loginError: req.session.loginErro,
    });
  req.session.loginErro = false;
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (preUser.usernameDB == username && preUser.passwordDB == password) {
    condition.isUserLoggedIn = true;
    req.session.loggedIn = true;
    req.session.user = req.body;
    res.redirect("/");
  } else {
    req.session.loginErro = true;
    res.redirect("/signin");
  }
});

// home done
router.get("/", middleware, (req, res) => {
  userGloabel = req.session.user;
  res.render("home", { headerCondition: true, userGloabel });
});

// table done
router.get("/table", middleware, (req, res) => {
  const userList = [
    {
      firstName: "Mark 1",
      secondName: "Bounce 1",
      emailId: "mrmark@gmail.com 1",
      age: 24,
      count: 1,
    },
    {
      firstName: "Mark 2",
      secondName: "Bounce 2",
      emailId: "mrmark@gmail.com 2",
      age: 29,
      count: 2,
    },
    {
      firstName: "Mark 3",
      secondName: "Bounce 3",
      emailId: "mrmark@gmail.com 3",
      age: 54,
      count: 3,
    },
  ];
  res.render("table", { headerCondition: true, userGloabel, userList });
});

// table pending
router.get("/list", middleware, (req, res) => {
  const lists = [
    {
      item: "An item",
    },
    {
      item: "A second item",
    },
    {
      item: "A third item",
    },
    {
      item: "A fourth item",
    },
    {
      item: "And a fifth one",
    },
  ];

  res.render("lists", { headerCondition: true, userGloabel, lists });
});
// card done
router.get("/card", middleware, (req, res) => {
  const cardData = [
    {
      itemName: "iPhone",
      description: "good phone with great camera",
      category: "Mobile",
      price: 129000,
      imgUrl:
        "https://imgs.search.brave.com/koxPFurNoP58vii-c2XWbIuQLhaSl-DfZfNnVDJSv4c/rs:fit:600:900:1/g:ce/aHR0cHM6Ly9hZG1p/bi5zYW5nZWV0aGFt/b2JpbGVzLmNvbS91/cGxvYWRzL3Byb2R1/Y3RfaW1hZ2UvcHJv/ZHVjdF9kZXRhaWxz/X3BhZ2UvaW1hZ2Vf/MjAxOTEyMzBfYTk5/NjdlNTY4M2U2NTM0/ZGRkNTI1YjhhMTEw/YTRkYzguanBn",
    },
    {
      itemName: "iPhone",
      description: "good phone with great camera",
      category: "Mobile",
      price: 129000,
      imgUrl:
        "https://imgs.search.brave.com/koxPFurNoP58vii-c2XWbIuQLhaSl-DfZfNnVDJSv4c/rs:fit:600:900:1/g:ce/aHR0cHM6Ly9hZG1p/bi5zYW5nZWV0aGFt/b2JpbGVzLmNvbS91/cGxvYWRzL3Byb2R1/Y3RfaW1hZ2UvcHJv/ZHVjdF9kZXRhaWxz/X3BhZ2UvaW1hZ2Vf/MjAxOTEyMzBfYTk5/NjdlNTY4M2U2NTM0/ZGRkNTI1YjhhMTEw/YTRkYzguanBn",
    },
    {
      itemName: "iPhone",
      description: "good phone with great camera",
      category: "Mobile",
      price: 129000,
      imgUrl:
        "https://imgs.search.brave.com/koxPFurNoP58vii-c2XWbIuQLhaSl-DfZfNnVDJSv4c/rs:fit:600:900:1/g:ce/aHR0cHM6Ly9hZG1p/bi5zYW5nZWV0aGFt/b2JpbGVzLmNvbS91/cGxvYWRzL3Byb2R1/Y3RfaW1hZ2UvcHJv/ZHVjdF9kZXRhaWxz/X3BhZ2UvaW1hZ2Vf/MjAxOTEyMzBfYTk5/NjdlNTY4M2U2NTM0/ZGRkNTI1YjhhMTEw/YTRkYzguanBn",
    },
    {
      itemName: "iPhone",
      description: "good phone with great camera",
      category: "Mobile",
      price: 129000,
      imgUrl:
        "https://imgs.search.brave.com/koxPFurNoP58vii-c2XWbIuQLhaSl-DfZfNnVDJSv4c/rs:fit:600:900:1/g:ce/aHR0cHM6Ly9hZG1p/bi5zYW5nZWV0aGFt/b2JpbGVzLmNvbS91/cGxvYWRzL3Byb2R1/Y3RfaW1hZ2UvcHJv/ZHVjdF9kZXRhaWxz/X3BhZ2UvaW1hZ2Vf/MjAxOTEyMzBfYTk5/NjdlNTY4M2U2NTM0/ZGRkNTI1YjhhMTEw/YTRkYzguanBn",
    },
    {
      itemName: "iPhone",
      category: "Mobile",
      description: "good phone with great camera",
      price: 129000,
      imgUrl:
        "https://imgs.search.brave.com/koxPFurNoP58vii-c2XWbIuQLhaSl-DfZfNnVDJSv4c/rs:fit:600:900:1/g:ce/aHR0cHM6Ly9hZG1p/bi5zYW5nZWV0aGFt/b2JpbGVzLmNvbS91/cGxvYWRzL3Byb2R1/Y3RfaW1hZ2UvcHJv/ZHVjdF9kZXRhaWxz/X3BhZ2UvaW1hZ2Vf/MjAxOTEyMzBfYTk5/NjdlNTY4M2U2NTM0/ZGRkNTI1YjhhMTEw/YTRkYzguanBn",
    },
  ];

  res.render("cards", { headerCondition: true, userGloabel, cardData });
});

// sign out
router.get("/signout", (req, res) => {
  condition.isUserLoggedIn = false;
  req.session.destroy();
  res.redirect("/signin");
});

module.exports = router;
