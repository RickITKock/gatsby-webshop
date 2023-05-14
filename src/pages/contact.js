/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import PageTitle from "../containers/content/PageTitle/PageTitle"
import Card from "react-bootstrap/Card"
import FadeInFromTop from "../components/Animations/FadeIn/FadeInFromTop"
import EmailInput from "../components/Inputs/EmailInput"
import NameInput from "../components/Inputs/NameInput"
import MessageInput from "../components/Inputs/MessageInput"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import PrimaryButton from "../components/Clickable/PrimaryButton/PrimaryButton"
import axios from "axios"

//=============================================================================

const ContactForm = ({ onSubmit, ...rest }) => {
  return (
    <Form {...rest} onSubmit={onSubmit} style={{ fontSize: "1.6rem" }}>
      <Form.Row>
        <Form.Group as={Col} controlId={`contactName`} xs={12} md={6}>
          <Form.Label>Name</Form.Label>
          <NameInput />
        </Form.Group>
        <Form.Group as={Col} controlId={`contactEmail`} xs={12} md={6}>
          <Form.Label>Email</Form.Label>
          <EmailInput />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId={`contactMessage`}>
        <Form.Label>Message</Form.Label>
        <MessageInput />
      </Form.Group>
      <div className="d-flex">
        <PrimaryButton
          type="submit"
          className="px-5 py-3 mt-3 flex-grow-1 flex-md-grow-0 ml-auto"
        >
          Send Message
        </PrimaryButton>
      </div>
    </Form>
  )
}

const BlogPage = () => {
  const timeout = 500
  const [animate, setAnimation] = useState(false)

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  useEffect(() => {
    setAnimation(true)
  }, [animate])

  const handleSubmitContactForm = e => {
    e.preventDefault()
    const form = e.target

    handleServerResponse(true, null, form)

    form.reset()
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/3accb25d-4c37-4818-8770-024cf0e7d58f",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, null, form)
        console.log(r)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
        console.log(r)
      })
  }

  return (
    <>
      <SEO title="Contact" />
      <Container className="p-0" fluid>
        <PageTitle>
          <h1>Contact</h1>
          <h5 className="formal-text mx-5">
            Feel free to get in touch with us
          </h5>
        </PageTitle>
        <Container className="my-5">
          <Card
            className={`border-0 card-shadow-only card-background-color`}
            style={{
              borderRadius: "0.5rem",
            }}
          >
            <Card.Body className={`px-5 py-4`}>
              <FadeInFromTop animate={animate} timeout={timeout}>
                <p className="text-center">
                  If you've placed an order or need help making a purchase
                  decision or if you have any questions, feel free to contact
                  our friendly, knowledgeable customer service representatives.
                  We're always available to help.
                </p>
                <Row>
                  <Col
                    xs={{ span: 12, order: 2 }}
                    md={{ span: 4, order: 1 }}
                    lg={{ span: 6, order: 1 }}
                  >
                    <h2 className="text-center">Company Info</h2>
                    <p>
                      Javorzo <br />
                      Laakweg 24N, 2521SC Den Haag <br />
                      info@werkcomfortabel.eu <br />
                      Tel: 085 004 1279 <br />
                      Chamber of Commerce: 78163862 <br />
                      VAT Number: NL861286674B01
                    </p>
                    <br />
                    <p>
                      You can always contact us by filling in the contact form
                      on this page or by email: <b>info@werkcomfortabel.eu</b>{" "}
                      or phone via <b>+31 (0)85 004 1279</b> during office
                      hours. Feel free to contact us if you have any questions
                      about our products and services.
                    </p>
                  </Col>
                  <Col
                    xs={{ span: 12, order: 1 }}
                    md={{ span: 8, order: 2 }}
                    lg={{ span: 6, order: 2 }}
                    className="mb-5 mb-md-0"
                  >
                    {!serverState.status?.ok ? (
                      <>
                        <h2 className="text-center">Contact Form</h2>
                        <ContactForm
                          onSubmit={e => handleSubmitContactForm(e)}
                        />
                      </>
                    ) : (
                      <div className="d-flex h-100">
                        <Card
                          className="p-5 rounded-lg card-shadow-only border-0 align-self-center"
                          style={{
                            background:
                              "linear-gradient(to left, #743ad5, #d53a9d)",
                          }}
                        >
                          <Card.Body>
                            <h1 className={`text-light`}>Thank You!</h1>
                            <hr
                              style={{
                                borderColor: "rgba(255, 255, 255, 0.1)",
                              }}
                            />
                            <Card.Text className={`text-light`}>
                              Thanks for contacting us! We'll be in touch soon!
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    )}
                  </Col>
                </Row>
              </FadeInFromTop>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  )
}

export default BlogPage

//=============================================================================
