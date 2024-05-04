import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import leadsData from '../utils/leads.json';


class Leads extends Component {
    state = {
        leads: leadsData.map(lead => ({ ...lead, emailRevealed: false }))
    };

    loadRazorpay = (callback) => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onerror = () => {
            alert("Razorpay SDK failed to load. Are you online?");
        };
        script.onload = callback;
        document.body.appendChild(script);
    }

    revealEmail = (id, amount) => {
        this.loadRazorpay(() => this.startPaymentProcess(id, amount));
    };

    startPaymentProcess = (id, amount) => {
        const lead = this.state.leads.find(l => l.id === id);

        var options = {
            "key": "rzp_test_SrrurMUZ8xOO7f", // Enter the Key ID generated from the Dashboard
            "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, multiply by 100 to convert to paise
            "currency": "INR",
            "name": "Reveal Email",
            "description": "Payment to reveal email address",
            "image": "https://example.com/your_logo",
            "handler": (response) => {
                // Handle the payment success
                this.setState({
                    leads: this.state.leads.map(lead =>
                        lead.id === id ? { ...lead, emailRevealed: true } : lead
                    )
                });
                alert("Payment successful. Email revealed.");
            },
            "prefill": {
                "name": lead.firstName + ' ' + lead.lastName,
                "email": "",
                "contact": lead.phoneNumber
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#F37254"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    render() {
        const { leads } = this.state;

        return (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Leads List</h2>
                {leads.map((lead, index) => (
                <Row key={index} className="mb-4">
                <Col md={12}>
                    <div className="lead-card">
                        <div className="lead-header">
                            <FontAwesomeIcon icon={faEye} className="mr-2" style={{ color: '#17a2b8' }} />
                            <h6>{lead.firstName} {lead.lastName} - {lead.companyName}</h6>
                            {lead.emailRevealed ? (
                                <span>Email: {lead.email}</span>
                            ) : (
                                <button className="reveal-btn" onClick={() => this.revealEmail(lead.id, 1)}>
                                    Reveal Email for ₹1
                                </button>
                            )}
                        </div>
                        <p>{lead.jobTitle}</p>
                        <p>Phone: {lead.phoneNumber}</p>
                        <p>LinkedIn: <a href={lead.linkedInProfile} target="_blank" rel="noopener noreferrer" className="lead-link">{lead.linkedInProfile}</a></p>
                    </div>
                </Col>
            </Row>
            
                ))}
            </div>
        );
    }
}

export default Leads;
