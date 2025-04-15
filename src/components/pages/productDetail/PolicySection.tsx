import PolicyTab from './PolitcyTab';

export default function PolicySection() {
  return (
    <section className="padded">
      <ul>
        <li>
          <PolicyTab />
        </li>
        <li>
          <PolicyTab />
        </li>
        <li>
          <PolicyTab />
        </li>
      </ul>
    </section>
  );
}
