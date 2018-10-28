import React from 'react';

export default props => {
  return (
    <footer>
      <img src="https://content.mediastg.net/static/RealEstate/company/298/013-logo.png" alt="" />
      <div class="footer-logo-subtext">
        PREFERRED REALTORS
    </div>
      <div class="office-address-info">
        12 Park Lane Dr
      <br /> Oldtown Circle, PA. 19073
      <br /> Office Phone: (123)456-7890
    </div>
      <div class="realtor-info">
        Marcus Maximus
    </div>
      <div class="credentials-contact">
        Associate Broker, SRES, GRI, ALHS
      <br /> AB99991
      <br /> Mobile Phone: (098)765-4321
    </div>
      <div class="follow">
        FOLLOW ME
      <div class="follow-icon">
          <i class="fab fa-1x fa-facebook-f"></i>
        </div>
      </div>
      <div class="footer-contact">
        <div class="form-header">
          CONTACT
      </div>
        <form class="contact-form">
          <input type="text" placeholder="Name" />
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <textarea type="text" placeholder="Message"></textarea>
          <br />
          <button>SEND</button>
        </form>
      </div>
      <div class="disclosure">
        Each RE/MAX Office is Independently Owned and Operated. Equal Housing Opportunity.
      <br /> © 2018 Reliance Network and RE/MAX Pennsylvania &amp; Delaware. All rights reserved. U.S. Reg. Copyright
                TX-5-910-991,
                TX-5-910-992, TX-5-910-993, and TX-5-910-994. Equal Housing Opportunity.
    </div>
      <img src="http://www.adriennecordova.com/Areas/CMS/Views/cms-templates/img/reliance-logo-white.png" alt="webdeveloper-logo" />
      <br />
      <button class="agent-access">
        AGENT ACCESS
    </button>
    </footer>
  )
}