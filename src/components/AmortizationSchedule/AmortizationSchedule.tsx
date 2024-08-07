import React, { useState } from "react";
import { IAmortizationSchedule } from "./AmortizationScheduleTypes";
import { ITEMS_PER_PAGE } from "../../constants";
import {
  PageButton,
  PaginationContainer,
  Table,
  Td,
  Th,
} from "./AmortizationScheduleStyled";

const AmortizationSchedule: React.FC<IAmortizationSchedule> = ({
  schedule,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(schedule.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = schedule.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Month</Th>
            <Th>Principal Amount</Th>
            <Th>Percent</Th>
            <Th>Residue</Th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(({ month, principal, interest, balance }) => (
            <tr key={month}>
              <Td>{month}</Td>
              <Td>{principal.toFixed(2)}</Td>
              <Td>{interest.toFixed(2)} %</Td>
              <Td>{balance.toFixed(2)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default AmortizationSchedule;
