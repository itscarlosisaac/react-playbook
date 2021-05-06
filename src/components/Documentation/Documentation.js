import React from 'react';

export const Documentation = ({ tag, title, properties, description }) => {

  return (
    <section className="app__documentation">
      <header className="app__documentation--header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <article className="app__documentation--content">
        <pre>
          <code className="app__documentation--main--tag">
            <p>Usage tag <span>{tag}</span> </p>
          </code>
        </pre>
        <div className="app__documentation--details">
          <div className="app__documentation--details--title" >
            <span className="">Name</span>
            <span className="">Type </span>
            <span className="">Description</span>
          </div>
          {
            Object.entries(properties).map((prop, i) => (
                <div className="app__documentation--details--row" key={i + prop[0]} id={`${i}-${prop[0]}`}>
                  <span className="u__capitalize">{prop[0]} </span>
                  <span className="">'{prop[1].type}' </span>
                  <span className="">{prop[1].desc} </span>
                </div>
              ) 
            )
          }
        </div>
      </article>
    </section>
  )
}
