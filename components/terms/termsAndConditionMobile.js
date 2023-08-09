import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './terms.module.css';
import TermsAndConditionMobileData from '@/utils/termsAndConditionMobileData';
import TermsAndConditionContent from './termsAndConditionContent';

export default function TermsAndConditionMobile(props) {
  const [readMore, setReadMore] = useState(false);
  const [readMorePrivacy, setReadMorePrivacy] = useState(false);
  const [readMoreConfidentiality, setReadMoreConfidentiality] = useState(false);
  const [readMoreAvailability, setReadMoreAvailability] = useState(false);
  const [readMoreLogFiles, setReadMoreLogFiles] = useState(false);
  const [readMoreWebsiteLinks, setReadMoreWebsiteLinks] = useState(false);

  const {
    intro,
    privacyPolicy,
    confidentiality,
    availaibility,
    logFiles,
    websiteLinks,
  } = TermsAndConditionMobileData();

  return (
    <>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
        }}
      >
        {readMore ? intro : intro.slice(0, 475)}{' '}
        {
          <span
            onClick={
              readMore ? () => setReadMore(false) : () => setReadMore(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMore ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Privacy Statement
      </Form.Label>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
          marginTop: '10px',
        }}
      >
        {readMorePrivacy ? privacyPolicy : privacyPolicy.slice(0, 474)}{' '}
        {
          <span
            onClick={
              readMorePrivacy
                ? () => setReadMorePrivacy(false)
                : () => setReadMorePrivacy(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMorePrivacy ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Confidentiality
      </Form.Label>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
          marginTop: '10px',
        }}
      >
        {readMoreConfidentiality
          ? confidentiality
          : confidentiality.slice(0, 472)}{' '}
        {
          <span
            onClick={
              readMoreConfidentiality
                ? () => setReadMoreConfidentiality(false)
                : () => setReadMoreConfidentiality(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMoreConfidentiality ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Disclaimer
      </Form.Label>
      <Form.Label
        style={{
          fontSize: '12px',
          color: 'black',
          fontWeight: 600,
          marginTop: '10px',
        }}
      >
        Exclusions and Limitations
      </Form.Label>
      <p
        style={{
          fontSize: '12px',
          color: 'black',
          marginTop: '10px',
          textAlign: 'justify',
        }}
      >
        {`The information on this web site is 
                provided on an "as is" basis. To the fullest extent permitted by law, this Company:`}
      </p>
      <ul style={{}}>
        <li
          className={styles.list}
          style={{
            fontSize: '12px',
            textAlign: 'justify',
            marginBottom: '8px',
          }}
        >
          {`excludes all representations and warranties relating to this website and 
                    its contents or which is or may be provided by any affiliates or any other third party, 
                    including in relation to any inaccuracies or omissions in this website and/or 
                    the Company’s literature; and`}
        </li>
        <li
          className={styles.list}
          style={{
            fontSize: '12px',
            textAlign: 'justify',
          }}
        >
          {`excludes all liability for damages arising out of or in connection with your use of 
                    this website. This includes, without limitation, direct loss, loss of business or profits 
                    (whether or not the loss of such profits was foreseeable, arose in the normal course of things or 
                        you have advised this Company of the possibility of such potential loss), damage caused to your 
                        computer, computer software, systems and programs and the data 
                    thereon or any other direct or indirect, consequential and incidental damages.`}
        </li>
      </ul>
      <p
        style={{
          fontSize: '12px',
          color: 'black',
          marginTop: '10px',
        }}
      >
        {`This Company does not however exclude liability for death or personal injury caused by its negligence. The above exclusions and limitations apply only to 
                the extent permitted by law. None of your statutory rights as a consumer are affected.`}
      </p>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '10px',
        }}
      >
        Cancellation Policy
      </Form.Label>
      <TermsAndConditionContent
        details={`Minimum 24 hours notice of cancellation required. Notification for instance, 
            in person, via email, mobile phone ‘text message’ and/or fax, or any other means will be 
            accepted subject to confirmation in writing. 
            We reserve the right to levy a £30 charge to cover any subsequent administrative expenses.`}
      />
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Termination of Agreements and Refunds Policy
      </Form.Label>
      <TermsAndConditionContent
        details={`Both the Client and ourselves have the right to terminate any 
                Services Agreement for any reason, including the ending of services that are already 
                underway. No refunds shall be offered, where a Service is deemed to have begun and is, 
                for all intents and purposes, underway. Any monies that have been paid to us which constitute 
                payment in respect of the provision of unused Services, shall be refunded..`}
      />
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Availability
      </Form.Label>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
        }}
      >
        {readMoreAvailability ? availaibility : availaibility.slice(0, 475)}{' '}
        {
          <span
            onClick={
              readMoreAvailability
                ? () => setReadMoreAvailability(false)
                : () => setReadMoreAvailability(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMoreAvailability ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Log Files
      </Form.Label>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
        }}
      >
        {readMoreLogFiles ? logFiles : logFiles.slice(0, 475)}{' '}
        {
          <span
            onClick={
              readMoreLogFiles
                ? () => setReadMoreLogFiles(false)
                : () => setReadMoreLogFiles(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMoreLogFiles ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Cookies
      </Form.Label>
      <TermsAndConditionContent
        details={`Both the Client and ourselves have the right to terminate any Services Agreement for any 
                reason, including the ending of services that are already underway. No refunds shall be offered,
                 where a Service is deemed to have begun and is, for all intents and purposes, underway. Any monies 
                 that have been paid to us which 
                constitute payment in respect of the provision of unused Services, shall be refunded.`}
      />
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
          marginTop: '20px',
        }}
      >
        Links from this website
      </Form.Label>
      <div
        style={{
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
        }}
      >
        {readMoreWebsiteLinks ? websiteLinks : websiteLinks.slice(0, 475)}{' '}
        {
          <span
            onClick={
              readMoreWebsiteLinks
                ? () => setReadMoreWebsiteLinks(false)
                : () => setReadMoreWebsiteLinks(true)
            }
            style={{
              marginLeft: '5px',
              color: '#009027',
            }}
          >
            {readMoreWebsiteLinks ? 'show less...' : 'read more...'}
          </span>
        }
      </div>
    </>
  );
}
