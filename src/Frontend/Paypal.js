import React, { useRef, useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function PaypalExpressBtn(props) {
  const paypal = useRef();
  const navigate = useNavigate();
  const [planID, setPlanID] = useState("");
  useEffect(() => {
    // console.log('aaa');
    // console.log(props.data);
    if(props.data == 'one') {
      window.paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          setPlanID("P-21761821TN8123130ML2SOXY")
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-21761821TN8123130ML2SOXY'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
          navigate('/user');
        }
      }).render('#paypal-button-container-P-21761821TN8123130ML2SOXY'); // Renders the PayPal button
    }
    else if(props.data == 'ten'){
      console.log('ssssss')
      setPlanID("P-2GB94113Y3182014CML2SQLI")
      window.paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-2GB94113Y3182014CML2SQLI'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
          navigate('/user');
        }
      }).render('#paypal-button-container-P-2GB94113Y3182014CML2SQLI'); // Renders the PayPal button
    }
    else if(props.data == 'unlimited'){
      window.paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          setPlanID("P-3AR57177Y1619363XML2SSQQ")
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-3AR57177Y1619363XML2SSQQ'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
          navigate('/user');
        }
      }).render('#paypal-button-container-P-3AR57177Y1619363XML2SSQQ'); // Renders the PayPal button
    }                   

  }, []);
  console.log('planID'+planID);
  // return (
  //   <div>
  //     <div id={'paypal-button-container-'+planID} ref={paypal}></div>
  //   </div>
  // );
}