import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>What is Art Therapy?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>How Art Therapy works?</h3>
              <p>Many people ask "What is art therapy and how does it work?" The underlying concepts are that in expressive arts therapies, people can understand and respond to their emotions and thoughts with a valuable new perspective, and that artistic expression is good for mental health.</p>
              <p>During a session, an art therapist works with clients to understand what is causing them distress. Then the therapist guides the client to create art that addresses the cause of their issue. During a session, art therapists:</p>
                <p>
                <li>Describe the goal of art therapy</li>
                <li>Explain that clients don't have to think of themselves as creative or artistic to benefit</li>
                <li>Help the client choose and use a medium, such as drawing, sculpture, collage, or painting</li>
                <li>Guide the client through expressing themselves through art, usually by asking questions</li>
                <li>Discuss the results, both the work of art and what the client felt</li>
                <li>Plan for another session or for the client to work on their own</li></p>
                
                <h3>Can Art Therapy Cause Harm?</h3>
                  <p>Art therapy, like other forms of therapy, can cause harm. Potential negative effects include:</p>
                <p>
                <li>Higher levels of stress or anxiety</li>
                <li>Surfacing emotions without effectively processing them</li>
                <li>Difficulty coping if therapy is abruptly terminated</li></p>

                <h3>Art Therapy Infographics comprises of:</h3>
                <li><b>Appreciation:</b><br/>Art helps us to revisit the value of ordinary things like the pretty colors in a splash of morning light on a table cloth or the familiar and nos- talgic aspects of old beer cans. Art embraces appreciaton.</li>
                <br/>
                <li><b>Self-Understanding:</b><br/>Art helps us to complete our own unformed thoughts and ideas. We have an ‘aha’ moment when we see a piece of art that perfectly captures a feeling or thought we have had that we couldn’t express.</li>
                <br/>
                <li><b>Art promotes self-growth:</b><br/>When we see a picture of some- thing we haven’t personally expe- rienced or of an emotion that we don’t have a personal context for, we can take the time to think about it, react to it, and empathize with. Art promotes self-growth.</li>
                <br/>
                <li><b>Memory:</b><br/>Appreciation Art focuses in on the essence of the scene rather than the whole of it. It homes in on what is most memorable from the scene the artist was viewing. Art records and preserves emotions.</li>
              {/* <h3>Art Therapy comprises of:</h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
  <div className="col-xs-12 col-md-6">
    <img src="img/art therapy infographic.png" className="img-responsive" alt="" style={{ maxWidth: "100%" }} />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};
