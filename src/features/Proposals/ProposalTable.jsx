import React, { useState } from "react";
import useProposals from "./useProposals";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
function ProposalTable() {
  const { isLoading, proposals } = useProposals();
  const renderTemplate = () => {
    if (isLoading) return <Loader />;
    if (!proposals.length) return <Empty resoursName="درخواستی" />;
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضحیات</th>
          <th>زمان</th>
          <th>هزینه</th>
          <th>وضیعت</th>
        </Table.Header>
        <Table.body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.body>
      </Table>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl text-secondary-600">
          {" "}
          لیست درخواست‌ها
        </h1>
      </div>
      {renderTemplate()}
    </>
  );
}

export default ProposalTable;
