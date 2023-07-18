import { useEffect, useMemo, useState } from "react"
import DummyServices from "../services/DummyServices"
import { CustomerTy } from "../type"
import _ from "lodash"

interface Props {
  data: Array<CustomerTy> | null
  searchQuery?: string
}

export function useFilterCustomer(props: Props) {
  const customerFilter = useMemo(() => {
    return _.chain(props.data)
      .filter((customer: CustomerTy) => {
        let searchBySetTitle = customer.firstName.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "")
        if (searchBySetTitle) {
          return true
        }

        let searchByLastname = customer.lastName.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "")
        if (searchByLastname) {
          return true
        }

        let searchByEmail = customer.email.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "")
        if (searchByEmail) {
          return true
        }

        return false
      })
      .value()
  }, [props.data, props.searchQuery])

  return customerFilter
}

export default function useCustomer() {
  const [custoemrs, setCustomers] = useState<Array<CustomerTy> | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerTy | null>()
  const [customerData, setCustomerData] = useState<CustomerTy | null>(null)

  async function getCustomers() {
    try {
      const res = await DummyServices.customers()
      setCustomers(res.data.users)
    } catch {
    } finally {
    }
  }

  async function getCustomerData(id: number) {
    try {
      const res = await DummyServices.customerById(id)
      setCustomerData(res.data)
    } catch {
    } finally {
    }
  }

  return {
    getCustomers,
    custoemrs,
    searchQuery,
    setSearchQuery,
    selectedCustomer,
    setSelectedCustomer,
    getCustomerData,
    customerData,
  }
}
