export default function TermsAndConditionMobileData(props) {
  const intro = `The following terminology applies to these Terms and Conditions,
    Privacy Statement and Disclaimer Notice and any or all
    Agreements: "Client", “You” and “Your” refers to you, the person
    accessing this website and accepting the Company’s terms and
    conditions. "The Company", “Ourselves”, “We” and "Us", refers to
    our Company. “Party”, “Parties”, or “Us”, refers to both the
    Client and ourselves, or either the Client or ourselves. All
    terms refer to the offer, acceptance and consideration of
    payment necessary to undertake the process of our assistance to
    the Client in the most appropriate manner, whether by formal
    meetings of a fixed duration, or any other means, for the
    express purpose of meeting the Client’s needs in respect of
    provision of the Company’s stated services/products, in
    accordance with and subject to, prevailing English Law. Any use
    of the above terminology or other words in the singular, plural,
    capitalisation and/or he/she or they, are taken as
    interchangeable and therefore as referring to same.`;

  const privacyPolicy = `We are committed to protecting your privacy. Authorized
    employees within the company on a need to know basis only use
    any information collected from individual customers. We
    constantly review our systems and data to ensure the best
    possible service to our customers. Parliament has created
    specific offences for unauthorised actions against computer
    systems and data. We will investigate any such actions with a
    view to prosecuting and/or taking civil proceedings to recover
    damages against those responsible. The rights to all text,
    images, and other materials on this site are reserved to Drone
    America, LLC, unless otherwise indicated.`;

  const confidentiality = `We are registered under the Data Protection Act 1998 and as
    such, any information concerning the Client and their respective
    Client Records may be passed to third parties. However, Client
    records are regarded as confidential and therefore will not be
    divulged to any third party, other than [our
    manufacturer/supplier(s) and] if legally required to do so to
    the appropriate authorities. Clients have the right to request
    sight of, and copies of any and all Client Records we keep, on
    the proviso that we are given reasonable notice of such a
    request. Clients are requested to retain copies of any
    literature issued in relation to the provision of our services.
    Where appropriate, we shall issue Client’s with appropriate
    written information, handouts or copies of records as part of an
    agreed contract, for the benefit of both parties. We will not sell, share, or rent your personal information to any 
    third party or use your e-mail address for unsolicited mail. Any emails sent by this Company 
    will only be in connection with the provision of agreed services and products.`;

  const availaibility = `Unless otherwise stated, the services featured on this website are only available 
    within the United Kingdom, or in relation to postings from the United Kingdom. All advertising 
    is intended solely for the United Kingdom market. You are solely responsible for evaluating the 
    fitness for a particular purpose of any downloads, programs and text available through this site. 
    Redistribution or republication of any part of this site or its content is prohibited, including 
    such by framing or other similar or any other means, without the express written consent of the
     Company. The Company does not warrant that the service from this site will be uninterrupted, 
     timely or error free, although it is provided to the best ability. By using this service you 
     thereby indemnify this Company, its employees, agents and affiliates against any loss or 
     damage, in whatever manner, howsoever caused.`;

  const logFiles = `We use IP addresses to analyse trends, administer the site, track user’s movement, 
     and gather broad demographic information for aggregate use. IP addresses are not linked to personally 
     identifiable information. Additionally, for systems administration, detecting usage patterns and 
     troubleshooting purposes, our web servers automatically log standard access information including 
     browser type, access times/open mail, URL requested, and referral URL. This information is not shared 
     with third parties and is used only within this Company on a need-to-know basis. Any individually 
     identifiable information related to this data 
     will never be used in any way different to that stated above without your explicit permission.`;

  const websiteLinks = `We do not monitor or review the content of other party’s websites which are 
     linked to from this website. Opinions expressed or material appearing on such websites 
     are not necessarily shared or endorsed by us and should not be regarded as the publisher of s
     uch opinions or material. Please be aware that we are not responsible for the privacy practices, 
     or content, of these sites. We encourage our users to be aware when they leave our site & to read 
     the privacy statements of these sites. You should evaluate the security and trustworthiness of 
     any other site connected to this site or accessed through this site yourself, before disclosing 
     any personal information to them. This Company will not accept any responsibility for any loss 
     or damage in whatever manner, howsoever caused, 
     resulting from your disclosure to third parties of personal information.`;

  return {
    intro,
    privacyPolicy,
    confidentiality,
    availaibility,
    logFiles,
    websiteLinks,
  };
}
