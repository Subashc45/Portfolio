export default function SectionTitle({ title, sub }) {
  return (<div className="sec-title"><h2>{title}</h2>{sub && <p>{sub}</p>}</div>);
}
