"use client"
import { useGetAllHowItWorksQuery } from '@/app/redux/services/howItWorks.services'
import OpenButton from '@/src/components/shears/button/Openbutton'
import Container from '@/src/components/shears/Container'
import Searchbar from '@/src/components/shears/Searchbar'
import ManageColumns from '@/src/components/shears/table/ManageColumns'
import React, { useState } from 'react'
import { howToWorksCloumns } from './how-to-cloumns'
import CategoryTable from '../categories/CategoryTable'
import ShowEntries from '@/src/components/shears/Pagination/ShowEntries'
import TotalEntries from '@/src/components/shears/Pagination/TotalEntries'
import Pagination from '@/src/components/shears/Pagination/Pagination'
import TableLoader from '@/src/components/shears/table/TableLoader'
import TestMessage from './TestMessage'

export default function HowToWorksComponent() {
      const [page, serPage] = React.useState<number>(1);
      const [limit, setLimit] = React.useState<number>(10);
      const [isOpenAddCategoryModal, setIsOpenAddCategoryModal] =
        React.useState<boolean>(false);
      const [visibleColumns, setVisibleColumns] = useState<string[]>(
        howToWorksCloumns.map((col) => col.key)
      );
      const [searchTerm, setSearchTerm] = React.useState("");
      const [sort, setSort] = React.useState<{
        [key: string]: "asc" | "desc";
      }>({});
    const {data: howItWorksData, isLoading: howItWorksLoading} = useGetAllHowItWorksQuery({
        page,
        limit,
        searchTerm,
        sort: JSON.stringify({ name: "asc" }),
      });
      const handlePageChange = (page: number) => {
        serPage(page);
      };
      const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        serPage(1);
      };
      const pageNation = howItWorksData?.meta;
      if (howItWorksLoading) return <TableLoader />;

  return (
    <Container className="h-full w-full flex flex-col gap-y-4">
    <section className="lg:flex justify-between gap-x-4 items-center">
      <div className="flex justify-start gap-3 relative">
        <Searchbar onChange={(val) => setSearchTerm(val)} />
        <OpenButton
          onClick={() => setIsOpenAddCategoryModal(true)}
          label="Add Category"
        />
      </div>
      <div className="flex  justify-end gap-x-4 items-center">
        <ManageColumns
          columns={howToWorksCloumns}
          onVisibilityChange={setVisibleColumns}
        />
      </div>
    </section>
    <section className="h-full w-full flex flex-col gap-y-0.5 overflow-auto space-y-2">
      {/* <CategoryTable
        category={categoryData?.data?.data}
        visibleColumns={visibleColumns}
        sorting={sort}
        setSorting={setSort}
        refetch={refetch}
      /> */}
      <TestMessage></TestMessage>
    </section>
    <footer className="w-full p-2  rounded shadow sm:flex justify-between gap-x-4 py-3">
      <ShowEntries limit={limit} onLimitChange={handleLimitChange} />
      <div className="flex items-center gap-x-4">
        <TotalEntries total={pageNation?.total || 0} />
        <Pagination
          currentPage={page}
          totalPages={pageNation?.totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </footer>
    {/* <AddCategoryModal
      isOpen={isOpenAddCategoryModal}
      onSuccess={() => {}}
      onClose={() => setIsOpenAddCategoryModal(false)}
    /> */}
  </Container>
  )
}
