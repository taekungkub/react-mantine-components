import { useMemo, useState } from "react"

type Props = {
  data: any
  pageSize: number
}
export const usePagination = ({ data, pageSize }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPage = Math.ceil(data.length / pageSize)
  const indexOfLastRecord = currentPage * pageSize
  const indexOfFirstRecord = indexOfLastRecord - pageSize
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

  const nextPage = () => {
    if (currentPage !== totalPage) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return {
    totalPage,
    currentRecords,
    nextPage,
    prevPage,
    setCurrentPage,
    currentPage,
  }
}

export default usePagination
