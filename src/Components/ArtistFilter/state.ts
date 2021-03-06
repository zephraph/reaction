import { Container } from "unstated"

type State = {
  medium: string
  major_periods?: string[]
  partner_id?: string
  for_sale?: boolean
  page?: number
}

export class FilterState extends Container<State> {
  state = {
    medium: "*",
    for_sale: true,
    page: 1,
  }

  setMajorPeriods(value) {
    this.setState({ major_periods: [value], page: 1 })
  }

  setPartner(value) {
    this.setState({ partner_id: value, page: 1 })
  }

  incrementPage() {
    this.setState({ page: this.state.page + 1 })
  }

  setFilter(filter, value) {
    if (filter === "major_period") {
      return this.setMajorPeriods(value)
    }
    if (filter === "gallery" || filter === "institution") {
      return this.setPartner(value)
    }
    this.setState({
      [filter.toLowerCase()]: value,
      page: 1,
    })
  }
}
