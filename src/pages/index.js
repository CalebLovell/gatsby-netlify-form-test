import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <form
        name="bunnies"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onsubmit="return false"
      >
        <input type="hidden" name="form-name" value="bunnies" />
        <input
          type="hidden"
          name="bot-field"
          value="Don't fill this out if you're a human."
        />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
  </Layout>
)

export default IndexPage
