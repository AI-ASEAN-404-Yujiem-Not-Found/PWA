export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export type TabIconProps = {
  image: string
  title: string
  size?: {
    width: number
    height: number
  }
}