require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
expressLayouts = require("express-ejs-layouts");

const session = require("express-session");
const passport = require("passport");
const model = require("./models/index");

const localPassport = require("./passport/localPassport");
const googlePassport = require("./passport/googlePassport");

const flash = require("connect-flash");

const GuestMiddleware = require("./http/middlewares/GuestMiddleware");

const studentsRouter = require("./routes/students/index");
const teachersRouter = require("./routes/teacher/index");
const adminRouter = require("./routes/admin/index");
const authRouter = require("./routes/auth/index");

var app = express();

app.use(
	session({
		secret: "f8",
		resave: true,
		saveUninitialized: true,
	})
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
	const user = await model.User.findByPk(id);
	done(null, user);
});

passport.use("local", localPassport);
passport.use("google", googlePassport);

// view engine setup
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.set("layout", "layouts/master.layout.ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

//Routes
app.use("/auth", authRouter);

app.use(GuestMiddleware);

app.use("/", studentsRouter);
app.use("/teacher", teachersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
