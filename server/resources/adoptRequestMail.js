function adoptReqMail(resData) {
    return `<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Call To Action</title>
    <style>
        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        body {
            background-color: #161f33;
            font-family: Georgia, 'Times New Roman', Times, serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        p {
            color: #222;
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            min-width: 100%;
            width: 100%;
        }

        table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
        }

        .body {
            background-color: #161f33;
            width: 100%;
        }

        .container {
            display: block;
            margin: 0 auto !important;
            max-width: 580px;
            padding: 10px;
            width: 580px;
        }

        .content {
            position: relative;
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            width: 100%;
            padding: 10px;
        }

        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%;
        }

        .header {
            padding: 20px 0;
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
        }

        .action-group {
            justify-content: space-between !important;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
            color: #9a9ea6;
            font-size: 12px;
            text-align: center;
        }

        h1,
        h2,
        h3,
        h4 {
            color: #06090f;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
        }

        a {
            color: #ec0867;
            text-decoration: underline;
        }

        .btn {
            box-sizing: border-box;
            min-width: 100%;
            width: 100%;
        }

        .btn a {
            background-color: #ffffff;
            border: solid 1px #ec0867;
            border-radius: 5px;
            box-sizing: border-box;
            color: #ec0867;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .btn-primary a {
            background-color: #ec0867;
            border-color: #ec0867;
            color: #ffffff;
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0;
        }

        .powered-by a {
            text-decoration: none;
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0;
        }

        @media only screen and (max-width: 620px) {
            table[class='body'] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class='body'] p,
            table[class='body'] ul,
            table[class='body'] ol,
            table[class='body'] td,
            table[class='body'] span,
            table[class='body'] a {
                font-size: 16px !important;
            }

            table[class='body'] .wrapper,
            table[class='body'] .article {
                padding: 10px !important;
            }

            table[class='body'] .content {
                padding: 17px !important;
            }

            table[class='body'] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class='body'] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class='body'] .btn a {
                width: 100% !important;
            }

            table[class='body'] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }

            .action-group {
                flex-direction: column;
                gap: 1rem;
            }
        }

        @media all {

            p,
            li {
                font-size: 1rem !important;
            }

            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

            .btn-primary.reject:hover {
                background-color: #d5075d !important;
                border-color: #d5075d !important;
            }

            .btn-primary.accept:hover {
                background-color: #099425 !important;
                border-color: #099425 !important;
            }
        }
    </style>
</head>

<body class="">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>

            <div class="header">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="text-align: center;">
                            <a href="https://adopet24.netlify.app/"><img src="https://res.cloudinary.com/dkf5lwjqr/image/upload/v1718507922/adopet/ztzbsifnvyimgetwadxt.png" height="70"
                                    alt="AdoPet"></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="content">
                <table role="presentation" class="main">
                    <tr>
                        <td class="wrapper">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <h2 style="font-size: 2rem; color: #333; font-weight: 700;">Hi, <span
                                                style="color: #d7cc00; text-transform: uppercase;font-size: 2rem !important;">${resData._doc.donor_name}</span></h2>

                                        <p
                                            style="margin-top: -1rem !important; font-size: 1.2rem; font-weight: 400; line-height: 1.5rem;">
                                            I'm <span style="font-weight: 600; color: #00c1f2; text-transform: capitalize;">${resData.currentuser}
                                            </span> and
                                            I'm
                                            interested in
                                            adopting
                                            this underprovided pet
                                            donated by you. I'm aware of
                                            all terms and conditions
                                            mentioned by you and is
                                            satisfied with the terms
                                            and agreements.</p>
                                        <hr width="100%" size="3px" color="#aaa" style="margin-block: 1.5rem;" />
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="padding-inline: 2rem;">
                                            <tbody
                                                style="padding: 1.5rem 2rem;border: 1.2px solid #666;">
                                                <tr>
                                                    <td>
                                                        <h3 style="font-size: 1.4rem; font-weight: 600;color: #1c1c30;">
                                                            Vet info
                                                        </h3>
                                                        <table role="presentation" border="0" cellpadding="0"
                                                            cellspacing="0" style="margin-top: -4rem;">
                                                            <tr>
                                                                <td>
                                                                    <p
                                                                        style="color: #043b64; font-size: 1.3rem; font-weight: 600;">
                                                                        <strong
                                                                            style="color: #d5075d;margin-right: 0.3rem;">Name:</strong>
                                                                        ${resData._doc.vet_name}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p
                                                                        style="color: #043b64; font-size: 1.3rem; font-weight: 600;">
                                                                        <strong
                                                                            style="color: #d5075d;margin-right: 0.3rem;">Category:</strong>
                                                                        ${resData._doc.vet_category}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <p
                                                                        style="color: #043b64; font-size: 1.3rem; font-weight: 600;">
                                                                        <strong
                                                                            style="color: #d5075d;margin-right: 0.3rem;">Breed:</strong>
                                                                        ${resData._doc.vet_breed}
                                                                    </p>
                                                                </td>
                                                            </tr><br>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr width="100%" size="3px" color="#aaa" style="margin-block: 1.5rem;" />
                                        <p
                                            style="margin-top: 2rem !important; font-size: 1.2rem; font-weight: 400; line-height: 1.5rem;">
                                            I am willing to fix an
                                            appointment with you on
                                            <span style="font-weight: 600; color: #00c1f2;">${resData.dtOfApntmnt}</span>
                                            if you are okay with it.
                                            Please inform me about our
                                            deal by accepting this
                                            request.
                                            <br><br><br>
                                            with Regards,<br>
                                            <span style="font-size: 1.3rem;font-weight: 600; text-transform: capitalize;">${resData.currentuser}</span>
                                        </p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                                            style="margin-top: 4rem !important;">
                                            <tbody>
                                                <tr style="display: flex;justify-content: space-between;"
                                                    class="action-group">
                                                    <td align="left">
                                                        <table role="presentation" border="0" cellpadding="0"
                                                            cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="btn btn-primary reject"
                                                                        style="text-align: center;font-size: 1.5rem;">
                                                                        <a href="https://adopet24.netlify.app/rejectReq"
                                                                            style=" background-color: #f00 !important;border-color: #f00;"
                                                                            target="_blank">Reject</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <td align="right">
                                                        <table role="presentation" border="0" cellpadding="0"
                                                            cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="btn btn-primary accept"
                                                                        style="text-align: center;font-size: 1.5rem;">
                                                                        <a href="http://localhost:3000/adopt/accept-adopt-confirmation?id=${resData._doc._id}"
                                                                            style="background-color: #006815 !important;border-color: #006815;"
                                                                            target="_blank">Accept</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div class="footer">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-block">
                                <span class="apple-link">GP Block, Sector-V, SaltLake, Kolkata-12</span>
                                <br> Don't like these emails? <a href="https://adopet24.netlify.app//unsubscribe">Unsubscribe</a>.
                            </td>
                        </tr>
                        <tr>
                            <td class="content-block powered-by">
                                Powered by <a href="https://adopet24.netlify.app/">AdoPet</a>.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <td>&nbsp;</td>
        </tr>
    </table>
</body>

</html>`;
}

module.exports = adoptReqMail