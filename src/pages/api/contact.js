import nodemailer from "nodemailer";

export default async (req, res) => {
    const { name, mobile, date, time, unit, servicename } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        }
    });

    try {
        await transporter.sendMail({
            from: 'customer@gmail.com',
            to: "smartcare852131@gmail.com",
            subject: `New Job ${servicename}`,
            html: `
                
            <h3>New Leads From Web SmartCare</h3><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Mobile: </strong> ${mobile}</p>
         <p><strong>date: </strong> ${date} - ${time}</p>
         <p><strong>unit: </strong> ${unit}</p>
        <p><strong>service: </strong> ${servicename}</p>


      `
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};