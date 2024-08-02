const Error = ({status, msg}) => {
  return (
    <article id="error"className="message is-danger">
      <h2 className="message-header">OOPS, ART BLOCK!</h2>
      <section className="message-body">
        <p>Something went wrong...
            </p>
        {status == null ? <p> 400 </p> : <p> {status}</p>}
        {msg == null ? <p>Bad Request</p> : <p> {msg}</p>}
      </section>
    </article>
  );
};

export default Error;
