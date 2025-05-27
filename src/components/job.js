import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, locale }) => {
  const isSpanish = locale.startsWith("es");

  const millionLabel = isSpanish
    ? offer.salary === 1
      ? <FormattedMessage id="Million" />
      : <FormattedMessage id="Millions" />
    : <FormattedMessage id="Million" />;

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>
        <FormattedNumber value={offer.salary} /> {millionLabel}
      </td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.visits} />
      </td>
    </tr>
  );
};

export default Job;

