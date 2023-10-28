const hanleHelloword = (req,res) => {
    return res.render("home.ejs");
}

const hanleUserPage = (req,res) => {
    return res.render("user.ejs");
}

module.exports = {
    hanleHelloword,
    hanleUserPage
}