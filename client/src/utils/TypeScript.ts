import { ChangeEvent } from 'react'

export type InputChange = ChangeEvent<HTMLInputElement>

export interface IParams {
  page: string
  slug: string
}