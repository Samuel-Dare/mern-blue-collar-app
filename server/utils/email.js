const nodemailer = require("nodemailer");
const fs = require("fs/promises"); // Using fs.promises for asynchronous file reads
const hbs = require("nodemailer-express-handlebars");
const handlebars = require("handlebars");
const path = require("path");
const { convert } = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.url = url;
    this.from = `Blue Kollars <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      // Sendgrid
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  setupHandlebars() {
    // Define the path to your email templates
    const viewsPath = path.join(__dirname, "..", "views");
    // console.log(viewsPath, this.firstName, this.url);
    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: viewsPath,
        // layoutsDir: viewsPath,
        defaultLayout: false,
      },
      viewPath: viewsPath,
      extName: ".handlebars",
    };

    // Configure Nodemailer to use Handlebars
    this.newTransport().use("compile", hbs(handlebarOptions));
  }

  async renderTemplate(templateName, context) {
    try {
      // Read the Handlebars template file
      const templatePath = path.join(
        __dirname,
        "..",
        "views",
        `${templateName}.handlebars`
      );
      const templateContent = await fs.readFile(templatePath, "utf8");

      // Compile the template
      const compiledTemplate = handlebars.compile(templateContent);

      // Render the compiled template with the provided context
      const renderedHtml = compiledTemplate(context);

      return renderedHtml;
    } catch (error) {
      console.error("Error rendering template:", error);
      throw error;
    }
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Set up Handlebars before sending the email
    this.setupHandlebars();

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      template: template,
      html: "",
      text: "",
      context: {
        FIRST_NAME: this.firstName,
        BTN_URL: this.url,
      },
    };

    // 3) Render HTML content based on the Handlebars template
    const html = await this.renderTemplate(template, mailOptions.context);
    mailOptions.html = html;
    mailOptions.text = convert(html);

    // 4) Create a transport and send email
    const transporter = this.newTransport();

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.log("Error occurred while sending email:", error);
    }
  }

  async sendEmailConfirmation() {
    await this.send(
      "confirm-email",
      "Please confirm your email address within 24 hours to activate your account. Otherwise, your account may be subject to removal."
    );
  }

  async sendWelcome() {
    await this.send("welcome-email", "Welcome to the Blue Kollars Family!");
  }

  async sendWelcomeProfessional() {
    await this.send(
      "welcome-professional-email",
      "Hurray🎈🎈🎈 You are now a BKollar... Let's earn money together!"
    );
  }

  async sendPasswordReset() {
    await this.send(
      "password-reset-email",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
};
