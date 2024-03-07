import React from "react";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import Empty from "../../ui/Empty";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resoursName="درخواستی" />;
  console.log(proposals);
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}
export default ProposalsTable;
