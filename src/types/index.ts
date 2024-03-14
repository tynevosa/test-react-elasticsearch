export type SearchSumType = {
  count: number,
  organization_count: number,
  filers: string[]
}

export type ResultItemType = {
  link: string,
  organization: string,
  country: string,
  applications: string[],
  technologies: string[],
  type: string,
  description: string
}