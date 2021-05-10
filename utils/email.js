const generateWelcomeMail = (subscriberEmail, subscriberName) => {
  const subject = 'Thanks for Joining in!';
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><meta content="width=device-width, initial-scale=1" name="viewport"><title>Neopolitan Welcome Email</title><!-- Designed by https://github.com/kaytcat --><!-- Robot header image designed by Freepik.com --><style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Droid+Sans);

  /* Take care of image borders and formatting */

  img {
    max-width: 600px;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }

  a {
    text-decoration: none;
    border: 0;
    outline: none;
    color: #bbbbbb;
  }

  a img {
    border: none;
  }

  /* General styling */

  td, h1, h2, h3  {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  td {
    text-align: center;
  }

  body {
    -webkit-font-smoothing:antialiased;
    -webkit-text-size-adjust:none;
    width: 100%;
    height: 100%;
    color: #37302d;
    background: #ffffff;
    font-size: 16px;
  }

   table {
    border-collapse: collapse !important;
  }

  .headline {
    color: #ffffff;
    font-size: 36px;
  }

 .force-full-width {
  width: 100% !important;
 }




  </style><style media="screen" type="text/css">
      @media screen {
         /*Thanks Outlook 2013! https://goo.gl/XLxpyl*/
        td, h1, h2, h3 {
          font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
        }
      }
  </style><style media="only screen and (max-width: 480px)" type="text/css">
    /* Mobile styles */
    @media only screen and (max-width: 480px) {

      table[class="w320"] {
        width: 320px !important;
      }


    }
  </style><style type="text/css"></style></head><body bgcolor="#ffffff" class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
<table align="center" cellpadding="0" cellspacing="0" height="100%" width="100%">
<tbody><tr>
<td align="center" bgcolor="#ffffff" class="" valign="top" width="100%">
<center class=""><table cellpadding="0" cellspacing="0" class="w320" style="margin: 0 auto;" width="600">
<tbody><tr>
<td align="center" class="" valign="top"><table cellpadding="0" cellspacing="0" style="margin: 0 auto;" width="100%">
<tbody><tr>
<td class="" style="font-size: 30px; text-align:center;"></td>
</tr>
</tbody></table>
<table bgcolor="#008ACE" cellpadding="0" cellspacing="0" class="" style="margin: 0 auto;" width="100%">
<tbody class=""><tr class="">
<td class=""><br>
<img alt="robot picture" class="" height="70" src="https://d1pgqke3goo8l6.cloudfront.net/onWRO1YrQiiubAgCRwAx_white_logo.png" width="70">
<br></td>
</tr>
<tr class=""><td class="headline">Welcome to Balaji's Felabella!</td></tr>
<tr>
<td>
<center class=""><table cellpadding="0" cellspacing="0" class="" style="margin: 0 auto;" width="75%"><tbody class=""><tr class="">
<td class="" style="color:#A0D8F4;"><br>
Hi <span style="font-weight:bold;" class="">${subscriberName}</span>, you are signed into our mail list.  Hereafter you will get all our updates for <span style="font-weight:bold;" class="">Free!</span>
                            <br>
<br>

<br></td>
</tr>
</tbody></table></center>
</td>
</tr>
<tr>
<td class="">
<div class="">
<a class="" data-click-track-id="6155" href="https://www.google.com" style="background-color:#73BD4D;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:50px;text-align:center;text-decoration:none;width:350px;-webkit-text-size-adjust:none;">Visit our Site</a>
</div>
<br>
<br>
</td>
</tr>
</tbody></table>
</body></html>
    `;

  return {
    to: subscriberEmail,
    subject,
    html,
  };
};

module.exports = {
  generateWelcomeMail,
};
