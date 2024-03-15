import Table from "../../ui/Table";
import {
  toPersianNumbersComma,
  toPersianNumers,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];
function ProposalRow({ proposal, index }) {
  const { duration, description, price, status } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{toPersianNumers(duration)} روز</td>
      <td>
        {toPersianNumbersComma(price)}
        <span className="text-xs"> ریال</span>
      </td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
